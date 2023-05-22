import { FftApiClient } from '../common';
import { LoadUnit } from '../types';
export declare class FftLoadUnitService {
    private readonly apiClient;
    private readonly path;
    private readonly logger;
    constructor(apiClient: FftApiClient);
    get(pickJobRef: string): Promise<LoadUnit[]>;
}
