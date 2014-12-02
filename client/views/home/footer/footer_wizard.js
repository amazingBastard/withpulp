Template.footerWizard.created = function() {
  Session.set('analyze', false);
}

Template['footerWizard'].helpers({
  wizardSchema: function () {
    return Schema.wizard;
  },
  switchClass: function () {
    return Session.get('analyze') ? 'switch' : '';
  }
});
