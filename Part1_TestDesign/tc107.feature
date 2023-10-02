Feature: Register
#EquivalencePartitioning
#Boundary
#Username
Scenario: Register successfully with maximum length username
Given User navigate to register page
When User type username "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" and click outside of the box
Then No message appear