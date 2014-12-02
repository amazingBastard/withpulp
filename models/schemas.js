Schema = {};

Schema.wizard = new SimpleSchema({
  site: {
    type: String,
    label: 'your website url',
    max: 30
  },
  name: {
    type: String,
    label: 'your first name',
    max: 30
  },
  email: {
    type: String,
    label: 'your email address',
    regEx: SimpleSchema.RegEx.Email
  }
});
