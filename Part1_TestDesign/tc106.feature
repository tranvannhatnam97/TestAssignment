Feature: Register
#EquivalencePartitioning
#Username
Scenario: Register failed with too long username
Given User navigate to register page
When User type username "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" and click outside of the box
Then Message "Username must be at maximum 60 characters long" appear