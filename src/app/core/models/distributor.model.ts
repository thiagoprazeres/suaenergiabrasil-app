export interface Distributor {
  id: string;
  name: string;
  discountPercentage: number;
  image: string;
  benefits: readonly string[];
  billingCount: number;
  economyStartDays: string;
  cancellationDays: number;
  hasFidelity: boolean;
  fidelityPeriod?: string;
  averageAnnualSavings: number;
}
