import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DashboardService } from './dashboard.service';
import { DashboardSummary } from './dashboard-summary.model';

type Section = 'overview' | 'customers' | 'accounts' | 'loans' | 'transactions' | 'assistant';

@Component({
  selector: 'fs-workspace',
  standalone: true,
  imports: [RouterLink],
  template: `
    @if (section === 'overview') {
      <div class="page-heading"><div><div class="eyebrow">MONITORING CENTER</div><h1>Banking overview</h1><p class="muted">A snapshot of your demo banking portfolio.</p></div><div class="heading-actions"><span class="api-status" [class.connected]="apiState === 'connected'">{{apiState === 'connected' ? 'API CONNECTED' : apiState === 'loading' ? 'CONNECTING…' : 'DEMO DATA'}}</span><button class="primary-button" (click)="refresh()">↻ Refresh overview</button></div></div>
      <div class="notice"><span>ⓘ</span><div><strong>Portfolio demonstration</strong><p>All figures and records are synthetic and are not connected to a real financial institution.</p></div></div>
      <div class="metrics-grid">
        <article class="metric-card"><div class="metric-top"><span>Total customers</span><span class="metric-icon blue">♙</span></div><strong>{{dashboard.totalCustomers.toLocaleString('en-IN')}}</strong><small class="positive">↑ 8.2% <span>vs. previous month</span></small></article>
        <article class="metric-card"><div class="metric-top"><span>Active accounts</span><span class="metric-icon violet">▣</span></div><strong>{{dashboard.totalAccounts.toLocaleString('en-IN')}}</strong><small class="positive">↑ 5.4% <span>vs. previous month</span></small></article>
        <article class="metric-card"><div class="metric-top"><span>Active loans</span><span class="metric-icon amber">◫</span></div><strong>{{dashboard.activeLoans.toLocaleString('en-IN')}}</strong><small class="positive">↑ 3.1% <span>vs. previous month</span></small></article>
        <article class="metric-card"><div class="metric-top"><span>Transactions</span><span class="metric-icon teal">⇄</span></div><strong>{{dashboard.monthlyTransactions.toLocaleString('en-IN')}}</strong><small class="positive">↑ 12.6% <span>vs. previous month</span></small></article>
      </div>
      <div class="dashboard-grid">
        <article class="panel chart-panel"><div class="panel-heading"><div><h2>Portfolio movement</h2><p class="muted">Illustrative monthly deposits and loan balances</p></div><span class="period-pill">LAST 6 MONTHS</span></div><div class="chart-legend"><span><i class="legend-blue"></i> Deposits</span><span><i class="legend-violet"></i> Loans</span></div><div class="bar-chart" role="img" aria-label="Illustrative bar chart showing deposits and loans over six months"><div class="bar-group"><div class="bars"><i style="height:48%"></i><b style="height:32%"></b></div><small>JUN</small></div><div class="bar-group"><div class="bars"><i style="height:58%"></i><b style="height:40%"></b></div><small>JUL</small></div><div class="bar-group"><div class="bars"><i style="height:53%"></i><b style="height:44%"></b></div><small>AUG</small></div><div class="bar-group"><div class="bars"><i style="height:70%"></i><b style="height:49%"></b></div><small>SEP</small></div><div class="bar-group"><div class="bars"><i style="height:78%"></i><b style="height:56%"></b></div><small>OCT</small></div><div class="bar-group"><div class="bars"><i style="height:90%"></i><b style="height:62%"></b></div><small>NOV</small></div></div></article>
        <article class="panel insights-panel"><div class="panel-heading"><div><h2>AI insights</h2><p class="muted">Illustrative observations</p></div><span class="sparkle">✧</span></div><div class="insight"><span class="insight-dot green"></span><div><strong>Deposit growth</strong><p>Demo deposits increased 8.4% over the previous period.</p></div></div><div class="insight"><span class="insight-dot orange"></span><div><strong>Loan concentration</strong><p>Personal loans represent the largest share of the sample portfolio.</p></div></div><div class="insight"><span class="insight-dot blue-dot"></span><div><strong>Transaction activity</strong><p>Digital transfers lead the sample transaction mix.</p></div></div><a class="text-link" routerLink="/assistant">Explore AI assistant →</a></article>
      </div>
      <article class="panel table-panel"><div class="panel-heading"><div><h2>Recent transactions</h2><p class="muted">Latest sample activity across demo accounts</p></div><a class="text-link" routerLink="/transactions">View all →</a></div><div class="table-wrap"><table><thead><tr><th>REFERENCE</th><th>CUSTOMER</th><th>TYPE</th><th>DATE</th><th>AMOUNT</th><th>STATUS</th></tr></thead><tbody>@for (item of transactions; track item.ref) {<tr><td class="ref">{{item.ref}}</td><td>{{item.customer}}</td><td>{{item.type}}</td><td>{{item.date}}</td><td class="amount">{{item.amount}}</td><td><span class="status" [class.pending]="item.status === 'Pending'">{{item.status}}</span></td></tr>}</tbody></table></div></article>
    } @else if (section === 'customers') {
      <div class="page-heading"><div><div class="eyebrow">CUSTOMER DIRECTORY</div><h1>Customers</h1><p class="muted">Browse fictional customer profiles in the demo portfolio.</p></div><button class="primary-button" (click)="noticeText = 'Customer creation is a planned demo feature.'">＋ Add customer</button></div>
      <div class="notice"><span>ⓘ</span><div><strong>Sample records only</strong><p>These fictional profiles are provided for interface demonstration.</p></div></div>
      <div class="panel"><div class="panel-heading"><div><h2>Customer directory</h2><p class="muted">3 sample customers shown</p></div><input class="search-input" aria-label="Search customers" placeholder="Search customers…" (input)="searchText = $any($event.target).value.toLowerCase()"></div><div class="table-wrap"><table><thead><tr><th>CUSTOMER ID</th><th>NAME</th><th>SEGMENT</th><th>LOCATION</th><th>STATUS</th></tr></thead><tbody>@for (c of customers; track c.id) { @if ((c.id + c.name + c.segment).toLowerCase().includes(searchText)) {<tr><td class="ref">{{c.id}}</td><td>{{c.name}}</td><td>{{c.segment}}</td><td>{{c.location}}</td><td><span class="status">Active</span></td></tr>} }</tbody></table></div></div>
    } @else if (section === 'accounts') {
      <div class="page-heading"><div><div class="eyebrow">DEPOSIT SERVICES</div><h1>Accounts</h1><p class="muted">Overview of fictional deposit and current accounts.</p></div></div>
      <div class="metrics-grid two-metrics"><article class="metric-card"><div class="metric-top"><span>Total demo accounts</span><span class="metric-icon blue">▣</span></div><strong>1,875</strong><small class="muted">Across all sample customer segments</small></article><article class="metric-card"><div class="metric-top"><span>Illustrative deposits</span><span class="metric-icon teal">↗</span></div><strong>₹ 24.8 Cr</strong><small class="muted">Synthetic portfolio balance</small></article></div>
      <div class="panel"><div class="panel-heading"><div><h2>Account samples</h2><p class="muted">Fictional masked account references</p></div></div><div class="table-wrap"><table><thead><tr><th>ACCOUNT REF</th><th>CUSTOMER</th><th>PRODUCT</th><th>OPENED</th><th>BALANCE</th><th>STATUS</th></tr></thead><tbody>@for (a of accounts; track a.ref) {<tr><td class="ref">{{a.ref}}</td><td>{{a.customer}}</td><td>{{a.product}}</td><td>{{a.opened}}</td><td class="amount">{{a.balance}}</td><td><span class="status">Active</span></td></tr>}</tbody></table></div></div>
    } @else if (section === 'loans') {
      <div class="page-heading"><div><div class="eyebrow">CREDIT PORTFOLIO</div><h1>Loan portfolio</h1><p class="muted">Illustrative loan exposure and repayment monitoring.</p></div></div>
      <div class="metrics-grid"><article class="metric-card"><div class="metric-top"><span>Active facilities</span><span class="metric-icon blue">◫</span></div><strong>432</strong><small class="muted">Synthetic loan accounts</small></article><article class="metric-card"><div class="metric-top"><span>Outstanding</span><span class="metric-icon violet">₹</span></div><strong>₹ 8.6 Cr</strong><small class="muted">Illustrative exposure</small></article><article class="metric-card"><div class="metric-top"><span>On-time repayment</span><span class="metric-icon teal">✓</span></div><strong>96.2%</strong><small class="positive">Sample portfolio indicator</small></article><article class="metric-card"><div class="metric-top"><span>Needs review</span><span class="metric-icon amber">!</span></div><strong>14</strong><small class="muted">Fictional demo records</small></article></div>
      <div class="panel"><div class="panel-heading"><div><h2>Loan categories</h2><p class="muted">Illustrative distribution by product</p></div></div><div class="category-list"><div><span>Personal loans</span><strong>42%</strong><div class="progress"><i style="width:42%"></i></div></div><div><span>Home loans</span><strong>31%</strong><div class="progress"><i style="width:31%"></i></div></div><div><span>Vehicle loans</span><strong>18%</strong><div class="progress"><i style="width:18%"></i></div></div><div><span>Business loans</span><strong>9%</strong><div class="progress"><i style="width:9%"></i></div></div></div></div>
      <p class="disclaimer">Loan indicators are fictional examples for UI demonstration only. They are not credit scores, eligibility decisions or financial advice.</p>
    } @else if (section === 'transactions') {
      <div class="page-heading"><div><div class="eyebrow">PAYMENTS & ACTIVITY</div><h1>Transactions</h1><p class="muted">Review recent synthetic transaction activity.</p></div><button class="primary-button" (click)="searchText = ''">Clear search</button></div>
      <div class="panel"><div class="panel-heading"><div><h2>Transaction register</h2><p class="muted">Search by reference or customer</p></div><input class="search-input" aria-label="Search transactions" placeholder="Search transactions…" (input)="searchText = $any($event.target).value.toLowerCase()"></div><div class="table-wrap"><table><thead><tr><th>REFERENCE</th><th>CUSTOMER</th><th>TYPE</th><th>DATE</th><th>AMOUNT</th><th>STATUS</th></tr></thead><tbody>@for (item of transactions; track item.ref) { @if ((item.ref + item.customer + item.type).toLowerCase().includes(searchText)) {<tr><td class="ref">{{item.ref}}</td><td>{{item.customer}}</td><td>{{item.type}}</td><td>{{item.date}}</td><td class="amount">{{item.amount}}</td><td><span class="status" [class.pending]="item.status === 'Pending'">{{item.status}}</span></td></tr>} }</tbody></table></div></div>
    } @else {
      <div class="page-heading"><div><div class="eyebrow">GENERATIVE AI · PREVIEW</div><h1>AI banking assistant</h1><p class="muted">Ask questions about the fictional FinSight demo dataset.</p></div><span class="environment-pill">● PREVIEW MODE</span></div>
      <div class="notice"><span>ⓘ</span><div><strong>Prototype assistant</strong><p>This screen uses a local sample response. It is not connected to the Python AI service or a language model yet.</p></div></div>
      <div class="chat-panel"><div class="chat-header"><div class="assistant-avatar">✧</div><div><strong>FinSight assistant</strong><small>Demo mode · Sample knowledge only</small></div><span class="online-dot"></span></div><div class="chat-body"><div class="message assistant-message">Hello! I can help explain the sample banking metrics shown in this portfolio demo. Try asking about transaction activity, loan categories or customer totals.</div>@if (question) {<div class="message user-message">{{question}}</div>} @if (answer) {<div class="message assistant-message">{{answer}}</div>}</div><form class="chat-form" (submit)="ask($event)"><label class="sr-only" for="question">Ask a banking question</label><input id="question" [value]="questionDraft" (input)="questionDraft = $any($event.target).value" placeholder="Ask about the demo portfolio…" required><button class="primary-button" type="submit">Send ↑</button></form><div class="chat-footnote">Do not enter personal, confidential or real banking information.</div></div>
    }
    @if (noticeText) {<div class="toast" role="status">{{noticeText}} <button (click)="noticeText = ''" aria-label="Dismiss message">×</button></div>}
  `
})
export class WorkspaceComponent implements OnInit, OnDestroy {
  private readonly route = inject(ActivatedRoute);
  private readonly dashboardService = inject(DashboardService);
  private routeSubscription?: Subscription;
  section: Section = 'overview';
  apiState: 'loading' | 'connected' | 'demo' = 'demo';
  dashboard: DashboardSummary = {
    demoData: true, currency: 'INR', totalCustomers: 1250, totalAccounts: 1875,
    activeLoans: 432, monthlyTransactions: 18450, totalDeposits: 128450000,
    totalOutstandingLoans: 76250000, asOfDate: '2026-11-26'
  };
  searchText = '';
  noticeText = '';
  questionDraft = '';
  question = '';
  answer = '';

