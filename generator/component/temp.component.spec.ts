import { mock } from 'angular';
import "angular-mocks";
import { <%= moduleName %>Module } from './<%= module %>-<%= name %>.module';

describe("<%= moduleName %> component", () => {
  let $componentController; 
  let componentCtrl;

  beforeEach(() => {
    mock.module(<%= moduleName %>Module);

    mock.inject((_$componentController_) => {
      $componentController = _$componentController_;
    });

    componentCtrl = $componentController('<%= moduleName %>', null, {});
  });

  it('the component should exist', () => {
    expect(componentCtrl).toBeDefined(); 
  });
});