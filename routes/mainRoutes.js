// Home Route
Router.route('/', function () {
  this.render('home');
  SEO.set({ title: Meteor.App.NAME });
  GAnalytics.pageview();
}, {
  name: 'home',
  waitOn: function () {
    return [
      Meteor.subscribe('sections'),
      Meteor.subscribe('cases')
    ]
  },
  action: function () {
    if (this.ready())
      this.render('sections');
    else
      this.render('loading');
  }
});

// Case Study Route
Router.route('/cases/:_id', {
  name: 'case',
  data: function() {
    return Cases.findOne({_id: this.params._id});
  },
  waitOn: function() {
    return Meteor.subscribe('cases');
  },
  action: function() {
    if (this.ready())
      this.render('case')
    else
      this.render('loading');
  }
});

Router.onBeforeAction('dataNotFound', {only: 'case'});
