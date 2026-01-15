import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { SimulationService } from '../../core/services/simulation.service';
import { ConnectionType, SimulationResult } from '../../core/models/simulation.model';

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.page.html',
  styleUrls: ['./simulation.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
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
    IonInput,
    IonSelect,
    IonSelectOption,
    IonButton,
  ],
})
export class SimulationPage {
  private readonly fb = inject(FormBuilder);
  private readonly simulationService = inject(SimulationService);
  private readonly router = inject(Router);

  readonly result = signal<SimulationResult | null>(null);

  readonly form = this.fb.nonNullable.group({
    cep: this.fb.nonNullable.control('', [Validators.required, Validators.minLength(8)]),
    connectionType: this.fb.nonNullable.control<ConnectionType>('monofasico', [Validators.required]),
    avgBillValue: this.fb.nonNullable.control<number>(250, [Validators.required, Validators.min(0)]),
  });

  readonly formattedMonthly = computed(() =>
    this.result() === null
      ? ''
      : new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
          this.result()!.estimatedMonthlySavings,
        ),
  );

  readonly formattedYearly = computed(() =>
    this.result() === null
      ? ''
      : new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
          this.result()!.estimatedYearlySavings,
        ),
  );

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const value = this.form.getRawValue();

    this.result.set(
      this.simulationService.calculate({
        cep: value.cep,
        connectionType: value.connectionType,
        avgBillValue: value.avgBillValue,
      }),
    );
  }

  goToPlans(): void {
    void this.router.navigateByUrl('/plans');
  }
}
