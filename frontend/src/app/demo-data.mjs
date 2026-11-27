export const demoDashboard = {
  demoData: true,
  currency: 'INR',
  totalCustomers: 1250,
  totalAccounts: 1875,
  activeLoans: 432,
  monthlyTransactions: 18450,
  totalDeposits: 128450000,
  totalOutstandingLoans: 76250000,
  asOfDate: '2026-11-27'
};

export const demoCustomers = [
  { id: 'CUS-1001', name: 'Aarav Mehta', segment: 'Premium', location: 'Bengaluru' },
  { id: 'CUS-1002', name: 'Mira Shah', segment: 'Retail', location: 'Pune' },
  { id: 'CUS-1003', name: 'Kabir Rao', segment: 'Business', location: 'Hyderabad' }
];

export const demoAccounts = [
  { ref: 'AC-•••-4102', customer: 'Aarav Mehta', product: 'Savings', opened: '12 Mar 2024', balance: '₹ 4,25,000' },
  { ref: 'AC-•••-7819', customer: 'Mira Shah', product: 'Current', opened: '04 Aug 2023', balance: '₹ 8,70,500' },
  { ref: 'AC-•••-2391', customer: 'Kabir Rao', product: 'Savings', opened: '19 Jan 2025', balance: '₹ 2,10,800' }
];

export const demoTransactions = [
  { ref: 'TXN-84021', customer: 'Aarav Mehta', type: 'Digital transfer', date: '26 Nov 2026', amount: '₹ 24,500', status: 'Completed' },
  { ref: 'TXN-84020', customer: 'Mira Shah', type: 'Loan repayment', date: '26 Nov 2026', amount: '₹ 18,200', status: 'Completed' },
  { ref: 'TXN-84019', customer: 'Kabir Rao', type: 'Utility payment', date: '25 Nov 2026', amount: '₹ 3,450', status: 'Pending' },
  { ref: 'TXN-84018', customer: 'Anaya Iyer', type: 'Account deposit', date: '25 Nov 2026', amount: '₹ 50,000', status: 'Completed' }
];

/**
 * Filter a synthetic demo collection by a case-insensitive query.
 * @template T
 * @param {readonly T[]} rows
 * @param {string} query
 * @param {(keyof T)[]} fields
 * @returns {T[]}
 */
export function filterDemoRows(rows, query, fields) {
  const normalizedQuery = query.trim().toLocaleLowerCase();
  if (!normalizedQuery) return [...rows];

  return rows.filter(row =>
    fields.some(field =>
      String(row[field] ?? '').toLocaleLowerCase().includes(normalizedQuery)
    )
  );
}
