Feature: Register
#ExperimentalDesign
#ErrorHandling
#Email
Scenario: Register failed with nonexist email
Given User navigate to register page
When User type username "UserName"
And User type email "fakeaddress@gmail.com"
And User type password "Abc@12345"
Then Message "Non-exist email" appear