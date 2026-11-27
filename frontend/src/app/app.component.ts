import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'fs-root',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <div class="app-shell">
      <a class="skip-link" href="#main-content">Skip to main content</a>
      <aside class="sidebar">
        <a class="brand" routerLink="/" aria-label="FinSight AI home">
          <span class="brand-mark" aria-hidden="true">F</span>
          <span><strong>FinSight</strong><small>INTELLIGENCE PLATFORM</small></span>
        </a>
        <div class="nav-label">WORKSPACE</div>
        <nav aria-label="Main navigation">
          <a routerLink="/" routerLinkActive="active" ariaCurrentWhenActive="page" [routerLinkActiveOptions]="{ exact: true }"><span class="nav-icon" aria-hidden="true">⌂</span> Overview</a>
          <a routerLink="/customers" routerLinkActive="active" ariaCurrentWhenActive="page"><span class="nav-icon" aria-hidden="true">♙</span> Customers</a>
          <a routerLink="/accounts" routerLinkActive="active" ariaCurrentWhenActive="page"><span class="nav-icon" aria-hidden="true">▣</span> Accounts</a>
          <a routerLink="/loans" routerLinkActive="active" ariaCurrentWhenActive="page"><span class="nav-icon" aria-hidden="true">◫</span> Loan portfolio</a>
          <a routerLink="/transactions" routerLinkActive="active" ariaCurrentWhenActive="page"><span class="nav-icon" aria-hidden="true">⇄</span> Transactions</a>
        </nav>
        <div class="nav-label tools-label">INTELLIGENCE</div>
        <nav aria-label="Intelligence navigation">
          <a routerLink="/assistant" routerLinkActive="active" ariaCurrentWhenActive="page"><span class="nav-icon" aria-hidden="true">✧</span> AI assistant <span class="new-tag">DEMO</span></a>
        </nav>
        <div class="sidebar-bottom">
          <div class="demo-status"><span aria-hidden="true"></span> Demo environment</div>
          <div class="profile"><div class="avatar" aria-hidden="true">FS</div><div><strong>Demo Analyst</strong><small>Portfolio workspace</small></div></div>
        </div>
      </aside>
      <main class="main-area">
        <header class="topbar">
          <div class="breadcrumb">FinSight AI <span aria-hidden="true">/</span> <strong>Banking overview</strong></div>
          <div class="top-actions"><span class="environment-pill">● SYNTHETIC DATA</span><span class="icon-button" aria-hidden="true">♧</span><div class="top-avatar" aria-hidden="true">DA</div></div>
        </header>
        <section class="content" id="main-content" tabindex="-1"><router-outlet /></section>
        <footer class="footer">FinSight AI · Independent portfolio project · All names, accounts and figures are fictional demo data.</footer>
      </main>
    </div>
  `
})
export class AppComponent {}
