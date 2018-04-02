import React from "react";

export class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
                    file: '',
                    imagePreviewUrl: ''
                  };
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleImageChange = this._handleImageChange.bind(this);
  }

  _handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    //this.props.onChange(this.state.file);
    console.log('handle uploading-', this.state.file);

  }

  _handleImageChange(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
      this.props.onChange(this.state.file);
    }

    reader.readAsDataURL(file)
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (
      <div className="previewComponent">
        <form onSubmit={(e)=>this._handleSubmit(e)}>
          <input className="fileInput"
            type="file"
            onChange={(e)=>this._handleImageChange(e)} />
          <button className="submitButton"
            type="submit"
            onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
        </form>
        <div className="imgPreview">
          {$imagePreview}
        </div>
      </div>
    )
  }
}
