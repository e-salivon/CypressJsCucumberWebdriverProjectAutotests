# Project structure
The project contains fearute files with test scenarios and js files with step definitions.
The step_definitions folder located in cypress/support/step_definitions

# Custom scripts
To create custom script, go to package.json and add the script in the scripts section.
To run custom script use npm run <name of the script>
To run all tests with cucumber HTML reports use npm run run-all-tests-with-cucumber-html-reports
In case of fails, please open index.html in file explorer and open html report in the browser (cypress/reports/html-multi-report)