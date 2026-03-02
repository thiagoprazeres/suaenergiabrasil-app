import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { AuthService } from '../../core/services/auth.service';
import { ConsumerDashboardComponent } from '../../components/consumer-dashboard/consumer-dashboard.component';
import { SupplierDashboardComponent } from '../../components/supplier-dashboard/supplier-dashboard.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink,
    ConsumerDashboardComponent,
    SupplierDashboardComponent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton,
  ],
})
export class DashboardPage {
  readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  readonly user = this.authService.user;

  readonly greeting = computed(() => {
    const user = this.user();
    return user ? `Olá, ${user.name}` : 'Olá';
  });

  logout(): void {
    this.authService.logout();
    void this.router.navigateByUrl('/onboarding');
  }
}
