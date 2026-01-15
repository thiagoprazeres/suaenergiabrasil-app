import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonList,
  IonItem,
  IonLabel,
  IonTitle,
  IonToolbar, IonListHeader } from '@ionic/angular/standalone';
import { DistributorsService } from '../../core/services/distributors.service';

@Component({
  selector: 'app-plan-details',
  templateUrl: './plan-details.page.html',
  styleUrls: ['./plan-details.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonListHeader, 
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
export class PlanDetailsPage {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly distributorsService = inject(DistributorsService);

  private readonly id = computed(() => this.route.snapshot.paramMap.get('id'));

  readonly distributor = computed(() => {
    const id = this.id();
    return id ? this.distributorsService.getDistributorById(id) : null;
  });

  goToSignUp(): void {
    void this.router.navigateByUrl('/signup');
  }

  back(): void {
    void this.router.navigateByUrl('/plans');
  }
}
