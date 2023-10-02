Feature: Register
#ExperimentalDesign
#ErrorHandling
#Password
Scenario: Register failed without upcase characters password
Given User navigate to register page
And Email "address@gmail.com" was registered
When User type username "UserName"
And User type email "address@gmail.com"
And User type password "aa@123456789" and click outside of the box
Then Message "Password has to contain at least 1 upcase character" appear