  readonly transactions = [
    { ref: 'TXN-84021', customer: 'Aarav Mehta', type: 'Digital transfer', date: '26 Nov 2026', amount: '₹ 24,500', status: 'Completed' },
    { ref: 'TXN-84020', customer: 'Mira Shah', type: 'Loan repayment', date: '26 Nov 2026', amount: '₹ 18,200', status: 'Completed' },
    { ref: 'TXN-84019', customer: 'Kabir Rao', type: 'Utility payment', date: '25 Nov 2026', amount: '₹ 3,450', status: 'Pending' },
    { ref: 'TXN-84018', customer: 'Anaya Iyer', type: 'Account deposit', date: '25 Nov 2026', amount: '₹ 50,000', status: 'Completed' }
  ];
  readonly customers = [
    { id: 'CUS-1001', name: 'Aarav Mehta', segment: 'Premium', location: 'Bengaluru' },
    { id: 'CUS-1002', name: 'Mira Shah', segment: 'Retail', location: 'Pune' },
    { id: 'CUS-1003', name: 'Kabir Rao', segment: 'Business', location: 'Hyderabad' }
  ];
  readonly accounts = [
    { ref: 'AC-•••-4102', customer: 'Aarav Mehta', product: 'Savings', opened: '12 Mar 2024', balance: '₹ 4,25,000' },
    { ref: 'AC-•••-7819', customer: 'Mira Shah', product: 'Current', opened: '04 Aug 2023', balance: '₹ 8,70,500' },
    { ref: 'AC-•••-2391', customer: 'Kabir Rao', product: 'Savings', opened: '19 Jan 2025', balance: '₹ 2,10,800' }
  ];

  ngOnInit(): void {
    this.routeSubscription = this.route.data.subscribe(data => {
      this.section = (data['section'] as Section | undefined) ?? 'overview';
      this.searchText = '';
      if (this.section === 'overview') this.loadDashboard();
    });
  }

  ngOnDestroy(): void { this.routeSubscription?.unsubscribe(); }

  refresh(): void {
    this.loadDashboard();
  }

  private loadDashboard(): void {
    this.apiState = 'loading';
    this.dashboardService.getSummary().subscribe({
      next: summary => {
        this.dashboard = summary;
        this.apiState = 'connected';
      },
      error: () => {
        // GitHub Pages is a static host; keep the portfolio usable until an API is deployed.
        this.apiState = 'demo';
      }
    });
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