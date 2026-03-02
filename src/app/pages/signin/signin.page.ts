import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonButton,
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
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonSelect,
    IonSelectOption,
    IonButton,
  ],
})
export class SignInPage {
  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  readonly submitted = signal(false);
  readonly userType = signal<'consumer' | 'supplier'>('consumer');

  readonly form = this.fb.nonNullable.group({
    userType: this.fb.nonNullable.control<'consumer' | 'supplier'>('consumer'),
    email: this.fb.nonNullable.control('', [Validators.required, Validators.email]),
    password: this.fb.nonNullable.control('', [Validators.required, Validators.minLength(6)]),
  });

  readonly isValid = computed(() => this.form.valid);

  submit(): void {
    console.log(this.form.value);
    this.submitted.set(true);

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { email, password } = this.form.getRawValue();
    
    // Mock login - em um app real, isso faria uma chamada API
    if (this.userType() === 'consumer') {
      this.authService.mockConsumerSignUp('João Silva', email, '12345678901', '11999999999');
    } else {
      this.authService.mockSupplierSignUp('Solar Energy Ltd', email, '12345678901234', 'Solar Energy Ltd', '11988888888');
    }
    
    void this.router.navigateByUrl('/dashboard');
  }

  goToSignup(): void {
    void this.router.navigateByUrl('/signup');
  }
}
