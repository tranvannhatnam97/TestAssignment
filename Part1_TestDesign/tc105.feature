Feature: Register
#EquivalencePartitioning
#Boundary
#Username
Scenario: Register failed with too short username
Given User navigate to register page
When User type username "UserNa" and click outside of the box
Then Message "Username must be at least 6 characters long" appear