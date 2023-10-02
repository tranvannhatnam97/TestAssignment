Feature: Register
#ExperimentalDesign
#ErrorHandling
#EquivalencePartitioning
#Password
Scenario: Register failed with too short password
Given User navigate to register page
And Email "address@gmail.com" was registered
When User type username "UserName"
And User type email "address@gmail.com"
And User type password "Aa@12" and click outside of the box
Then Message "Password must be at least 8 characters long" appear