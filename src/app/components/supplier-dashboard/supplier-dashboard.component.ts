import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
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
  IonBadge,
} from '@ionic/angular/standalone';
import { SupplierDashboardService } from '../../core/services/supplier-dashboard.service';
import { AuthService } from '../../core/services/auth.service';
import { addIcons } from 'ionicons';
import { 
  trendingUpOutline, 
  peopleOutline, 
  constructOutline, 
  batteryChargingOutline,
  cashOutline,
  statsChartOutline,
  warningOutline,
  checkmarkCircleOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-supplier-dashboard',
  templateUrl: './supplier-dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
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
    IonBadge,
  ],
})
export class SupplierDashboardComponent {
  private readonly authService = inject(AuthService);
  private readonly dashboardService = inject(SupplierDashboardService);

  constructor() {
    addIcons({
      trendingUpOutline,
      peopleOutline,
      constructOutline,
      batteryChargingOutline,
      cashOutline,
      statsChartOutline,
      warningOutline,
      checkmarkCircleOutline,
    });
  }

  readonly user = this.authService.user;

  readonly viewModel = computed(() => {
    const user = this.user();
    if (!user || user.role !== 'supplier') return null;

    const userId = user.id;
    const productionHistory = this.dashboardService.getProductionHistory(userId);
    const clients = this.dashboardService.getClients(userId);
    const performanceMetrics = this.dashboardService.getPerformanceMetrics(userId);
    const maintenanceAlerts = this.dashboardService.getMaintenanceAlerts(userId);
    const revenueAnalytics = this.dashboardService.getRevenueAnalytics(userId);
    const energyForecast = this.dashboardService.getEnergyForecast(userId);
    const systemStatus = this.dashboardService.getSystemStatus(userId);

    return {
      productionHistory,
      clients,
      performanceMetrics,
      maintenanceAlerts,
      revenueAnalytics,
      energyForecast,
      systemStatus,
      supplier: user,
    };
  });
}
