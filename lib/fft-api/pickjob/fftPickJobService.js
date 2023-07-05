"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FftPickJobService = void 0;
const date_fns_1 = require("date-fns");
const common_1 = require("../../common");
class FftPickJobService {
    constructor(apiClient) {
        this.apiClient = apiClient;
        this.path = 'pickjobs';
        this.logger = new common_1.CustomLogger();
    }
    async getByTenantOrderId(tenantOrderId) {
        try {
            return await this.apiClient.get(this.path, { tenantOrderId });
        }
        catch (err) {
            const httpError = err;
            this.logger.error(`Could not get pick jobs with tenant order id '${tenantOrderId}'. Failed with status ${httpError.status}, error: ${httpError.response ? JSON.stringify(httpError.response.body) : ''}`);
            throw err;
        }
    }
    async update(pickJob, actions) {
        try {
            return await this.apiClient.patch(`${this.path}/${pickJob.id}`, { version: pickJob.version, actions });
        }
        catch (err) {
            const httpError = err;
            this.logger.error(`Could not update pick job with id '${pickJob.id}'. Failed with status ${httpError.status}, error: ${httpError.response ? JSON.stringify(httpError.response.body) : ''}`);
            throw err;
        }
    }
    async abort(pickJobId, version) {
        try {
            return await this.apiClient.patch(`${this.path}/${pickJobId}`, {
                version,
                actions: [
                    {
                        action: 'AbortPickJob',
                    },
                ],
            });
        }
        catch (err) {
            const httpError = err;
            this.logger.error(`Could not abort pick job with id '${pickJobId}' and version ${version}. Failed with status ${httpError.status}, error: ${httpError.response ? JSON.stringify(httpError.response.body) : ''}`);
            throw err;
        }
    }
    async getById(pickJobId) {
        try {
            return await this.apiClient.get(`${this.path}/${pickJobId}`);
        }
        catch (err) {
            const httpError = err;
            this.logger.error(`Could not get pick job with id '${pickJobId}'. Failed with status ${httpError.status}, error: ${httpError.response ? JSON.stringify(httpError.response.body) : ''}`);
            throw err;
        }
    }
    async getOpenPickJobsByFacilityRef(id, startTargetTime, endTargetTime, size) {
        const params = {
            facilityRef: id,
            status: ['OPEN', 'IN_PROGRESS', 'PICKED', 'PACKABLE'].join(','),
            orderBy: 'TARGET_TIME_DESC',
            ...(size && { size: size.toString() }),
            ...(startTargetTime && (0, date_fns_1.isDate)(startTargetTime) && { startTargetTime: startTargetTime.toISOString() }),
            ...(endTargetTime && (0, date_fns_1.isDate)(endTargetTime) && { endTargetTime: endTargetTime.toISOString() }),
        };
        try {
            return await this.apiClient.get(this.path, params);
        }
        catch (err) {
            const httpError = err;
            this.logger.error(`Could not get pick jobs for facility '${id}'. Failed with status ${httpError.status}, error: ${httpError.response ? JSON.stringify(httpError.response.body) : ''}`);
            throw err;
        }
    }
}
exports.FftPickJobService = FftPickJobService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmZ0UGlja0pvYlNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZmZ0LWFwaS9waWNram9iL2ZmdFBpY2tKb2JTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHVDQUFrQztBQUlsQyx5Q0FBeUQ7QUFHekQsTUFBYSxpQkFBaUI7SUFHNUIsWUFBNkIsU0FBdUI7UUFBdkIsY0FBUyxHQUFULFNBQVMsQ0FBYztRQUZuQyxTQUFJLEdBQUcsVUFBVSxDQUFDO1FBQ2xCLFdBQU0sR0FBOEIsSUFBSSxxQkFBWSxFQUFxQixDQUFDO0lBQ3BDLENBQUM7SUFFakQsS0FBSyxDQUFDLGtCQUFrQixDQUFDLGFBQXFCO1FBQ25ELElBQUk7WUFDRixPQUFPLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQW1CLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxhQUFhLEVBQUUsQ0FBQyxDQUFDO1NBQ2pGO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixNQUFNLFNBQVMsR0FBRyxHQUFvQixDQUFDO1lBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUNmLGlEQUFpRCxhQUFhLHlCQUM1RCxTQUFTLENBQUMsTUFDWixZQUFZLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQ2hGLENBQUM7WUFFRixNQUFNLEdBQUcsQ0FBQztTQUNYO0lBQ0gsQ0FBQztJQUVNLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBZ0IsRUFBRSxPQUFxQztRQUN6RSxJQUFJO1lBQ0YsT0FBTyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxPQUFPLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxD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