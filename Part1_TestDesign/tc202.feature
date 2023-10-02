Feature: Register
#ExperimentalDesign
#ErrorHandling
#Email
Scenario: Register successfully with extra space in email
Given User navigate to register page
When User type username "UserName"
And User type email " address@gmail.com "
And User type password "Abc@12345"
And User click Register
Then User navigate to Homepage successfully with email "address@gmail.com"