import { Logger } from 'tslog';

import { FftApiClient } from '../common';
import { CustomLogger } from '../../common';
import { LoadUnit, LoadUnits } from '../types';

export class FftLoadUnitService {
  private readonly path = 'loadunits';
  private readonly logger: Logger<FftLoadUnitService> = new CustomLogger<FftLoadUnitService>();

  constructor(private readonly apiClient: FftApiClient) {}

  public async get(pickJobRef: string): Promise<LoadUnit[]> {
    const loadunits = await this.apiClient.get<LoadUnits>(`${this.path}/${pickJobRef}`);
    return loadunits.loadUnits || [];
  }
}
