import { PackJob, PackJobForCreation } from '../types';
import { FftApiClient } from '../common';
import { ResponseError } from 'superagent';
import { CustomLogger } from '../../common';
import { Logger } from 'tslog';

export class FftPackJobService {
  private readonly path = 'pickjobs';
  private readonly logger: Logger<FftPackJobService> = new CustomLogger<FftPackJobService>();
  constructor(private readonly apiClient: FftApiClient) {}

  public async create(packJob: PackJobForCreation): Promise<PackJob>{
    try {
      return await this.apiClient.post<PackJob>(`${this.path}`, packJob);
    } catch (err) {
      const httpError = err as ResponseError;
      this.logger.error(
        `Could not create pack job. Failed with status ${httpError.status}, error: ${
          httpError.response ? JSON.stringify(httpError.response.body) : ''
        }`
      );
      throw err;
    }
  }

  public async getById(packJobId: string): Promise<PackJob> {
    try {
      return await this.apiClient.get<PackJob>(`${this.path}/${packJobId}`);
    } catch (err) {
      const httpError = err as ResponseError;
      this.logger.error(
        `Could not get pack job with id '${packJobId}'. Failed with status ${httpError.status}, error: ${
          httpError.response ? JSON.stringify(httpError.response.body) : ''
        }`
      );
      throw err;
    }
  }
}
