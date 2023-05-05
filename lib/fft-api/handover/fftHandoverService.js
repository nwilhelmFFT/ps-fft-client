"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FftHandoverService = void 0;
const types_1 = require("../types");
var ActionEnum = types_1.ModifyHandoverjobAction.ActionEnum;
const common_1 = require("../../common");
class FftHandoverService {
    constructor(apiClient) {
        this.apiClient = apiClient;
        this.path = 'handoverjobs';
        this.logger = new common_1.CustomLogger();
    }
    async findByPickJobRef(pickJobId) {
        try {
            return await this.apiClient.get(this.path, {
                pickJobRef: pickJobId,
            });
        }
        catch (err) {
            const httpError = err;
            this.logger.error(`Could not get handover jobs with for pickjob id '${pickJobId}'. Failed with status ${httpError.status}, error: ${httpError.response ? JSON.stringify(httpError.response.body) : ''}`);
            throw err;
        }
    }
    async findById(handoverJobId) {
        try {
            return await this.apiClient.get(`${this.path}/${handoverJobId}`);
        }
        catch (err) {
            const httpError = err;
            this.logger.error(`Could not get handover job with id '${handoverJobId}'. Failed with status ${httpError.status}, error: ${httpError.response ? JSON.stringify(httpError.response.body) : ''}`);
            throw err;
        }
    }
    async markAsHandedOver(handoverJobId, handoverJobVersion) {
        const patchObject = {
            version: handoverJobVersion,
            actions: [
                {
                    action: ActionEnum.ModifyHandoverjob,
                    status: types_1.HandoverjobStatus.HANDEDOVER,
                },
            ],
        };
        try {
            return await this.apiClient.patch(`${this.path}/${handoverJobId}`, { ...patchObject });
        }
        catch (err) {
            const httpError = err;
            this.logger.error(`Could not mark handover job with id '${handoverJobId}' as delivered. Failed with status ${httpError.status}, error: ${httpError.response ? JSON.stringify(httpError.response.body) : ''}`);
            throw err;
        }
    }
}
exports.FftHandoverService = FftHandoverService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmZ0SGFuZG92ZXJTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2ZmdC1hcGkvaGFuZG92ZXIvZmZ0SGFuZG92ZXJTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLG9DQU1rQjtBQUVsQixJQUFPLFVBQVUsR0FBRywrQkFBdUIsQ0FBQyxVQUFVLENBQUM7QUFFdkQseUNBQTRDO0FBRTVDLE1BQWEsa0JBQWtCO0lBRzdCLFlBQTZCLFNBQXVCO1FBQXZCLGNBQVMsR0FBVCxTQUFTLENBQWM7UUFGbkMsU0FBSSxHQUFHLGNBQWMsQ0FBQztRQUN0QixXQUFNLEdBQStCLElBQUkscUJBQVksRUFBc0IsQ0FBQztJQUN0QyxDQUFDO0lBRWpELEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFpQjtRQUM3QyxJQUFJO1lBQ0YsT0FBTyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUF1QixJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUMvRCxVQUFVLEVBQUUsU0FBUzthQUN0QixDQUFDLENBQUM7U0FDSjtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osTUFBTSxTQUFTLEdBQUcsR0FBb0IsQ0FBQztZQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FDZixvREFBb0QsU0FBUyx5QkFDM0QsU0FBUyxDQUFDLE1BQ1osWUFBWSxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUNoRixDQUFDO1lBRUYsTUFBTSxHQUFHLENBQUM7U0FDWDtJQUNILENBQUM7SUFFTSxLQUFLLENBQUMsUUFBUSxDQUFDLGFBQXFCO1FBQ3pDLElBQUk7WUFDRixPQUFPLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQWMsR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLGFBQWEsRUFBRSxDQUFDLENBQUM7U0FDL0U7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNaLE1BQU0sU0FBUyxHQUFHLEdBQW9CLENBQUM7WUFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQ2YsdUNBQXVDLGFBQWEseUJBQXlCLFNBQVMsQ0FBQyxNQUFNLFlBQzNGLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDakUsRUFBRSxDQUNILENBQUM7WUFFRixNQUFNLEdBQUcsQ0FBQztTQUNYO0lBQ0gsQ0FBQztJQUVNLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFxQixFQUFFLGtCQUEwQjtRQUM3RSxNQUFNLFdBQVcsR0FBNEI7WUFDM0MsT0FBTyxFQUFFLGtCQUFrQjtZQUMzQixPQUFPLEVBQUU7Z0JBQ1A7b0JBQ0UsTUFBTSxFQUFFLFVBQVUsQ0FBQyxpQkFBaUI7b0JBQ3BDLE1BQU0sRUFBRSx5QkFBaUIsQ0FBQyxVQUFVO2lCQUNyQzthQUNGO1NBQ0YsQ0FBQztRQUVGLElBQUk7WUFDRixPQUFPLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQWMsR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLGFBQWEsRUFBRSxFQUFFLEVBQUUsR0FBRyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1NBQ3JHO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixNQUFNLFNBQVMsR0FBRyxHQUFvQixDQUFDO1lBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUNmLHdDQUF3QyxhQUFhLHNDQUNuRCxTQUFTLENBQUMsTUFDWixZQUFZLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQ2hGLENBQUM7WUFFRixNQUFNLEdBQUcsQ0FBQztTQUNYO0lBQ0gsQ0FBQztDQUNGO0FBN0RELGdEQTZEQyJ9