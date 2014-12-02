Template.heroBlock.rendred = function() {
  $('.ui.modal').modal();
};

Template['heroBlock'].events({
  'click .ui.card.Husam': function () {
    $('#Husam').modal('show');
  },
  'click .ui.card.Isam': function () {
    $('#Isam').modal('show');
  },
  'click .ui.card.Damir': function () {
    $('#Damir').modal('show');
  },
  'click .ui.card.Sajjad': function () {
    $('#Sajjad').modal('show');
  }
});
