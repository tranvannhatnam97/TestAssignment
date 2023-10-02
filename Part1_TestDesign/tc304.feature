Feature: Register
#ExperimentalDesign
#ErrorHandling
#EquivalencePartitioning
#Boundary
#Password
Scenario: Register successfully with maximum length of password
Given User navigate to register page
And Email "address@gmail.com" was registered
When User type username "UserName"
And User type email "address@gmail.com"
And User type password "Aa@123456xxxx..." (256 characters) and click outside of the box
Then No message appear