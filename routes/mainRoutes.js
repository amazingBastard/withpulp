// Home Route
Router.route('/', function () {
  this.render('home');
  SEO.set({ title: 'Home - ' + Meteor.App.NAME });
}, {
  name: 'home',
  waitOn: function () {
    return Meteor.subscribe('sections');
  },
  action: function () {
    if (this.ready())
      this.render('sections')
    else
      this.render('loading');
  }
});
