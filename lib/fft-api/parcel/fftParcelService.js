"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FftParcelService = void 0;
const common_1 = require("../../common");
class FftParcelService {
    constructor(apiClient) {
        this.apiClient = apiClient;
        this.path = 'parcels';
        this.logger = new common_1.CustomLogger();
    }
    async findById(parcelId) {
        try {
            return await this.apiClient.get(`${this.path}/${parcelId}`);
        }
        catch (err) {
            const httpError = err;
            this.logger.error(`Could not get parcel with id '${parcelId}'. Failed with status ${httpError.status}, error: ${httpError.response ? JSON.stringify(httpError.response.body) : ''}`);
            throw err;
        }
    }
    async getShippingLabel(parcelId) {
        try {
            return await this.apiClient.get(`${this.path}/${parcelId}/send.pdf`);
        }
        catch (err) {
            const httpError = err;
            this.logger.error(`Could not get shipping label for parcel with id '${parcelId}'. Failed with status ${httpError.status}, error: ${httpError.response ? JSON.stringify(httpError.response.body) : ''}`);
            throw err;
        }
    }
    async findMultiple(ids) {
        return await Promise.all(ids.map(async (i) => await this.findById(i)));
    }
}
exports.FftParcelService = FftParcelService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmZ0UGFyY2VsU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mZnQtYXBpL3BhcmNlbC9mZnRQYXJjZWxTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUlBLHlDQUE0QztBQUU1QyxNQUFhLGdCQUFnQjtJQUczQixZQUE2QixTQUF1QjtRQUF2QixjQUFTLEdBQVQsU0FBUyxDQUFjO1FBRm5DLFNBQUksR0FBRyxTQUFTLENBQUM7UUFDakIsV0FBTSxHQUE2QixJQUFJLHFCQUFZLEVBQW9CLENBQUM7SUFDbEMsQ0FBQztJQUVqRCxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQWdCO1FBQ3BDLElBQUk7WUFDRixPQUFPLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FDckU7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNaLE1BQU0sU0FBUyxHQUFHLEdBQW9CLENBQUM7WUFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQ2YsaUNBQWlDLFFBQVEseUJBQXlCLFNBQVMsQ0FBQyxNQUFNLFlBQ2hGLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDakUsRUFBRSxDQUNILENBQUM7WUFFRixNQUFNLEdBQUcsQ0FBQztTQUNYO0lBQ0gsQ0FBQztJQUNNLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFnQjtRQUM1QyxJQUFJO1lBQ0YsT0FBTyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFlLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxRQUFRLFdBQVcsQ0FBQyxDQUFDO1NBQ3BGO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixNQUFNLFNBQVMsR0FBRyxHQUFvQixDQUFDO1lBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUNmLG9EQUFvRCxRQUFRLHlCQUF5QixTQUFTLENBQUMsTUFBTSxZQUNuRyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ2pFLEVBQUUsQ0FDSCxDQUFDO1lBRUYsTUFBTSxHQUFHLENBQUM7U0FDWDtJQUNILENBQUM7SUFFTSxLQUFLLENBQUMsWUFBWSxDQUFDLEdBQWE7UUFDckMsT0FBTyxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7Q0FDRjtBQXJDRCw0Q0FxQ0MifQ==