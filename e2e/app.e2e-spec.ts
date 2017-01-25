import { ListTodosPage } from './app.po';

describe('list-todos App', function() {
  let page: ListTodosPage;

  beforeEach(() => {
    page = new ListTodosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
