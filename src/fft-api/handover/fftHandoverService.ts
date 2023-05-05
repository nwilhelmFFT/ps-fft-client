import { ResponseError } from 'superagent';
import {
  Handoverjob,
  HandoverjobPatchActions,
  HandoverjobStatus,
  ModifyHandoverjobAction,
  StrippedHandoverjobs,
} from '../types';
import { FftApiClient } from '../common';
import ActionEnum = ModifyHandoverjobAction.ActionEnum;
import { Logger } from 'tslog';
import { CustomLogger } from '../../common';

export class FftHandoverService {
  private readonly path = 'handoverjobs';
  private readonly logger: Logger<FftHandoverService> = new CustomLogger<FftHandoverService>();
  constructor(private readonly apiClient: FftApiClient) {}

  public async findByPickJobRef(pickJobId: string): Promise<StrippedHandoverjobs> {
    try {
      return await this.apiClient.get<StrippedHandoverjobs>(this.path, {
        pickJobRef: pickJobId,
      });
    } catch (err) {
      const httpError = err as ResponseError;
      this.logger.error(
        `Could not get handover jobs with for pickjob id '${pickJobId}'. Failed with status ${
          httpError.status
        }, error: ${httpError.response ? JSON.stringify(httpError.response.body) : ''}`
      );

      throw err;
    }
  }

  public async findById(handoverJobId: string): Promise<Handoverjob> {
    try {
      return await this.apiClient.get<Handoverjob>(`${this.path}/${handoverJobId}`);
    } catch (err) {
      const httpError = err as ResponseError;
      this.logger.error(
        `Could not get handover job with id '${handoverJobId}'. Failed with status ${httpError.status}, error: ${
          httpError.response ? JSON.stringify(httpError.response.body) : ''
        }`
      );

      throw err;
    }
  }

  public async markAsHandedOver(handoverJobId: string, handoverJobVersion: number) {
    const patchObject: HandoverjobPatchActions = {
      version: handoverJobVersion,
      actions: [
        {
          action: ActionEnum.ModifyHandoverjob,
          status: HandoverjobStatus.HANDEDOVER,
        },
      ],
    };

    try {
      return await this.apiClient.patch<Handoverjob>(`${this.path}/${handoverJobId}`, { ...patchObject });
    } catch (err) {
      const httpError = err as ResponseError;
      this.logger.error(
        `Could not mark handover job with id '${handoverJobId}' as delivered. Failed with status ${
          httpError.status
        }, error: ${httpError.response ? JSON.stringify(httpError.response.body) : ''}`
      );

      throw err;
    }
  }
}
