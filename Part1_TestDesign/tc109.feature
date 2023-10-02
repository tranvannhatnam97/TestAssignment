Feature: Register
#EquivalencePartitioning
#Username
Scenario: Register failed with empty username
Given User navigate to register page
When User click user name text box and click outside of the box
Then Message "Username must be at least 6 characters long" appear