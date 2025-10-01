import { expect, test, Locator, Page } from '@playwright/test';


export class HomePage { 
  
  readonly page: Page; 
  readonly lnkReact: Locator; 

  constructor(page: Page) {
    this.page = page; 
    this.lnkReact = page.locator('a span:text-is("React")');
  }
  
  async clickReact() {
    await this.lnkReact.click();
  }

}