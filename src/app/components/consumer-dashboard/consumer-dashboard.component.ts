import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonRow,
} from '@ionic/angular/standalone';
import { ConsumerDashboardService } from '../../core/services/consumer-dashboard.service';
import { AuthService } from '../../core/services/auth.service';
import { addIcons } from 'ionicons';
import { 
  leafOutline, 
  trendingUpOutline, 
  walletOutline, 
  bulbOutline,
  timeOutline,
  checkmarkCircleOutline,
  alertCircleOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-consumer-dashboard',
  templateUrl: './consumer-dashboard.component.html',
  styleUrls: ['./consumer-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DatePipe,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonList,
    IonItem,
    IonLabel,
    IonIcon,
  ],
})
export class ConsumerDashboardComponent {
  private readonly authService = inject(AuthService);
  private readonly dashboardService = inject(ConsumerDashboardService);

  constructor() {
    addIcons({
      leafOutline,
      trendingUpOutline,
      walletOutline,
      bulbOutline,
      timeOutline,
      checkmarkCircleOutline,
      alertCircleOutline,
    });
  }

  readonly user = this.authService.user;

  readonly viewModel = computed(() => {
    const user = this.user();
    if (!user || user.role !== 'consumer') return null;

    const userId = user.id;
    const consumptionHistory = this.dashboardService.getConsumptionHistory(userId);
    const billHistory = this.dashboardService.getBillHistory(userId);
    const energyTips = this.dashboardService.getEnergyTips(userId);
    const sustainabilityImpact = this.dashboardService.getSustainabilityImpact(userId);
    const nextBill = this.dashboardService.getNextBillPreview(userId);

    return {
      consumptionHistory,
      billHistory,
      energyTips,
      sustainabilityImpact,
      nextBill,
      currentPlan: user.currentPlan,
    };
  });
}
