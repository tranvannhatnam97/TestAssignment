Feature: Upload File
Scenario: Upload file successfully
Given User go to homepage
When User click File Upload
Then User navigate to UploadFile Page
When User choose uploaded file with name "<file_name>"
And User click upload button
Then File with name "<file_name>" is uploaded
Examples: 
|file_name|
|sample.txt|
