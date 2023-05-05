import { AuthService } from '../auth';
import { HttpClient, QueryParams } from '../../common';
export declare class FftApiClient {
    private readonly authService;
    private readonly httpClient;
    private readonly projectId;
    private readonly baseUrl;
    constructor(authService: AuthService, httpClient: HttpClient, projectId: string);
    post<T>(path: string, data?: Record<string, unknown>, params?: QueryParams): Promise<T>;
    get<T>(path: string, params?: QueryParams): Promise<T>;
    patch<T>(path: string, data: Record<string, unknown>, params?: QueryParams): Promise<T>;
    delete<T>(path: string, params?: QueryParams): Promise<T>;
    private doRequest;
}
