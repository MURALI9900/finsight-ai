import { Routes } from '@angular/router';
import { WorkspaceComponent } from './workspace.component';

export const routes: Routes = [
  { path: '', component: WorkspaceComponent, data: { section: 'overview' } },
  { path: 'customers', component: WorkspaceComponent, data: { section: 'customers' } },
  { path: 'accounts', component: WorkspaceComponent, data: { section: 'accounts' } },
  { path: 'loans', component: WorkspaceComponent, data: { section: 'loans' } },
  { path: 'transactions', component: WorkspaceComponent, data: { section: 'transactions' } },
  { path: 'assistant', component: WorkspaceComponent, data: { section: 'assistant' } },
  { path: '**', redirectTo: '' }
];