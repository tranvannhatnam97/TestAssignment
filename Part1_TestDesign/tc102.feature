Feature: Register
#ExperimentalDesign
#UserName
Scenario: Register successfully with extra space in username
Given User navigate to register page
When User type username " UserName "
And User type email "address@gmail.com"
And User type password "Abc@12345"
And User click Register
Then User navigate to Homepage successfully with username "UserName"