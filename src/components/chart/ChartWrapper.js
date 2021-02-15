import React from 'react'

export default class ChartWrapper extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      width: 400,
      height: 400,
      id: props.id,
    }
  }

  render() {
    return (
      <canvas width={this.state.width} height={this.state.height}></canvas>
    )
  }
}