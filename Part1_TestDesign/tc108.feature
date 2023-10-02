Feature: Register
#ExperimentalDesign
#ErrorHandling
#Username
Scenario: Register failed with special character ! in username
Given User navigate to register page
When User type username "UserName!" and click outside of the box
Then Message "Username does not contain special characters such as !,#,&,..."

Scenario: Register failed with special character & in username
Given User navigate to register page
When User type username "UserName&" and click outside of the box
Then Message "Username does not contain special characters such as !,#,&,..."

Scenario: Register failed with special character # in username
Given User navigate to register page
When User type username "UserName#" and click outside of the box
Then Message "Username does not contain special characters such as !,#,&,..."