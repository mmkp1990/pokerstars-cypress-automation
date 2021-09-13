## Developer - Mayur Patel

## Installation

- To install the three packages mentioned in: https://github.com/thestarsgroup/front-end-tech-test - npmjs, cypress and cypress cucumber preprocessor.
- In addition, perform an npm install on the following:
    - oddslib

## Run Tests
- Simply run npx cypress run and this will run the tests against a chrome browser.
- Another way is run npx cypress open and it will open up the cypress test dashboard and you can select to
run all the tests or specfic features files within there.

## View Test Results:
- You can view the test results in the terminal whilst it runs the test.
- Within the 'videos' folder, you can view videos of the feature files to see how the tests were executed against a chrome browser within cypress.
- There is a screenshots folder which displays screenshots of failed tests only.

## Improvements
- As I know this is a short exercise, there would have been a few ways to improve the framework going forward, this can include:
 - Updating package json to allow a steps definiton folder to be added. At the moment the cypress cucumber preprocessor has a default way to pick up step definitions where the step definition files need to be within folders that match the name of the specs in order to be read from. I think it would be better to have step definition files in a seperate step definitions folder.

 - Potentially also include in the package json so keys that will run certain cypress commands in command line. As mentioned in this documentations:
    - https://docs.cypress.io/guides/guides/command-line#Installation

 - Reporting would be a good addition to add.