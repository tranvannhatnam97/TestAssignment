Feature: Register
#ExperimentalDesign
#Username
Scenario: Register failed with middle space in username
Given User navigate to register page
When User type username "User Name" and click outside of the box
Then Message "Username does not contain space" appear