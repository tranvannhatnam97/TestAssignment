Feature: Register
#ExperimentalDesign
#ErrorHandling
#Email

Scenario: Register failed with incorrect format email: middle space
Given User navigate to register page
When User type username "UserName"
And User type email "incorrect address@gmail.com" and click outside of the box
Then Message "Incorrect email" appear

Scenario: Register failed with incorrect format email: without @
Given User navigate to register page
When User type username "UserName"
And User type email "incorrectaddressgmail.com" and click outside of the box
Then Message "Incorrect email" appear

Scenario: Register failed with incorrect format email: >= 1 @ outside quote
Given User navigate to register page
When User type username "UserName"
And User type email "incorrec@taddress@gmail.com" and click outside of the box
Then Message "Incorrect email" appear

Scenario: Register failed with incorrect format email: special character outside quote
Given User navigate to register page
When User type username "UserName"
And User type email "address[@gmail.com" and click outside of the box
Then Message "Incorrect email" appear

Scenario: Register failed with incorrect format email: empty address
Given User navigate to register page
When User type username "UserName"
And User click email text box and click outside of the box
Then Message "You need an email to register" appear

Scenario: Register failed with incorrect format email: empty head
Given User navigate to register page
When User type username "UserName"
And User type email "@gmail.com" and click outside of the box
Then Message "Incorrect email" appear


