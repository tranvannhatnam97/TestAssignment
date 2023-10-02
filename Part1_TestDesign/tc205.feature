Feature: Register
#ExperimentalDesign
#ErrorHandling
#EquivalencePartitioning
#Boundary
#Email

Scenario: Register failed with incorrect format email: too long
Given User navigate to register page
When User type username "UserName"
And User type email "aaa...aa@gmail.com" (321 characters) and click outside of the box
Then Message "Incorrect email" appear