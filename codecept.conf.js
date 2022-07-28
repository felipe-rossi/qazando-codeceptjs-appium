const server = require("./Server/server")

exports.config = {
  output: './output',
  helpers: {
    Appium: {
      app: 'C:\\Users\\felip\\OneDrive\\Documentos\\app-release.apk',
      platform: 'Android',
      desiredCapabilities: {
        appPackage: 'com.qazandoapp',
        appActivity: 'MainActivity',
        deviceName: 'emulator-5554',
        platformVersion: '9'
      }
    }
  },
  include: {
    I: './steps_file.js',
    loginPage: './pages/login_page.js',
    homePage: './pages/home_page.js'
  },
  mocha: {},
  bootstrap: async () => {
    await server.start();
  },
  teardown: async () =>{
    await server.stop();
  },
  timeout: null,
  hooks: [],
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    retryFailedStep: {
      enabled: false
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {}
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: './*_test.js',
  name: 'Curso Qazando',
}