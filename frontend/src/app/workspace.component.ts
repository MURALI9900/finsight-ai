import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import type { DashboardSummary } from './dashboard-summary.model';
import { demoAccounts, demoCustomers, demoDashboard, demoTransactions, filterDemoRows } from './demo-data.mjs';
import { StatePanelComponent } from './state-panel.component';

type Section = 'overview' | 'customers' | 'accounts' | 'loans' | 'transactions' | 'assistant';

@Component({
  selector: 'fs-workspace',
  standalone: true,
  imports: [RouterLink, StatePanelComponent],
  template: `
    @if (section === 'overview') {
      <div class="page-heading">
        <div><div class="eyebrow">MONITORING CENTER</div><h1>Banking overview</h1><p class="muted">A snapshot of your synthetic banking portfolio, running entirely in your browser.</p></div>
        <div class="heading-actions"><span class="api-status">GITHUB PAGES DEMO</span><button class="primary-button" type="button" (click)="refresh()">↻ Refresh overview</button></div>
      </div>
      <div class="notice"><span aria-hidden="true">ⓘ</span><div><strong>Portfolio demonstration</strong><p>All figures and records are synthetic. This GitHub Pages demo runs without an external backend or financial institution.</p></div></div>
      <div class="metrics-grid">
        <article class="metric-card"><div class="metric-top"><span>Total customers</span><span class="metric-icon blue" aria-hidden="true">♙</span></div><strong>{{dashboard.totalCustomers.toLocaleString('en-IN')}}</strong><small class="positive">↑ 8.2% <span>vs. previous month</span></small></article>
        <article class="metric-card"><div class="metric-top"><span>Active accounts</span><span class="metric-icon violet" aria-hidden="true">▣</span></div><strong>{{dashboard.totalAccounts.toLocaleString('en-IN')}}</strong><small class="positive">↑ 5.4% <span>vs. previous month</span></small></article>
        <article class="metric-card"><div class="metric-top"><span>Active loans</span><span class="metric-icon amber" aria-hidden="true">◫</span></div><strong>{{dashboard.activeLoans.toLocaleString('en-IN')}}</strong><small class="positive">↑ 3.1% <span>vs. previous month</span></small></article>
        <article class="metric-card"><div class="metric-top"><span>Transactions</span><span class="metric-icon teal" aria-hidden="true">⇄</span></div><strong>{{dashboard.monthlyTransactions.toLocaleString('en-IN')}}</strong><small class="positive">↑ 12.6% <span>vs. previous month</span></small></article>
      </div>
      <div class="dashboard-grid">
        <article class="panel chart-panel">
          <div class="panel-heading"><div><h2>Portfolio movement</h2><p class="muted">Illustrative monthly deposits and loan balances</p></div><span class="period-pill">LAST 6 MONTHS</span></div>
          <div class="chart-legend"><span><i class="legend-blue"></i> Deposits</span><span><i class="legend-violet"></i> Loans</span></div>
          <div class="bar-chart" role="img" aria-label="Illustrative bar chart showing deposits and loans over six months">
            <div class="bar-group"><div class="bars"><i style="height:48%"></i><b style="height:32%"></b></div><small>JUN</small></div>
            <div class="bar-group"><div class="bars"><i style="height:58%"></i><b style="height:40%"></b></div><small>JUL</small></div>
            <div class="bar-group"><div class="bars"><i style="height:53%"></i><b style="height:44%"></b></div><small>AUG</small></div>
            <div class="bar-group"><div class="bars"><i style="height:70%"></i><b style="height:49%"></b></div><small>SEP</small></div>
            <div class="bar-group"><div class="bars"><i style="height:78%"></i><b style="height:56%"></b></div><small>OCT</small></div>
            <div class="bar-group"><div class="bars"><i style="height:90%"></i><b style="height:62%"></b></div><small>NOV</small></div>
          </div>
        </article>
        <article class="panel insights-panel">
          <div class="panel-heading"><div><h2>AI insights</h2><p class="muted">Illustrative observations</p></div><span class="sparkle" aria-hidden="true">✧</span></div>
          <div class="insight"><span class="insight-dot green"></span><div><strong>Deposit growth</strong><p>Demo deposits increased 8.4% over the previous period.</p></div></div>
          <div class="insight"><span class="insight-dot orange"></span><div><strong>Loan concentration</strong><p>Personal loans represent the largest share of the sample portfolio.</p></div></div>
          <div class="insight"><span class="insight-dot blue-dot"></span><div><strong>Transaction activity</strong><p>Digital transfers lead the sample transaction mix.</p></div></div>
          <a class="text-link" routerLink="/assistant">Explore AI assistant →</a>
        </article>
      </div>
      <article class="panel table-panel">
        <div class="panel-heading"><div><h2>Recent transactions</h2><p class="muted">Latest sample activity across demo accounts</p></div><a class="text-link" routerLink="/transactions">View all →</a></div>
        <div class="table-wrap"><table><thead><tr><th scope="col">REFERENCE</th><th scope="col">CUSTOMER</th><th scope="col">TYPE</th><th scope="col">DATE</th><th scope="col">AMOUNT</th><th scope="col">STATUS</th></tr></thead><tbody>
          @for (item of transactions; track item.ref) {
            <tr><td class="ref">{{item.ref}}</td><td>{{item.customer}}</td><td>{{item.type}}</td><td>{{item.date}}</td><td class="amount">{{item.amount}}</td><td><span class="status" [class.pending]="item.status === 'Pending'">{{item.status}}</span></td></tr>
          }
        </tbody></table></div>
      </article>
    } @else if (section === 'customers') {
      <div class="page-heading"><div><div class="eyebrow">CUSTOMER DIRECTORY</div><h1>Customers</h1><p class="muted">Browse fictional customer profiles in the demo portfolio.</p></div><button class="primary-button" type="button" (click)="noticeText = 'Customer creation is a planned demo feature.'">＋ Add customer</button></div>
      <div class="notice"><span aria-hidden="true">ⓘ</span><div><strong>Sample records only</strong><p>These fictional profiles are provided for interface demonstration.</p></div></div>
      <div class="panel">
        <div class="panel-heading"><div><h2>Customer directory</h2><p class="muted" aria-live="polite">{{filteredCustomers.length}} of {{customers.length}} sample customers</p></div><input class="search-input" type="search" aria-label="Search customers by ID, name, segment or location" placeholder="Search customers…" [value]="searchText" (input)="updateSearch($event)"></div>
        <div class="table-wrap"><table><thead><tr><th scope="col">CUSTOMER ID</th><th scope="col">NAME</th><th scope="col">SEGMENT</th><th scope="col">LOCATION</th><th scope="col">STATUS</th></tr></thead><tbody>
          @for (customer of filteredCustomers; track customer.id) {
            <tr><td class="ref">{{customer.id}}</td><td>{{customer.name}}</td><td>{{customer.segment}}</td><td>{{customer.location}}</td><td><span class="status">Active</span></td></tr>
          } @empty {
            <tr><td colspan="5"><fs-state-panel kind="empty" title="No customers found" message="Try another customer ID, name, segment or location." actionLabel="Clear search" (action)="clearSearch()" /></td></tr>
          }
        </tbody></table></div>
      </div>
    } @else if (section === 'accounts') {
      <div class="page-heading"><div><div class="eyebrow">DEPOSIT SERVICES</div><h1>Accounts</h1><p class="muted">Overview of fictional deposit and current accounts.</p></div></div>
      <div class="metrics-grid two-metrics">
        <article class="metric-card"><div class="metric-top"><span>Total demo accounts</span><span class="metric-icon blue" aria-hidden="true">▣</span></div><strong>1,875</strong><small class="muted">Across all sample customer segments</small></article>
        <article class="metric-card"><div class="metric-top"><span>Illustrative deposits</span><span class="metric-icon teal" aria-hidden="true">↗</span></div><strong>₹ 24.8 Cr</strong><small class="muted">Synthetic portfolio balance</small></article>
      </div>
      <div class="panel"><div class="panel-heading"><div><h2>Account samples</h2><p class="muted">Fictional masked account references</p></div></div><div class="table-wrap"><table><thead><tr><th scope="col">ACCOUNT REF</th><th scope="col">CUSTOMER</th><th scope="col">PRODUCT</th><th scope="col">OPENED</th><th scope="col">BALANCE</th><th scope="col">STATUS</th></tr></thead><tbody>
        @for (account of accounts; track account.ref) {
          <tr><td class="ref">{{account.ref}}</td><td>{{account.customer}}</td><td>{{account.product}}</td><td>{{account.opened}}</td><td class="amount">{{account.balance}}</td><td><span class="status">Active</span></td></tr>
        }
      </tbody></table></div></div>
    } @else if (section === 'loans') {
      <div class="page-heading"><div><div class="eyebrow">CREDIT PORTFOLIO</div><h1>Loan portfolio</h1><p class="muted">Illustrative loan exposure and repayment monitoring.</p></div></div>
      <div class="metrics-grid">
        <article class="metric-card"><div class="metric-top"><span>Active facilities</span><span class="metric-icon blue" aria-hidden="true">◫</span></div><strong>432</strong><small class="muted">Synthetic loan accounts</small></article>
        <article class="metric-card"><div class="metric-top"><span>Outstanding</span><span class="metric-icon violet" aria-hidden="true">₹</span></div><strong>₹ 8.6 Cr</strong><small class="muted">Illustrative exposure</small></article>
        <article class="metric-card"><div class="metric-top"><span>On-time repayment</span><span class="metric-icon teal" aria-hidden="true">✓</span></div><strong>96.2%</strong><small class="positive">Sample portfolio indicator</small></article>
        <article class="metric-card"><div class="metric-top"><span>Needs review</span><span class="metric-icon amber" aria-hidden="true">!</span></div><strong>14</strong><small class="muted">Fictional demo records</small></article>
      </div>
      <div class="panel"><div class="panel-heading"><div><h2>Loan categories</h2><p class="muted">Illustrative distribution by product</p></div></div><div class="category-list">
        <div><span>Personal loans</span><strong>42%</strong><div class="progress"><i style="width:42%"></i></div></div>
        <div><span>Home loans</span><strong>31%</strong><div class="progress"><i style="width:31%"></i></div></div>
        <div><span>Vehicle loans</span><strong>18%</strong><div class="progress"><i style="width:18%"></i></div></div>
        <div><span>Business loans</span><strong>9%</strong><div class="progress"><i style="width:9%"></i></div></div>
      </div></div>
      <p class="disclaimer">Loan indicators are fictional examples for UI demonstration only. They are not credit scores, eligibility decisions or financial advice.</p>
    } @else if (section === 'transactions') {
      <div class="page-heading"><div><div class="eyebrow">PAYMENTS & ACTIVITY</div><h1>Transactions</h1><p class="muted">Review recent synthetic transaction activity.</p></div><button class="primary-button" type="button" (click)="clearSearch()">Clear search</button></div>
      <div class="panel">
        <div class="panel-heading"><div><h2>Transaction register</h2><p class="muted" aria-live="polite">{{filteredTransactions.length}} of {{transactions.length}} sample transactions</p></div><input class="search-input" type="search" aria-label="Search transactions by reference, customer, type or status" placeholder="Search transactions…" [value]="searchText" (input)="updateSearch($event)"></div>
        <div class="table-wrap"><table><thead><tr><th scope="col">REFERENCE</th><th scope="col">CUSTOMER</th><th scope="col">TYPE</th><th scope="col">DATE</th><th scope="col">AMOUNT</th><th scope="col">STATUS</th></tr></thead><tbody>
          @for (item of filteredTransactions; track item.ref) {
            <tr><td class="ref">{{item.ref}}</td><td>{{item.customer}}</td><td>{{item.type}}</td><td>{{item.date}}</td><td class="amount">{{item.amount}}</td><td><span class="status" [class.pending]="item.status === 'Pending'">{{item.status}}</span></td></tr>
          } @empty {
            <tr><td colspan="6"><fs-state-panel kind="empty" title="No transactions found" message="Try another reference, customer, type, date or status." actionLabel="Clear search" (action)="clearSearch()" /></td></tr>
          }
        </tbody></table></div>
      </div>
    } @else {
      <div class="page-heading"><div><div class="eyebrow">GENERATIVE AI · PREVIEW</div><h1>AI banking assistant</h1><p class="muted">Ask questions about the fictional FinSight demo dataset.</p></div><span class="environment-pill">● PREVIEW MODE</span></div>
      <div class="notice"><span aria-hidden="true">ⓘ</span><div><strong>Prototype assistant</strong><p>This screen uses a local sample response. It is not connected to the Python AI service or a language model yet.</p></div></div>
      <div class="chat-panel">
        <div class="chat-header"><div class="assistant-avatar" aria-hidden="true">✧</div><div><strong>FinSight assistant</strong><small>Demo mode · Sample knowledge only</small></div><span class="online-dot" aria-hidden="true"></span></div>
        <div class="chat-body" role="log" aria-live="polite"><div class="message assistant-message">Hello! I can help explain the sample banking metrics shown in this portfolio demo. Try asking about transaction activity, loan categories or customer totals.</div>@if (question) {<div class="message user-message">{{question}}</div>} @if (answer) {<div class="message assistant-message">{{answer}}</div>}</div>
        <form class="chat-form" (submit)="ask($event)"><label class="sr-only" for="question">Ask a banking question</label><input id="question" name="question" [value]="questionDraft" (input)="questionDraft = $any($event.target).value" placeholder="Ask about the demo portfolio…" required><button class="primary-button" type="submit">Send ↑</button></form>
        <div class="chat-footnote">Do not enter personal, confidential or real banking information.</div>
      </div>
    }
    @if (noticeText) {<div class="toast" role="status">{{noticeText}} <button type="button" (click)="noticeText = ''" aria-label="Dismiss message">×</button></div>}
  `
})
export class WorkspaceComponent implements OnInit, OnDestroy {
  private readonly route = inject(ActivatedRoute);
  private routeSubscription?: Subscription;

