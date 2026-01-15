export interface Plan {
  id: string;
  name: string;
  description: string;
  estimatedMonthlySavingsMin: number;
  estimatedMonthlySavingsMax: number;
  renewableSource: 'solar';
  highlights: readonly string[];
}
