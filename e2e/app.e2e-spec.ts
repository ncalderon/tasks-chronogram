import { TasksChronogramPage } from './app.po';

describe('tasks-chronogram App', () => {
  let page: TasksChronogramPage;

  beforeEach(() => {
    page = new TasksChronogramPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
