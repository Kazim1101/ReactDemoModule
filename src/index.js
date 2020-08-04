import React, { Component } from 'react'
import ReactDOM from 'react-dom'

let bookData = {

  name : "ABC",
  author : "XYZ"

}

const Books = (props)=>{

  return(
    <section>
  <h1>{props.bookData.name}</h1>
  <h1>{props.bookData.author}</h1>
  </section>
  )

}

class Library extends Component{
  render(props){
  return(
    <Books bookData={props.bookData} />
  )
  }
}

ReactDOM.render(
          <Library bookData= {bookData}
          />,document.getElementById('root'))