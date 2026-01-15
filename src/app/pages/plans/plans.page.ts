import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { PlansService } from '../../core/services/plans.service';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.page.html',
  styleUrls: ['./plans.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonList,
    IonItem,
    IonLabel,
    IonButton,
  ],
})
export class PlansPage {
  private readonly plansService = inject(PlansService);
  private readonly router = inject(Router);

  private readonly plans = signal(this.plansService.getPlans());

  readonly viewModel = computed(() => ({
    plans: this.plans(),
  }));

  openPlan(id: string): void {
    void this.router.navigate(['/plans', id]);
  }
}
