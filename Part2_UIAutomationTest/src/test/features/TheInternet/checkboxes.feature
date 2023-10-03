Feature: Checkboxes
Scenario: Checkboxes successfully
Given User go to homepage
When User click Checkboxes
Then User navigate to Checkboxes Page
When User click checkbox1
Then Checkbox1 is checked
When User click checkbox2
Then Checkbox2 is unchecked