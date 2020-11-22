import React from 'react';
import connect from 'react-redux';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
class AddBlog extends React.Component{
    state = {
        title:"",
        content:""

    }
    onChange = e  => this.setState({[e.target.name]:e.target.value})
    handleChange = value => {
        this.setState({ content: value });
      };
      
    onSubmit = e => {
        e.preventDefault()
        const {title,content,editorState} = this.state
        console.log(title,content,editorState)
    }
    render(){
        const {title,content} = this.state
        return(
            <section>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title</label>
                        <input type="text" name="title" value={title} className="form-control" onChange={this.onChange} />
                    </div>
                    <div>
                        <label>Content</label>
                        <SimpleMDE name="content" onChange={this.handleChange} />;
                        {/* <input type="text" name="content" value={content} className="form-control" onChange={this.onChange} /> */}
                    </div>
                    <input type="submit" value="Add Post" className="primary-btn" />
                </form>
            </section>
        )
    }
}
export default AddBlog;
// export default connect()(AddBlog);
