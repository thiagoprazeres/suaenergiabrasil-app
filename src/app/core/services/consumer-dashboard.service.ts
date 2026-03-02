import { Injectable } from '@angular/core';

export interface EnergyConsumption {
  month: string;
  consumption: number; // kWh
  cost: number; // R$
  savings: number; // R$
}

export interface BillHistory {
  id: string;
  month: string;
  dueDate: Date;
  amount: number; // R$
  originalAmount: number; // R$
  savings: number; // R$
  status: 'paid' | 'pending' | 'overdue';
  distributorName: string;
}

export interface EnergyTip {
  id: string;
  title: string;
  description: string;
  category: 'efficiency' | 'savings' | 'sustainability';
  potentialSavings: number; // R$
}

export interface SustainabilityImpact {
  co2Reduction: number; // kg
  treesEquivalent: number;
  renewableEnergyPercentage: number; // %
}

@Injectable({ providedIn: 'root' })
export class ConsumerDashboardService {
  getConsumptionHistory(userId: string): EnergyConsumption[] {
    return [
      { month: 'Jan/2024', consumption: 450, cost: 280, savings: 35 },
      { month: 'Fev/2024', consumption: 420, cost: 260, savings: 42 },
      { month: 'Mar/2024', consumption: 480, cost: 295, savings: 38 },
      { month: 'Abr/2024', consumption: 440, cost: 270, savings: 40 },
      { month: 'Mai/2024', consumption: 460, cost: 285, savings: 37 },
      { month: 'Jun/2024', consumption: 430, cost: 265, savings: 41 },
    ];
  }

  getBillHistory(userId: string): BillHistory[] {
    return [
      {
        id: '1',
        month: 'Junho/2024',
        dueDate: new Date('2024-07-10'),
        amount: 265.00,
        originalAmount: 306.00,
        savings: 41.00,
        status: 'paid',
        distributorName: 'Fit Energia'
      },
      {
        id: '2',
        month: 'Maio/2024',
        dueDate: new Date('2024-06-10'),
        amount: 285.00,
        originalAmount: 322.00,
        savings: 37.00,
        status: 'paid',
        distributorName: 'Fit Energia'
      },
      {
        id: '3',
        month: 'Julho/2024',
        dueDate: new Date('2024-08-10'),
        amount: 275.00,
        originalAmount: 314.00,
        savings: 39.00,
        status: 'pending',
        distributorName: 'Fit Energia'
      }
    ];
  }

  getEnergyTips(userId: string): EnergyTip[] {
    return [
      {
        id: '1',
        title: 'Optimize seu ar-condicionado',
        description: 'Mantenha seu ar-condicionado a 23°C e limpe os filtros mensalmente para economizar até 15% de energia.',
        category: 'efficiency',
        potentialSavings: 25.00
      },
      {
        id: '2',
        title: 'Troque lâmpadas por LED',
        description: 'Lâmpadas LED consomem até 80% menos energia e duram 25 vezes mais que as incandescentes.',
        category: 'savings',
        potentialSavings: 15.00
      },
      {
        id: '3',
        title: 'Use a energia solar em horários de pico',
        description: 'Durante as 18h-21h, priorize o uso de aparelhos para aproveitar melhor a energia solar.',
        category: 'sustainability',
        potentialSavings: 20.00
      }
    ];
  }

  getSustainabilityImpact(userId: string): SustainabilityImpact {
    return {
      co2Reduction: 2450, // kg por ano
      treesEquivalent: 112, // árvores equivalentes
      renewableEnergyPercentage: 85 // %
    };
  }

  getNextBillPreview(userId: string): {
    estimatedAmount: number;
    estimatedSavings: number;
    dueDate: Date;
  } {
    return {
      estimatedAmount: 270.00,
      estimatedSavings: 38.00,
      dueDate: new Date('2024-09-10')
    };
  }
}
