import { expect } from '@playwright/test';

export class BankManagerMainPage {
  constructor(page) {
    this.page = page;
    this.addCustomerButton = page.locator('button[ng-click="addCust()"]');
    this.openAccountButton = page.locator('button[ng-click="openAccount()"]');
    this.customersButton = page.locator('button[ng-click="showCust()"]');
  }

  async open() {
    await this.page.goto('/angularJs-protractor/BankingProject/#/manager');
  }

  async clickAddCustomer() {
    await this.addCustomerButton.click();
  }

  async clickOpenAccount() {
    await this.openAccountButton.click();
  }

  async clickCustomers() {
    await this.customersButton.click();
  }

  async assertAddCustomerButtonVisible() {
    await expect(this.addCustomerButton).toBeVisible();
  }

  async assertOpenAccountButtonVisible() {
    await expect(this.openAccountButton).toBeVisible();
  }

  async assertCustomersButtonVisible() {
    await expect(this.customersButton).toBeVisible();
  }
}

