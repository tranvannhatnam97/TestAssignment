Feature: Register
#ExperimentalDesign
#ErrorHandling
#Password
Scenario: Register failed with empty password
Given User navigate to register page
And Email "address@gmail.com" was registered
When User type username "UserName"
And User type email "address@gmail.com"
And User click password text box and click outside of the box
Then Message "Password must be at least 8 characters long" appear