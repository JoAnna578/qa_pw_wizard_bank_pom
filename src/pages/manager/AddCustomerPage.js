import { expect } from '@playwright/test';

export class AddCustomerPage {
  constructor(page) {
    this.page = page;
    this.firstNameInput = page.locator('input[placeholder="First Name"]');
    this.lastNameInput = page.locator('input[placeholder="Last Name"]');
    this.postCodeInput = page.locator('input[placeholder="Post Code"]');
    this.addButton = page.locator('button[type="submit"]');
  }

  async open() {
    await this.page.goto('/angularJs-protractor/BankingProject/#/manager/addCust');
  }

  async fillFirstName(name) {
    await this.firstNameInput.fill(name);
  }

  async fillLastName(name) {
    await this.lastNameInput.fill(name);
  }

  async fillPostCode(code) {
    await this.postCodeInput.fill(code);
  }

  async clickAddCustomer() {
    const dialogPromise = this.page.waitForEvent('dialog');

    await this.addButton.click();

    const dialog = await dialogPromise;
    const message = dialog.message();
    await dialog.accept();

    return message;
  }

  async reloadPage() {
    await this.page.reload();
  }
}


