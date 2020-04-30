Package.describe({
  name: 'epotek:accounts-ui',
  version: '1.5.4',
  summary: 'Accounts UI for React in Meteor 1.8+',
  git: 'https://github.com/e-Potek/accounts-ui.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.8');
  api.use('ecmascript');
  api.use('accounts-base');
  api.use('check');
  api.use('random');
  api.use('email');
  api.use('session');
  api.use('react-meteor-data@2.1.0');
  api.use('tmeasday:check-npm-versions@0.3.2');

  api.imply('accounts-base');

  api.use('accounts-oauth', { weak: true });
  api.use('accounts-password', { weak: true });

  api.addFiles('check-npm.js', ['client', 'server']);

  api.mainModule('main_client.js', 'client');
  api.mainModule('main_server.js', 'server');
});
