# FullStory and Github Integration Challenge.
The objective of this challenge was to use FullStory and github api's to create a useful or interesting application.

This application uses the data export json file from the FullStory dashboard. When uploaded the program will search to see if the import has any errors reported. If there are errors it creates an issue in github for the project.
Originally I wanted to hit the Post Api of Fullstory, by first hitting the api and grabbing a list of data export id's. It would then grab the last data export id and grab that json file. I ran into issues however with the json file being .gz I could not grab the data as it was returning errors, however it would pull when there was no new data, it would pull as an empty object. In order to build something somewhat useful, I decided to have the application have an interface that allowed the user to upload the json file provided by FullStory's admin panel and then iterate through that data to create github issues if errors are found.

A live version of this application can be found here: https://sleepy-ridge-91466.herokuapp.com/form

The issues that this application writes to is at the folowing url. https://github.com/chrislpatton/DemoStore4FS/issues

To install clone the repo.

Run npm install.

In server.js file replace the token with a token, please contact me for token

Run node server.js

Open local host and upload a json file.

Specifically use the DataExport (1).json found in the uploads folder of this repo.

