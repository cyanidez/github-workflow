import { Locator, Page, expect } from '@playwright/test';


export class ReactPage { 
  readonly txtTodo: Locator; 
  readonly page: Page; 
  readonly lblTodo: Locator; 

  constructor(page: Page) {
    this.page = page; 
    this.txtTodo = this.page.locator('#todo-input');
    this.lblTodo = this.page.locator('[data-testid="todo-list"] li');
  }

  async fillTodo(todo: string ) {
    await this.txtTodo.fill(todo);
  }
  async fillTodoAndEnter(todo: string) { 
    await this.txtTodo.fill(todo);
    await this.txtTodo.press('Enter');
    
  }

  async todoShouldAdded(todo: string, row: number = 1) {
    await expect(this.lblTodo.nth(row - 1)).toContainText(todo);
  }
  
}