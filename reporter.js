const reporter = require('cucumber-html-reporter')

const options = {
    theme: 'bootstrap',
    jsonFile: 'cucumber_report.json',
    output: 'reports/cucumber_report.html',
    reportSuiteAsScenario: true,
    scenarioTimestamp: true,
    launchReport: false,
    metadata: {
        'App Version': '2.0.0',
        'Test Environment': 'STAGING',                   // or 'Production'
        Browser: 'Chrome 108.0.5359.95',
        Platform: 'Windows 10'
    }

}

reporter.generate(options)
