import { Injectable } from '@angular/core';
import { Distributor } from '../models/distributor.model';

@Injectable({ providedIn: 'root' })
export class DistributorsService {
  private readonly distributors: readonly Distributor[] = [
    {
      id: '3',
      name: 'Desperta Energia',
      discountPercentage: 10,
      image: 'https://suaenergiabrasil.com.br/imagens/operadoras/desperta-energia_1750188515.png',
      benefits: [
        '2 faturas',
        'Início da economia: 90 a 120 dias',
        'Cancelamento: 90 dias',
        'Sem fidelidade'
      ],
      billingCount: 2,
      economyStartDays: '90 a 120 dias',
      cancellationDays: 90,
      hasFidelity: false,
      averageAnnualSavings: 1200.00
    },
    {
      id: '1',
      name: 'Fit Energia',
      discountPercentage: 12,
      image: 'https://suaenergiabrasil.com.br/imagens/operadoras/fit-energia_1750188349.png',
      benefits: [
        '1 fatura',
        'Início da economia: 90 a 120 dias',
        'Cancelamento: 90 dias',
        'Sem fidelidade'
      ],
      billingCount: 1,
      economyStartDays: '90 a 120 dias',
      cancellationDays: 90,
      hasFidelity: false,
      averageAnnualSavings: 1440.00
    },
    {
      id: '2',
      name: 'Juntos Energia',
      discountPercentage: 12,
      image: 'https://suaenergiabrasil.com.br/imagens/operadoras/juntos-energia_1750188506.png',
      benefits: [
        '2 faturas',
        'Início da economia: 90 a 120 dias',
        'Cancelamento: 120 dias',
        'Com fidelidade (12 meses)'
      ],
      billingCount: 2,
      economyStartDays: '90 a 120 dias',
      cancellationDays: 120,
      hasFidelity: true,
      fidelityPeriod: '12 meses',
      averageAnnualSavings: 1440.00
    },
    {
      id: '6',
      name: 'Energia Alagoana',
      discountPercentage: 20,
      image: 'https://suaenergiabrasil.com.br/imagens/no_image.jpg',
      benefits: [
        '1 fatura',
        'Início da economia: 90 a 120 dias',
        'Cancelamento: 90 dias',
        'Sem fidelidade'
      ],
      billingCount: 1,
      economyStartDays: '90 a 120 dias',
      cancellationDays: 90,
      hasFidelity: false,
      averageAnnualSavings: 2400.00
    },
    {
      id: '5',
      name: 'Joao Energia',
      discountPercentage: 20,
      image: 'https://suaenergiabrasil.com.br/imagens/no_image.jpg',
      benefits: [
        '1 fatura',
        'Início da economia: 90 a 120 dias',
        'Cancelamento: 90 dias',
        'Com fidelidade (12 meses)'
      ],
      billingCount: 1,
      economyStartDays: '90 a 120 dias',
      cancellationDays: 90,
      hasFidelity: true,
      fidelityPeriod: '12 meses',
      averageAnnualSavings: 2400.00
    },
    {
      id: '7',
      name: 'TPH SOLARIC',
      discountPercentage: 20,
      image: 'https://suaenergiabrasil.com.br/imagens/no_image.jpg',
      benefits: [
        '1 fatura',
        'Início da economia: 90 a 120 dias',
        'Cancelamento: 90 dias',
        'Com fidelidade (12 meses)'
      ],
      billingCount: 1,
      economyStartDays: '90 a 120 dias',
      cancellationDays: 90,
      hasFidelity: true,
      fidelityPeriod: '12 meses',
      averageAnnualSavings: 2400.00
    },
    {
      id: '4',
      name: 'Enliv Energia',
      discountPercentage: 25,
      image: 'https://suaenergiabrasil.com.br/imagens/operadoras/enliv-energia_1750449665.png',
      benefits: [
        '1 fatura',
        'Início da economia: 90 a 120 dias',
        'Cancelamento: 120 dias',
        'Sem fidelidade'
      ],
      billingCount: 1,
      economyStartDays: '90 a 120 dias',
      cancellationDays: 120,
      hasFidelity: false,
      averageAnnualSavings: 3000.00
    }
  ];

  getDistributors(): readonly Distributor[] {
    return this.distributors;
  }

  getDistributorById(id: string): Distributor | null {
    return this.distributors.find((d) => d.id === id) ?? null;
  }
}
