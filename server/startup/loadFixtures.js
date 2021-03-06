function loadFixture(fixtures, collection) {
  var i;

  for (i = 0; i < fixtures.length; i+= 1) {
    //collection.remove({ });
    collection.insert(fixtures[i]);
  }
}

Meteor.startup(function () {
  if (Sections.find().count() === 0) {
    loadFixture(Fixtures['sections'], Sections);
  }

  if (Cases.find().count() === 0) {
    loadFixture(Fixtures['cases'], Cases);
  }
});
