Feature: Register
#ExperimentalDesign
#ErrorHandling
#Email
Scenario: Register successfully with mixing upcase and lowcase characters
Given User navigate to register page
When User type username "UserName"
And User type email " AdDress@gmail.com "
And User type password "Abc@12345"
And User click Register
Then User navigate to Homepage successfully with email "address@gmail.com"