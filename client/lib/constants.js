// Define App Constants

if (Meteor.App) {
  throw new Meteor.Error('Meteor.App already defined? see client/lib/constants.js');
}

Meteor.App = {
  NAME: 'With Pulp',
  DESCRIPTION: 'We\'re a digital firm that combines research, strategy, design and technology to create meaningful software products and services for our clients.'
};
