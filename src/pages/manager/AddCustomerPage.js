import { expect } from '@playwright/test';

export class AddCustomerPage {
  constructor(page) {
    this.page = page;
    this.firstNameInput = page.locator('input[placeholder="First Name"]');
    this.lastNameInput = page.locator('input[placeholder="Last Name"]');
    this.postCodeInput = page.locator('input[placeholder="Post Code"]');
    this.addButton = page.locator('button[type="submit"]'); 
    this.alert = page.locator('.alert');
  }

  async open() {
    await this.page.goto(
      '/angularJs-protractor/BankingProject/#/manager/addCust',
    );
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
    await this.addButton.click();
  }

  async assertCustomerAddedAlertVisible() {
    await expect(this.alert).toBeVisible();
  }
  
  async reloadPage() {
    await this.page.reload();
  }
}

