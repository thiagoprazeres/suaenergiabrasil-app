import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonProgressBar,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonContent,
    IonButton,
    IonFooter,
    IonProgressBar,
  ],
})
export class OnboardingPage {
  private readonly router = inject(Router);

  readonly activeIndex = signal(0);

  readonly steps = computed(
    () =>
      [
        {
          title: 'Economize na sua conta de luz',
          body: 'Use energia limpa e pague menos todo mês, sem mudar sua instalação.',
          backgroundImageUrl:
            'https://suaenergiabrasil.com.br/imagens/banner/mobile-01_1752160514.webp',
        },
        {
          title: 'Energia 100% renovável',
          body: 'Receba créditos de energia solar direto na sua conta de luz.',
          backgroundImageUrl:
            'https://suaenergiabrasil.com.br/imagens/banner/mobile-02_1752160531.webp',
        },
        {
          title: 'Simples, seguro e digital',
          body: 'Sem obras, sem fidelidade e sem investimento inicial.',
          backgroundImageUrl:
            'https://suaenergiabrasil.com.br/imagens/banner/mobile-03_1752160553.webp',
        },
      ] as const,
  );

  readonly progress = computed(() => (this.activeIndex() + 1) / this.steps().length);

  goToSignup(): void {
    void this.router.navigateByUrl('/signup');
  }

  goToSimulation(): void {
    void this.router.navigateByUrl('/simulation');
  }

  onSlideChange(event: Event): void {
    const fromDetail = (event as CustomEvent<{ activeIndex?: number }>).detail?.activeIndex;
    if (typeof fromDetail === 'number') {
      this.activeIndex.set(fromDetail);
      return;
    }

    const target = event.target as unknown as { swiper?: { activeIndex?: number } } | null;
    const fromTarget = target?.swiper?.activeIndex;

    this.activeIndex.set(typeof fromTarget === 'number' ? fromTarget : 0);
  }
}
