import { Shipment, ShipmentForCreation } from '../types';
import { FftApiClient } from '../common';
export declare class FftShipmentService {
    private readonly apiClient;
    private readonly path;
    private readonly logger;
    constructor(apiClient: FftApiClient);
    findById(shipmentId: string): Promise<Shipment>;
    create(shipment: ShipmentForCreation): Promise<Shipment>;
}
