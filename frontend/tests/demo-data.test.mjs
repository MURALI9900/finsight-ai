import assert from 'node:assert/strict';
import test from 'node:test';
import {
  demoAccounts,
  demoCustomers,
  demoDashboard,
  demoTransactions,
  filterDemoRows
} from '../src/app/demo-data.mjs';

test('dashboard metrics are marked as synthetic and contain valid counts', () => {
  assert.equal(demoDashboard.demoData, true);
  assert.equal(demoDashboard.currency, 'INR');
  for (const key of ['totalCustomers', 'totalAccounts', 'activeLoans', 'monthlyTransactions']) {
    assert.ok(Number.isInteger(demoDashboard[key]) && demoDashboard[key] > 0, key);
  }
});

test('sample records have unique synthetic identifiers', () => {
  for (const [rows, key] of [[demoCustomers, 'id'], [demoAccounts, 'ref'], [demoTransactions, 'ref']]) {
    const identifiers = rows.map(row => row[key]);
    assert.equal(new Set(identifiers).size, identifiers.length, key);
    assert.ok(identifiers.every(value => typeof value === 'string' && value.length > 0));
  }
  assert.ok(demoCustomers.every(customer => customer.id.startsWith('CUS-')));
  assert.ok(demoTransactions.every(transaction => transaction.ref.startsWith('TXN-')));
});

test('search is case-insensitive and checks every requested field', () => {
  const customers = filterDemoRows(demoCustomers, 'BENGALURU', ['location']);
  assert.deepEqual(customers.map(customer => customer.id), ['CUS-1001']);

  const transactions = filterDemoRows(demoTransactions, 'pending', ['status']);
  assert.deepEqual(transactions.map(transaction => transaction.ref), ['TXN-84019']);
});

test('blank queries return all rows and unmatched queries return an empty list', () => {
  assert.equal(filterDemoRows(demoCustomers, '   ', ['name']).length, demoCustomers.length);
  assert.deepEqual(filterDemoRows(demoTransactions, 'not-a-real-reference', ['ref']), []);
});
