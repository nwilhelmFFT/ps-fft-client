/// <reference types="node" />
import { Parcel } from '../types';
import { FftApiClient } from '../common';
export declare class FftParcelService {
    private readonly apiClient;
    private readonly path;
    private readonly logger;
    constructor(apiClient: FftApiClient);
    findById(parcelId: string): Promise<Parcel>;
    getShippingLabel(parcelId: string): Promise<Buffer>;
    findMultiple(ids: string[]): Promise<Parcel[]>;
}
