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
import { DistributorsService } from '../../core/services/distributors.service';

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
    IonCardContent,
    IonButton,
  ],
})
export class PlansPage {
  private readonly distributorsService = inject(DistributorsService);
  private readonly router = inject(Router);

  private readonly distributors = signal(this.distributorsService.getDistributors());

  readonly viewModel = computed(() => ({
    distributors: this.distributors(),
  }));

  openDistributor(id: string): void {
    void this.router.navigate(['/plans', id]);
  }
}
