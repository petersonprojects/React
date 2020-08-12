
import React, { Component } from 'react'

class ChildList extends Component {

  render() {
    return (
      <>
        I am a Childlist.

        {this.props.name}
      </>
    )
  }
}

export default ChildList
