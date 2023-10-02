Feature: Register
#ExperimentalDesign
#ErrorHandling
#Email
Scenario: Register failed with registered email
Given User navigate to register page
And Email "address@gmail.com" was registered
When User type username "UserName"
And User type email "address@gmail.com"
Then Message "This email is already being used" appear