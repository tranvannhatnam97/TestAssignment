Feature: Register
#ExperimentalDesign
#ErrorHandling
#Password
Scenario: Register failed without number characters password
Given User navigate to register page
And Email "address@gmail.com" was registered
When User type username "UserName"
And User type email "address@gmail.com"
And User type password "AA@aaaaaaaaaa" and click outside of the box
Then Message "Password has to contain at least 1 number" appear