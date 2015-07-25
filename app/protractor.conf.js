exports.config = {
  directConnect: true,
  capabilities: {
    'browserName': 'chrome'
  },
  baseUrl: 'http://localhost:3000/',
  framework: 'jasmine2',
  specs: ['app/test/**/*_spec.js'],
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000,
    showColors: true,
    isVerbose : true,
    includeStackTrace : true
  }
};
