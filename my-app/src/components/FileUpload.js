import React, {Component} from 'react';
import axios from 'axios';
import './FileUpload.css';


class FileUpload extends Component {
  componentWillMount(){
    this.setState({
      file: undefined
    });
  }
  handleSubmit(event){
    event.preventDefault();
    let formData = new FormData();
    formData.append('file', this.state.file);

    axios.post('/api/__test_upload', formData)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
  }
  handleChange(event){
    let file = event.target.files[0];
    this.setState({file: file});
  }
  render(){
    return(
      <div className="upload">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <p>Image</p>
          <input type="file" onChange={this.handleChange.bind(this)}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default FileUpload;
