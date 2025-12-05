import { test } from '@playwright/test';
import { ManagerOpenAccountPage } from '../../../src/pages/manager/ManagerOpenAccountPage';

test('Assert manager can choose currencies for account', async ({ page }) => {
  const openAccountPage = new ManagerOpenAccountPage(page);
  await openAccountPage.open();
  await openAccountPage.selectCurrency('Dollar');
  await openAccountPage.assertSelectedCurrency('Dollar');
  await openAccountPage.selectCurrency('Pound');
  await openAccountPage.assertSelectedCurrency('Pound');
  await openAccountPage.selectCurrency('Rupee');
  await openAccountPage.assertSelectedCurrency('Rupee');
});
