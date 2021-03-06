import React, {Component} from 'react'
import './NewComment.css'

class NewComment extends Component {

    state = {
      NewComment: ''
    }

    handleChange = event =>{
      this.setState({
        newComment: event.target.value
      })
    }

    sendComment = () => {
      this.props.sendComment(this.state.newComment)
      this.setState({
        newComment: ''
      })
    }

    render(){
        return(
          <div className="form-group _NewComment">
            <textarea className="form-control  _NewComment_Component" rows="3" value={this.state.newComment} onChange={this.handleChange}></textarea>
            <button className="btn btn-primary btn-md _NewComment_Component" onClick={this.sendComment}>Enviar</button>
          </div>
        )
    }
}

export default NewComment