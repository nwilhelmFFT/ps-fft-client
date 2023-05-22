"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FftLoadUnitService = void 0;
const common_1 = require("../../common");
class FftLoadUnitService {
    constructor(apiClient) {
        this.apiClient = apiClient;
        this.path = 'loadunits';
        this.logger = new common_1.CustomLogger();
    }
    async get(pickJobRef) {
        const loadunits = await this.apiClient.get(`${this.path}/${pickJobRef}`);
        return loadunits.loadUnits || [];
    }
}
exports.FftLoadUnitService = FftLoadUnitService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmZ0TG9hZFVuaXRTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2ZmdC1hcGkvbG9hZHVuaXQvZmZ0TG9hZFVuaXRTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBLHlDQUE0QztBQUc1QyxNQUFhLGtCQUFrQjtJQUk3QixZQUE2QixTQUF1QjtRQUF2QixjQUFTLEdBQVQsU0FBUyxDQUFjO1FBSG5DLFNBQUksR0FBRyxXQUFXLENBQUM7UUFDbkIsV0FBTSxHQUErQixJQUFJLHFCQUFZLEVBQXNCLENBQUM7SUFFdEMsQ0FBQztJQUVqRCxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQWtCO1FBQ2pDLE1BQU0sU0FBUyxHQUFHLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFDcEYsT0FBTyxTQUFTLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0NBQ0Y7QUFWRCxnREFVQyJ9