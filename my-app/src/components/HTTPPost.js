import React, { Component } from 'react'
import axios from 'axios'

export class HTTPPost extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         responseApi: null
      }
    }
    postToApi = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts',
            {
                title: 'Hello World!',
                body: 'it works!',
                userId: 123,
            }
        ).then(
            response => this.setState({
                responseApi: response.data
            })
            )
        
    } 
  render() {
    const {responseApi} = this.state;
    return (
      <div>
        <button onClick={this.postToApi}>
            Create Post
        </button>
        
        {
          responseApi ? (
            <div>
                <h1>{responseApi.title}</h1>
                <p>post id: {responseApi.id}</p>
                <p>{responseApi.body}</p>
                <p>user id: {responseApi.userId}</p>
            </div>
          ) : (
            <p>nothing posted yet, pleas click the button above</p>
          )
        }
      </div>
    )
  }
}

export default HTTPPost