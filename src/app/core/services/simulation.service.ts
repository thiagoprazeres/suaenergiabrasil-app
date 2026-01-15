import { Injectable } from '@angular/core';
import { SimulationInput, SimulationResult } from '../models/simulation.model';

@Injectable({ providedIn: 'root' })
export class SimulationService {
  calculate(input: SimulationInput): SimulationResult {
    const rateByConnectionType: Record<SimulationInput['connectionType'], number> = {
      monofasico: 0.12,
      bifasico: 0.14,
      trifasico: 0.16,
    };

    const normalizedBill = Math.max(0, input.avgBillValue);
    const estimatedMonthlySavings = Math.round(normalizedBill * rateByConnectionType[input.connectionType]);

    return {
      estimatedMonthlySavings,
      estimatedYearlySavings: estimatedMonthlySavings * 12,
    };
  }
}
