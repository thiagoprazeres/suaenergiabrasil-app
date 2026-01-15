import { Injectable, signal } from '@angular/core';

export interface AuthUser {
  id: string;
  name: string;
  email: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly userSignal = signal<AuthUser | null>(null);

  readonly user = this.userSignal.asReadonly();

  isAuthenticated(): boolean {
    return this.userSignal() !== null;
  }

  mockSignUp(name: string, email: string): void {
    this.userSignal.set({ id: crypto.randomUUID(), name, email });
  }

  logout(): void {
    this.userSignal.set(null);
  }
}
