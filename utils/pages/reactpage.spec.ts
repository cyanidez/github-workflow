import { Locator, Page } from '@playwright/test';


export class ReactPage { 
  readonly txtTodo: Locator; 
  readonly page: Page; 

  constructor(page: Page) {
    this.page = page; 
    this.txtTodo = this.page.locator('#todo-input');
  }

  async fillTodo(todo: string ) {
    await this.txtTodo.fill(todo);
  }
  async fillTodoAndEnter(todo: string) { 
    await this.txtTodo.fill(todo);
    await this.txtTodo.press('Enter');
    
  }
  
}