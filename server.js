const express = require('express');
const fileUpload = require('express-fileupload');
const createIssue = require('github-create-issue');
const app = express();

app.use('/form', express.static(__dirname + '/public/index.html'));

// default options
app.use(fileUpload());

function clbk( error, issue, info ) {
    // Check for rate limit information...
    if ( info ) {
        console.error( 'Limit: %d', info.limit );
        console.error( 'Remaining: %d', info.remaining );
        console.error( 'Reset: %s', (new Date( info.reset*1000 )).toISOString() );
    }
    if ( error ) {
        throw new Error( error.message );
    }
    console.log( JSON.stringify( issue ) );
    // returns <issue_data>
}

app.post('/upload', function(req, res) {
  let sampleFile;
  let uploadPath;

  if (!req.files) {
    res.status(400).send('No files were uploaded.');
    return;
  }

  var opts = {
    'token': 'd5afc8f8d07bd7add54b9a11ea0157acf7259c88',
    'useragent': 'FullStory',
    'body': ''
};
  console.log('req.files >>>', req.files); // eslint-disable-line
  //console.log(JSON.parse(req.files.sampleFile.data))
  sampleFile = req.files.sampleFile;
  theData = JSON.parse(req.files.sampleFile.data);
  //console.log(theData.length);
  for (let i = 0; i < theData.length; i++){
      let pageErrors = theData[i].PageNumErrors;
      if (pageErrors > 0){
          var releventData =
              "user: " + theData[i].UserDisplayName + ", " +
              "page: " + theData[i].PageUrl + ", " +
              "time: " + theData[i].EventStart + ", " +
              "errors: " + theData[i].PageNumErrors + ", " +
              "event: " +  theData[i].EventType + ", " +
              "target: " + theData[i].EventTargetText + ", " +
              "pageAgent: " + theData[i].PageAgent + ", " +
              "Browser: " + theData[i].PageBrowser + ", " +
              "ScreenSize: " + theData[i].PageDevice + ", " +
              "Operating System: " + theData[i].PageOperatingSystem;
          

          opts.body = releventData;
          let title = "Error on " + theData[i].EventType + " event found on " +  theData[i].PageUrl + ".";
        
          createIssue( '/chrislpatton/DemoStore4FS', title, opts, clbk );
      }
  }




  uploadPath = __dirname + '/uploads/' + sampleFile.name;

  sampleFile.mv(uploadPath, function(err) {
    if (err) {
      return res.status(500).send(err);
    }

    res.send('File uploaded to ' + uploadPath);
  });
});

app.listen(8000, function() {
  console.log('Express server listening on port 8000'); // eslint-disable-line
});