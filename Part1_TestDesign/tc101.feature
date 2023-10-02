Feature: Register
#ExperimentalDesign
#ErrorHandling
#Username
Scenario: Register failed with registered username
Given User navigate to register page
When User type username "UserName" and click outside of the box
Then Message "This username already existed" appear