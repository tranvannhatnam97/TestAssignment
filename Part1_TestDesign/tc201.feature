Feature: Register
#ExperimentalDesign
#ErrorHandling
#Email
Scenario: Register failed with middle space in email
Given User navigate to register page
When User type username "UserName"
And User type email "add ress@gmail.com"
Then Message "Incorrect email" appear