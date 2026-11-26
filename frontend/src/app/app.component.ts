import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'fs-root',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <div class="app-shell">
      <aside class="sidebar">
        <a class="brand" routerLink="/" aria-label="FinSight AI home">
          <span class="brand-mark">F</span>
          <span><strong>FinSight</strong><small>INTELLIGENCE PLATFORM</small></span>
        </a>
        <div class="nav-label">WORKSPACE</div>
        <nav aria-label="Main navigation">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }"><span class="nav-icon">⌂</span> Overview</a>
          <a routerLink="/customers" routerLinkActive="active"><span class="nav-icon">♙</span> Customers</a>
          <a routerLink="/accounts" routerLinkActive="active"><span class="nav-icon">▣</span> Accounts</a>
          <a routerLink="/loans" routerLinkActive="active"><span class="nav-icon">◫</span> Loan portfolio</a>
          <a routerLink="/transactions" routerLinkActive="active"><span class="nav-icon">⇄</span> Transactions</a>
        </nav>
        <div class="nav-label tools-label">INTELLIGENCE</div>
        <nav aria-label="Intelligence navigation">
          <a routerLink="/assistant" routerLinkActive="active"><span class="nav-icon">✧</span> AI assistant <span class="new-tag">DEMO</span></a>
        </nav>
        <div class="sidebar-bottom">
          <div class="demo-status"><span></span> Demo environment</div>
          <div class="profile"><div class="avatar">FS</div><div><strong>Demo Analyst</strong><small>Portfolio workspace</small></div></div>
        </div>
      </aside>
      <main class="main-area">
        <header class="topbar">
          <div class="breadcrumb">FinSight AI <span>/</span> <strong>Banking overview</strong></div>
          <div class="top-actions"><span class="environment-pill">● SYNTHETIC DATA</span><button class="icon-button" aria-label="Notifications">♧</button><div class="top-avatar">DA</div></div>
        </header>
        <section class="content"><router-outlet /></section>
        <footer class="footer">FinSight AI · Independent portfolio project · All names, accounts and figures are fictional demo data.</footer>
      </main>
    </div>
  `
})
export class AppComponent {}