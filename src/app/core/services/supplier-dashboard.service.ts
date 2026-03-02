import { Injectable } from '@angular/core';

export interface EnergyProduction {
  month: string;
  produced: number; // kWh
  sold: number; // kWh
  available: number; // kWh
  revenue: number; // R$
}

export interface Client {
  id: string;
  name: string;
  email: string;
  consumption: number; // kWh
  monthlyRevenue: number; // R$
  contractDate: Date;
  status: 'active' | 'inactive' | 'suspended';
}

export interface PerformanceMetrics {
  capacityUtilization: number; // %
  averagePrice: number; // R$/kWh
  clientRetentionRate: number; // %
  monthlyGrowth: number; // %
  systemEfficiency: number; // %
}

export interface MaintenanceAlert {
  id: string;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  estimatedCost: number; // R$
  scheduledDate?: Date;
  status: 'pending' | 'scheduled' | 'completed';
}

export interface RevenueAnalytics {
  currentMonth: number; // R$
  previousMonth: number; // R$
  yearToDate: number; // R$
  projectedAnnual: number; // R$
  growthRate: number; // %
}

export interface EnergyForecast {
  month: string;
  projectedDemand: number; // kWh
  projectedSupply: number; // kWh
  projectedRevenue: number; // R$
}

@Injectable({ providedIn: 'root' })
export class SupplierDashboardService {
  getProductionHistory(supplierId: string): EnergyProduction[] {
    return [
      { month: 'Jan/2024', produced: 980, sold: 850, available: 130, revenue: 38250 },
      { month: 'Fev/2024', produced: 920, sold: 820, available: 100, revenue: 36900 },
      { month: 'Mar/2024', produced: 1050, sold: 950, available: 100, revenue: 42750 },
      { month: 'Abr/2024', produced: 980, sold: 880, available: 100, revenue: 39600 },
      { month: 'Mai/2024', produced: 1020, sold: 920, available: 100, revenue: 41400 },
      { month: 'Jun/2024', produced: 950, sold: 860, available: 90, revenue: 38700 },
    ];
  }

  getClients(supplierId: string): Client[] {
    return [
      {
        id: '1',
        name: 'João Silva',
        email: 'joao@email.com',
        consumption: 450,
        monthlyRevenue: 202.50,
        contractDate: new Date('2024-01-15'),
        status: 'active'
      },
      {
        id: '2',
        name: 'Maria Santos',
        email: 'maria@email.com',
        consumption: 380,
        monthlyRevenue: 171.00,
        contractDate: new Date('2024-02-20'),
        status: 'active'
      },
      {
        id: '3',
        name: 'Pedro Oliveira',
        email: 'pedro@email.com',
        consumption: 520,
        monthlyRevenue: 234.00,
        contractDate: new Date('2024-03-10'),
        status: 'active'
      },
      {
        id: '4',
        name: 'Ana Costa',
        email: 'ana@email.com',
        consumption: 290,
        monthlyRevenue: 130.50,
        contractDate: new Date('2024-04-05'),
        status: 'suspended'
      }
    ];
  }

  getPerformanceMetrics(supplierId: string): PerformanceMetrics {
    return {
      capacityUtilization: 87.5, // %
      averagePrice: 0.45, // R$/kWh
      clientRetentionRate: 92.3, // %
      monthlyGrowth: 5.2, // %
      systemEfficiency: 94.8 // %
    };
  }

  getMaintenanceAlerts(supplierId: string): MaintenanceAlert[] {
    return [
      {
        id: '1',
        title: 'Manutenção preventiva - Painel Solar A',
        description: 'Inspeção e limpeza dos painéis solares da seção A',
        priority: 'medium',
        estimatedCost: 450.00,
        scheduledDate: new Date('2024-07-15'),
        status: 'scheduled'
      },
      {
        id: '2',
        title: 'Substituição de inversor',
        description: 'Inversor da seção B apresentando falhas, necessita substituição',
        priority: 'high',
        estimatedCost: 2800.00,
        status: 'pending'
      },
      {
        id: '3',
        title: 'Verificação de cabos',
        description: 'Inspeção anual do sistema de cabeamento',
        priority: 'low',
        estimatedCost: 200.00,
        status: 'pending'
      }
    ];
  }

  getRevenueAnalytics(supplierId: string): RevenueAnalytics {
    return {
      currentMonth: 38700, // R$
      previousMonth: 41400, // R$
      yearToDate: 237600, // R$
      projectedAnnual: 464400, // R$
      growthRate: 8.7 // %
    };
  }

  getEnergyForecast(supplierId: string): EnergyForecast[] {
    return [
      { month: 'Jul/2024', projectedDemand: 920, projectedSupply: 980, projectedRevenue: 41400 },
      { month: 'Ago/2024', projectedDemand: 950, projectedSupply: 1000, projectedRevenue: 42750 },
      { month: 'Set/2024', projectedDemand: 980, projectedSupply: 1020, projectedRevenue: 44100 },
      { month: 'Out/2024', projectedDemand: 1000, projectedSupply: 1050, projectedRevenue: 45000 },
      { month: 'Nov/2024', projectedDemand: 980, projectedSupply: 1030, projectedRevenue: 44100 },
      { month: 'Dez/2024', projectedDemand: 1020, projectedSupply: 1080, projectedRevenue: 45900 }
    ];
  }

  getSystemStatus(supplierId: string): {
    totalCapacity: number; // kW
    currentOutput: number; // kW
    efficiency: number; // %
    uptime: number; // %
    lastMaintenance: Date;
  } {
    return {
      totalCapacity: 1000,
      currentOutput: 875,
      efficiency: 94.8,
      uptime: 99.2,
      lastMaintenance: new Date('2024-06-01')
    };
  }
}
