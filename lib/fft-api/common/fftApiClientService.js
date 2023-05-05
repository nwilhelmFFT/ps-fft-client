"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FftApiClient = void 0;
const common_1 = require("../../common");
class FftApiClient {
    constructor(authService, httpClient, projectId) {
        this.authService = authService;
        this.httpClient = httpClient;
        this.projectId = projectId;
        this.baseUrl = `https://${this.projectId}.api.fulfillmenttools.com/api`;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmZ0QXBpQ2xpZW50U2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mZnQtYXBpL2NvbW1vbi9mZnRBcGlDbGllbnRTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHlDQUFnRjtBQUVoRixNQUFhLFlBQVk7SUFFdkIsWUFDbUIsV0FBd0IsRUFDeEIsVUFBc0IsRUFDdEIsU0FBaUI7UUFGakIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixjQUFTLEdBQVQsU0FBUyxDQUFRO1FBRWxDLElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVyxJQUFJLENBQUMsU0FBUywrQkFBK0IsQ0FBQztJQUMxRSxDQUFDO0lBRU0sS0FBSyxDQUFDLElBQUksQ0FBSSxJQUFZLEVBQUUsSUFBOEIsRUFBRSxNQUFvQjtRQUNyRixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRU0sS0FBSyxDQUFDLEdBQUcsQ0FBSSxJQUFZLEVBQUUsTUFBb0I7UUFDcEQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFVLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVNLEtBQUssQ0FBQyxLQUFLLENBQUksSUFBWSxFQUFFLElBQTZCLEVBQUUsTUFBb0I7UUFDckYsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFVLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVNLEtBQUssQ0FBQyxNQUFNLENBQUksSUFBWSxFQUFFLE1BQW9CO1FBQ3ZELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBVSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFTyxLQUFLLENBQUMsU0FBUyxDQUNyQixNQUFrQixFQUNsQixJQUFZLEVBQ1osSUFBOEIsRUFDOUIsTUFBb0I7UUFFcEIsTUFBTSxLQUFLLEdBQUcsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hELE1BQU0sYUFBYSxHQUFHLEVBQUUsYUFBYSxFQUFFLFVBQVUsS0FBSyxFQUFFLEVBQUUsQ0FBQztRQUMzRCxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFJO1lBQzlDLE1BQU07WUFDTixHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksRUFBRTtZQUM5QixJQUFJLEVBQUUsSUFBSTtZQUNWLE1BQU07WUFDTixhQUFhO1lBQ2IsT0FBTyxFQUFFLE1BQU0sS0FBSyxtQkFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsb0JBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNyRCxDQUFDLENBQUM7UUFDSCxPQUFPLE1BQU0sQ0FBQyxJQUFTLENBQUM7SUFDMUIsQ0FBQztDQUNGO0FBNUNELG9DQTRDQyJ9