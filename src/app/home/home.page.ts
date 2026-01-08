import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonChip,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonSelect,
  IonSelectOption,
  IonTextarea,
  IonTitle,
  IonToggle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonSelect,
    IonSelectOption,
    IonToggle,
    IonNote,
    IonChip,
  ],
})
export class HomePage {
  private static readonly storageKey = 'seb:lead-form:v1';

  protected readonly leadType = signal<'fornecedor' | 'comprador'>('fornecedor');
  protected readonly submitted = signal(false);
  protected readonly whatsappHref = signal<string | null>(null);

  protected readonly title = computed(() =>
    this.leadType() === 'fornecedor'
      ? 'Quero vender energia solar'
      : 'Quero comprar energia solar'
  );

  protected readonly subtitle = computed(() =>
    this.leadType() === 'fornecedor'
      ? 'Receba oportunidades qualificadas com perfil para ACL.'
      : 'Encontre fornecedores e condições ideais para ACL.'
  );

  protected readonly form = this.fb.nonNullable.group({
    nome: ['', [Validators.required, Validators.minLength(2)]],
    whatsapp: ['', [Validators.required, Validators.pattern(/^\+?[0-9 ()\-]{10,}$/)]],
    uf: ['', [Validators.required]],
    cidade: ['', [Validators.required, Validators.minLength(2)]],
    consumoKwhMes: [null as number | null, [Validators.required, Validators.min(1)]],
    mensagem: [''],
    lgpd: [false, [Validators.requiredTrue]],
  });

  constructor(private readonly fb: FormBuilder) {
    this.restoreFromStorage();
    this.form.valueChanges.pipe(debounceTime(250)).subscribe(() => this.saveToStorage());
  }

  protected onLeadTypeChange(value: 'fornecedor' | 'comprador'): void {
    this.leadType.set(value);
    this.submitted.set(false);
    this.whatsappHref.set(null);
    this.saveToStorage();
  }

  protected submit(): void {
    this.submitted.set(true);
    this.whatsappHref.set(null);
    this.form.markAllAsTouched();

    if (this.form.invalid) return;

    const v = this.form.getRawValue();
    const phone = v.whatsapp.replace(/[^0-9]/g, '');
    const kind = this.leadType() === 'fornecedor' ? 'Fornecedor' : 'Comprador';

    const textLines = [
      `Lead (${kind}) - ACL`,
      `Nome: ${v.nome}`,
      `WhatsApp: ${v.whatsapp}`,
      `Local: ${v.cidade}/${v.uf}`,
      `Consumo médio (kWh/mês): ${v.consumoKwhMes}`,
      v.mensagem ? `Observações: ${v.mensagem}` : null,
    ].filter((x): x is string => Boolean(x));

    const message = encodeURIComponent(textLines.join('\n'));

    this.whatsappHref.set(`https://wa.me/${phone}?text=${message}`);

    this.clearStorage();
  }

  private saveToStorage(): void {
    try {
      const snapshot = {
        leadType: this.leadType(),
        form: this.form.getRawValue(),
      };
      localStorage.setItem(HomePage.storageKey, JSON.stringify(snapshot));
    } catch {
      // ignore
    }
  }

  private restoreFromStorage(): void {
    try {
      const raw = localStorage.getItem(HomePage.storageKey);
      if (!raw) return;

      const parsed = JSON.parse(raw) as {
        leadType?: 'fornecedor' | 'comprador';
        form?: Partial<{
          nome: string;
          whatsapp: string;
          uf: string;
          cidade: string;
          consumoKwhMes: number | null;
          mensagem: string;
          lgpd: boolean;
        }>;
      };

      if (parsed.leadType === 'fornecedor' || parsed.leadType === 'comprador') {
        this.leadType.set(parsed.leadType);
      }

      if (parsed.form) {
        this.form.patchValue(parsed.form, { emitEvent: false });
      }
    } catch {
      // ignore
    }
  }

  private clearStorage(): void {
    try {
      localStorage.removeItem(HomePage.storageKey);
    } catch {
      // ignore
    }
  }
}
