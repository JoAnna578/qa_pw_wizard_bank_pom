import { expect } from '@playwright/test';

export class ManagerCustomerListPage {
  constructor(page) {
    this.page = page;

    this.searchInput = page.locator('input[ng-model="searchCustomer"]');
    this.customerRows = page.locator('table tbody tr');
  }

  async open() {
    await this.page.goto('/angularJs-protractor/BankingProject/#/manager/list');
  }

  async searchCustomerByFirstName(firstName) {
    await this.searchInput.fill(firstName);
  }

  async searchCustomerByLastName(lastName) {
    await this.searchInput.fill(lastName);
  }

  async searchCustomerByPostalCode(postalCode) {
    await this.searchInput.fill(postalCode);
  }

  async deleteCustomerByName(firstName, lastName) {
    const row = this.customerRows.filter({ hasText: `${firstName} ${lastName}` });
    const deleteButton = row.locator('button[ng-click="deleteCust(cust)"]');
    await deleteButton.click();
  }

  async assertCustomerRowPresent(firstName, lastName) {
    const row = this.customerRows.filter({ hasText: `${firstName} ${lastName}` });
    await expect(row).toHaveCount(1);
  }

  async assertOnlyOneRowPresent() {
    await expect(this.customerRows).toHaveCount(1);
  }

  async assertCustomerRowNotPresent(firstName, lastName) {
    const row = this.customerRows.filter({ hasText: `${firstName} ${lastName}` });
    await expect(row).toHaveCount(0);
  }

  async assertLastRowHasAccountNumber() {
    const lastRow = this.customerRows.last();
    const accountNumberCell = lastRow.locator('td:nth-child(4)');
    await expect(accountNumberCell).not.toHaveText('');
  }
}

