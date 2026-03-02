export type UserRole = 'consumer' | 'supplier';

export interface BaseUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  createdAt: Date;
}

export interface Consumer extends BaseUser {
  role: 'consumer';
  cpf: string;
  phone: string;
  address: {
    street: string;
    number: string;
    neighborhood: string;
    city: string;
    state: string;
    zipCode: string;
  };
  distributorId?: string;
  monthlyConsumption: number; // kWh
  currentPlan?: {
    distributorId: string;
    distributorName: string;
    discountPercentage: number;
    monthlySavings: number;
    contractDate: Date;
  };
}

export interface Supplier extends BaseUser {
  role: 'supplier';
  cnpj: string;
  company: string;
  phone: string;
  address: {
    street: string;
    number: string;
    neighborhood: string;
    city: string;
    state: string;
    zipCode: string;
  };
  energyCapacity: number; // kW
  availableEnergy: number; // kW
  pricePerKwh: number; // R$
  rating: number; // 0-5
  totalClients: number;
  totalRevenue: number; // R$
}

export type User = Consumer | Supplier;
