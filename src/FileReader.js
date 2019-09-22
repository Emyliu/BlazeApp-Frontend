import React from 'react'
import Files from 'react-files'
import Button from '@material-ui/core/Button';
import './css/FileReader.css'

function getBase64(file) {
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function() {
        console.log(reader.result);
        sessionStorage.setItem('file', reader.result);
    };
    reader.onerror = function(e) {
        console.log(e);
    };
}
 
export class FilesDemo extends React.Component {
  constructor(props) {
      super(props);
      this.onFilesChange = this.onFilesChange.bind(this);
      this.onFilesError = this.onFilesError.bind(this);
      this.state = {
        submitted: false
      }
  }
  onFilesChange(files) {
    this.setState({submitted: true});
    console.log(files[0]);
    getBase64(files[0]);
  }
 
  onFilesError(error, file) {
    console.log('error code ' + error.code + ': ' + error.message)
  }
 
  render() {
    let dropzoneStyle = {
      height: "300px",
      "border-style": "solid",
      "border-radius": "20px",
      width: "70%",
      display: "inline-block",
      "margin-bottom": "20px"
    }
    return (
      <div className="files">
      <div className="files-container">
      <h1 className="title">🔥 Blaze GPX Analyzer 🔥</h1>
      <h2 className="subtitle">Currently supports .gpx files exported from Strava, Garmin Connect, and Runkeeper</h2>
      <h2 className="subtitle">If something goes wrong, feel free to send an angry email to emyliu@uwaterloo.ca</h2>
        <Files
          style={dropzoneStyle}
          className='files-dropzone'
          onChange={this.onFilesChange}
          onError={this.onFilesError}
          maxFiles={1}
          maxFileSize={10000000}
          minFileSize={0}
          clickable
        >
        </Files>
      {
        this.state.submitted ? <Button variant="outlined" color="primary" onClick={this.props.handleSubmit}>Submit File</Button> : <h3>Drop .gpx file above, or click in the box to browse files</h3>
      }
        
        </div>
      </div>
    )
  }
}