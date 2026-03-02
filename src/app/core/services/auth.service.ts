import { Injectable, signal } from '@angular/core';
import { User, UserRole, Consumer, Supplier } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly userSignal = signal<User | null>(null);

  readonly user = this.userSignal.asReadonly();

  isAuthenticated(): boolean {
    return this.userSignal() !== null;
  }

  isConsumer(): boolean {
    return this.userSignal()?.role === 'consumer';
  }

  isSupplier(): boolean {
    return this.userSignal()?.role === 'supplier';
  }

  getUserRole(): UserRole | null {
    return this.userSignal()?.role ?? null;
  }

  mockConsumerSignUp(name: string, email: string, cpf: string, phone: string): void {
    const consumer: Consumer = {
      id: crypto.randomUUID(),
      name,
      email,
      role: 'consumer',
      createdAt: new Date(),
      cpf,
      phone,
      address: {
        street: 'Rua das Flores',
        number: '123',
        neighborhood: 'Centro',
        city: 'São Paulo',
        state: 'SP',
        zipCode: '01234-567'
      },
      monthlyConsumption: 500, // kWh
      currentPlan: {
        distributorId: '1',
        distributorName: 'Fit Energia',
        discountPercentage: 12,
        monthlySavings: 120,
        contractDate: new Date()
      }
    };
    this.userSignal.set(consumer);
  }

  mockSupplierSignUp(name: string, email: string, cnpj: string, company: string, phone: string): void {
    const supplier: Supplier = {
      id: crypto.randomUUID(),
      name,
      email,
      role: 'supplier',
      createdAt: new Date(),
      cnpj,
      company,
      phone,
      address: {
        street: 'Avenida Paulista',
        number: '1000',
        neighborhood: 'Bela Vista',
        city: 'São Paulo',
        state: 'SP',
        zipCode: '01310-100'
      },
      energyCapacity: 1000, // kW
      availableEnergy: 750, // kW
      pricePerKwh: 0.45, // R$
      rating: 4.5,
      totalClients: 150,
      totalRevenue: 50000 // R$
    };
    this.userSignal.set(supplier);
  }

  logout(): void {
    this.userSignal.set(null);
  }
}
