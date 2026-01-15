import { Injectable } from '@angular/core';
import { Plan } from '../models/plan.model';

@Injectable({ providedIn: 'root' })
export class PlansService {
  private readonly plans: readonly Plan[] = [
    {
      id: 'essencial',
      name: 'Plano Essencial',
      description: 'Ideal para começar a economizar com energia 100% renovável.',
      estimatedMonthlySavingsMin: 40,
      estimatedMonthlySavingsMax: 80,
      renewableSource: 'solar',
      highlights: ['Sem obras', 'Sem fidelidade', '100% digital'],
    },
    {
      id: 'familia',
      name: 'Plano Família',
      description: 'Para quem busca uma economia maior na conta de luz.',
      estimatedMonthlySavingsMin: 80,
      estimatedMonthlySavingsMax: 140,
      renewableSource: 'solar',
      highlights: ['Créditos de energia solar', 'Suporte dedicado', 'Contratação simples'],
    },
    {
      id: 'max',
      name: 'Plano Máxima Economia',
      description: 'Maior potencial de economia com energia limpa.',
      estimatedMonthlySavingsMin: 140,
      estimatedMonthlySavingsMax: 220,
      renewableSource: 'solar',
      highlights: ['Maior economia', 'Energia 100% renovável', 'Sem investimento inicial'],
    },
  ];

  getPlans(): readonly Plan[] {
    return this.plans;
  }

  getPlanById(id: string): Plan | null {
    return this.plans.find((p) => p.id === id) ?? null;
  }
}
