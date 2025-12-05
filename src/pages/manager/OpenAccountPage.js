import { expect } from '@playwright/test';

export class ManagerOpenAccountPage {
  constructor(page) {
    this.page = page;

    this.customerSelect = page.locator('#userSelect');
    this.currencySelect = page.locator('#currency');
    this.processButton = page.locator('button[type="submit"]');
    this.alert = page.locator('.alert');
  }

  async open() {
    await this.page.goto('/angularJs-protractor/BankingProject/#/manager/openAccount');
  }

  async selectCustomer(name) {
    await this.customerSelect.selectOption({ label: name });
  }

  async selectCurrency(currency) {
    await this.currencySelect.selectOption({ label: currency });
  }

  async clickProcess() {
    await this.processButton.click();
  }

  async assertAccountCreatedAlertVisible() {
    await expect(this.alert).toBeVisible();
  }

  async reloadPage() {
    await this.page.reload();
  }

  async assertSelectedCurrency(currency) {
    await expect(this.currencySelect).toHaveValue(currency);
  }
}

