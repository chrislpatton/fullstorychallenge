# FullStory and Github Integration Challenge.
The objective of this challenge was to use FullStory and github api's to create a useful or interesting application.

This application uses the data export json file from the FullStory dashboard. When uploaded the program will search to see if the import has any errors reported. If there are errors it creates an issue in github for the project.

A live version of this application can be found here: https://sleepy-ridge-91466.herokuapp.com/upload

The issues that this application writes to is at the folowing url. https://github.com/chrislpatton/DemoStore4FS/issues

To install clone the repo.

Run npm install.

In server.js file replace the token with a token, please contact me for token

Run node server.js

Open local host and upload a json file.

Specifically use the DataExport (1).json found in the uploads folder of this repo.