Feature: Register
#ExperimentalDesign
#ErrorHandling
#Password
Scenario: Register failed without space in password
Given User navigate to register page
And Email "address@gmail.com" was registered
When User type username "UserName"
And User type email "address@gmail.com"
And User type password "AA@ 1234567" and click outside of the box
Then Message "Password can not contain space" appear