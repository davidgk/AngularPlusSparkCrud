import { PartnerCrudAngularPage } from './app.po';

describe('partner-crud-angular App', () => {
  let page: PartnerCrudAngularPage;

  beforeEach(() => {
    page = new PartnerCrudAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
