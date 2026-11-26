import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DashboardSummary } from './dashboard-summary.model';

@Injectable({ providedIn: 'root' })
export class DashboardService {
  private readonly http = inject(HttpClient);

  // Relative URL keeps the request under the GitHub Pages project path.
  // Configure a deployed API gateway here when the backend is hosted.
  getSummary(): Observable<DashboardSummary> {
    return this.http.get<DashboardSummary>('api/v1/dashboard/summary');
  }
}
