import { BasicHttpClient, HttpRequestConfiguration, HttpResult } from './models';
import { RejectedTestHttpRequest, ResolvedTestHttpRequest, TestHttpClientHandler } from './testHttpClientHandler';
import HttpStatus from 'http-status-enum';
export class HttpRequestNotMockedError extends Error {}

export class TestHttpClient implements BasicHttpClient {
  constructor(private readonly testController: TestHttpClientHandler) {}

  public async request<TDto>(config: HttpRequestConfiguration): Promise<HttpResult<TDto>> {
    const request = this.testController.lookupRequest(config);

    if (!request) {
      throw new HttpRequestNotMockedError(
        `Please mock "${config.method} - ${this.testController.generateCombinedUrl(config)}"`
      );
    }

    const resolvedHttpRequest = request as ResolvedTestHttpRequest<TDto>;

    const resolvedObj = resolvedHttpRequest.resolveTo;
    if (resolvedObj) {
      const httpResult: HttpResult<TDto> = {
        body: resolvedObj as TDto,
        statusCode: resolvedHttpRequest.resolveStatusCode ?? HttpStatus.OK,
      };
      return Promise.resolve(httpResult);
    }
    return Promise.reject((request as RejectedTestHttpRequest).rejectsTo);
  }
}
