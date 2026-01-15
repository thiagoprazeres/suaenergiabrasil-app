export type ConnectionType = 'monofasico' | 'bifasico' | 'trifasico';

export interface SimulationInput {
  cep: string;
  connectionType: ConnectionType;
  avgBillValue: number;
}

export interface SimulationResult {
  estimatedMonthlySavings: number;
  estimatedYearlySavings: number;
}
