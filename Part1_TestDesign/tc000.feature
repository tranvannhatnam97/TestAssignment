Feature: Register
#ExperimentalDesign
Scenario: Navigate to register page successfully
Given User navigate to register page
Then Username text box is visible and enable
And Email text box is visible and enable
And Password text box is visible and enable
And Register button is visible and enable