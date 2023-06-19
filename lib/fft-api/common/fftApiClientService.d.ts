import { QueryParams } from '../../common';
export declare class FftApiClient {
    private readonly projectId;
    private readonly username;
    private readonly password;
    private readonly apiKey;
    private readonly baseUrl;
    private readonly authService;
    private readonly httpClient;
    constructor(projectId: string, username: string, password: string, apiKey: string);
    post<T>(path: string, data?: Record<string, unknown>, params?: QueryParams): Promise<T>;
    get<T>(path: string, params?: QueryParams): Promise<T>;
    patch<T>(path: string, data: Record<string, unknown>, params?: QueryParams): Promise<T>;
    delete<T>(path: string, params?: QueryParams): Promise<T>;
    private doRequest;
}
