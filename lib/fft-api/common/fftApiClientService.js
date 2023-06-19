"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FftApiClient = void 0;
const auth_1 = require("../auth");
const common_1 = require("../../common");
class FftApiClient {
    constructor(projectId, username, password, apiKey) {
        this.projectId = projectId;
        this.username = username;
        this.password = password;
        this.apiKey = apiKey;
        this.baseUrl = `https://${this.projectId}.api.fulfillmenttools.com/api`;
        this.httpClient = new common_1.HttpClient();
        this.authService = new auth_1.AuthService({
            apiKey,
            apiPassword: password,
            apiUser: username,
            authUrl: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword',
            refreshUrl: 'https://securetoken.googleapis.com/v1/token'
        }, this.httpClient);
    }
    async post(path, data, params) {
        return this.doRequest(common_1.HttpMethod.POST, path, data, params);
    }
    async get(path, params) {
        return this.doRequest(common_1.HttpMethod.GET, path, undefined, params);
    }
    async patch(path, data, params) {
        return this.doRequest(common_1.HttpMethod.PATCH, path, data, params);
    }
    async delete(path, params) {
        return this.doRequest(common_1.HttpMethod.DELETE, path, undefined, params);
    }
    async doRequest(method, path, data, params) {
        const token = await this.authService.getToken();
        const customHeaders = { Authorization: `Bearer ${token}` };
        const result = await this.httpClient.request({
            method,
            url: `${this.baseUrl}/${path}`,
            body: data,
            params,
            customHeaders,
            retries: method === common_1.HttpMethod.GET ? common_1.MAX_RETRIES : 0,
        });
        return result.body;
    }
}
exports.FftApiClient = FftApiClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmZ0QXBpQ2xpZW50U2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mZnQtYXBpL2NvbW1vbi9mZnRBcGlDbGllbnRTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGtDQUFzQztBQUN0Qyx5Q0FBZ0Y7QUFFaEYsTUFBYSxZQUFZO0lBSXZCLFlBRW1CLFNBQWlCLEVBQ2pCLFFBQWdCLEVBQ2hCLFFBQWdCLEVBQ2hCLE1BQWM7UUFIZCxjQUFTLEdBQVQsU0FBUyxDQUFRO1FBQ2pCLGFBQVEsR0FBUixRQUFRLENBQVE7UUFDaEIsYUFBUSxHQUFSLFFBQVEsQ0FBUTtRQUNoQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRS9CLElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVyxJQUFJLENBQUMsU0FBUywrQkFBK0IsQ0FBQztRQUN4RSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksbUJBQVUsRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxrQkFBVyxDQUNoQztZQUNBLE1BQU07WUFDTixXQUFXLEVBQUUsUUFBUTtZQUNyQixPQUFPLEVBQUUsUUFBUTtZQUNqQixPQUFPLEVBQUUsdUVBQXVFO1lBQ2hGLFVBQVUsRUFBRSw2Q0FBNkM7U0FDeEQsRUFDRCxJQUFJLENBQUMsVUFBVSxDQUNoQixDQUFDO0lBQ0osQ0FBQztJQUVNLEtBQUssQ0FBQyxJQUFJLENBQUksSUFBWSxFQUFFLElBQThCLEVBQUUsTUFBb0I7UUFDckYsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFVLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVNLEtBQUssQ0FBQyxHQUFHLENBQUksSUFBWSxFQUFFLE1BQW9CO1FBQ3BELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBVSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFTSxLQUFLLENBQUMsS0FBSyxDQUFJLElBQVksRUFBRSxJQUE2QixFQUFFLE1BQW9CO1FBQ3JGLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBVSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFTSxLQUFLLENBQUMsTUFBTSxDQUFJLElBQVksRUFBRSxNQUFvQjtRQUN2RCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQVUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRU8sS0FBSyxDQUFDLFNBQVMsQ0FDckIsTUFBa0IsRUFDbEIsSUFBWSxFQUNaLElBQThCLEVBQzlCLE1BQW9CO1FBRXBCLE1BQU0sS0FBSyxHQUFHLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoRCxNQUFNLGFBQWEsR0FBRyxFQUFFLGFBQWEsRUFBRSxVQUFVLEtBQUssRUFBRSxFQUFFLENBQUM7UUFDM0QsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBSTtZQUM5QyxNQUFNO1lBQ04sR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLEVBQUU7WUFDOUIsSUFBSSxFQUFFLElBQUk7WUFDVixNQUFNO1lBQ04sYUFBYTtZQUNiLE9BQU8sRUFBRSxNQUFNLEtBQUssbUJBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLG9CQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDckQsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxNQUFNLENBQUMsSUFBUyxDQUFDO0lBQzFCLENBQUM7Q0FDRjtBQTNERCxvQ0EyREMifQ==