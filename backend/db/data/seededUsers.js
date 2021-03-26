// * Blank Seed model:
// {
//   username: '',
//   email: '',
//   password: '',
//   passwordConfirmation: '',
//   isAdmin: false
// }
// *

export default [

  {
    username: 'Admin',
    email: 'admin@admin.com',
    password: 'AdaLovelace',
    passwordConfirmation: 'AdaLovelace',
    isAdmin: true
  },
  {
    username: 'Joe Public',
    email: 'joe@public.com',
    password: 'pass',
    passwordConfirmation: 'pass',
    isAdmin: false
  }

]

// admin issue. How do we set a user to admin or not?
// A user registers, how do we then make that user an admin?
// Use shell command and edit it into the database?
// create an admin page that shows all users, and that admin can make other users admin?
// Do we need to define that in the schema?
// what if someone makes a post requests, knows the admin field, and types true and becomes an admin without us knowing.