  section: Section = 'overview';
  dashboard: DashboardSummary = demoDashboard;
  searchText = '';
  noticeText = '';
  questionDraft = '';
  question = '';
  answer = '';

  readonly transactions = demoTransactions;
  readonly customers = demoCustomers;
  readonly accounts = demoAccounts;

  get filteredCustomers() {
    return filterDemoRows(this.customers, this.searchText, ['id', 'name', 'segment', 'location']);
  }

  get filteredTransactions() {
    return filterDemoRows(this.transactions, this.searchText, ['ref', 'customer', 'type', 'date', 'amount', 'status']);
  }

  updateSearch(event: Event): void {
    this.searchText = (event.target as HTMLInputElement).value.trimStart().toLowerCase();
  }

  clearSearch(): void {
    this.searchText = '';
  }

  ngOnInit(): void {
    this.routeSubscription = this.route.data.subscribe(data => {
      this.section = (data['section'] as Section | undefined) ?? 'overview';
      this.searchText = '';
    });
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
  }

  refresh(): void {
    this.noticeText = 'Overview refreshed using local synthetic demo data.';
  }

  ask(event: Event): void {
    event.preventDefault();
    const prompt = this.questionDraft.trim();
    if (!prompt) return;

    this.question = prompt;
    const lower = prompt.toLowerCase();
    if (lower.includes('loan')) {
      this.answer = 'In this fictional portfolio, personal loans make up 42% of the sample loan mix, followed by home loans at 31%. These are illustrative figures, not lending recommendations.';
    } else if (lower.includes('transaction') || lower.includes('payment')) {
      this.answer = 'The overview contains 18,450 illustrative monthly transactions. Digital transfers are highlighted as the leading sample transaction type.';
    } else if (lower.includes('customer')) {
      this.answer = 'The demo overview shows 1,250 fictional customers. The customer directory includes a small set of sample profiles for interface testing.';
    } else {
      this.answer = 'I can currently answer only from the built-in demo examples. Try asking about customers, transactions or loan categories. A connected retrieval-based AI service is planned for a later milestone.';
    }
    this.questionDraft = '';
  }
}
