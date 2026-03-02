import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'signin',
    loadComponent: () =>
      import('./pages/signin/signin.page').then((m) => m.SignInPage),
  },
  {
    path: 'onboarding',
    loadComponent: () =>
      import('./pages/onboarding/onboarding.page').then((m) => m.OnboardingPage),
  },
  {
    path: 'simulation',
    loadComponent: () =>
      import('./pages/simulation/simulation.page').then((m) => m.SimulationPage),
  },
  {
    path: 'plans',
    loadComponent: () => import('./pages/plans/plans.page').then((m) => m.PlansPage),
  },
  {
    path: 'plans/:id',
    loadComponent: () =>
      import('./pages/plan-details/plan-details.page').then((m) => m.PlanDetailsPage),
  },
  {
    path: 'signup',
    loadComponent: () => import('./pages/signup/signup.page').then((m) => m.SignUpPage),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/dashboard/dashboard.page').then((m) => m.DashboardPage),
  },
  {
    path: 'support',
    loadComponent: () => import('./pages/support/support.page').then((m) => m.SupportPage),
  },
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'onboarding',
  },
];
