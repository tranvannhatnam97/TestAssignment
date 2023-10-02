Feature: Register
#EquivalencePartitioning
#Username
Scenario: Register successfully with number in username
Given User navigate to register page
When User type username "UserName123" and click outside of the box
Then Message "Username must be at least 6 characters long" appear