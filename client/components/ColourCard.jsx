import React from 'react'
import { getColours } from '../api'
import { dispatch } from '../store'
import { showError } from '../actions/error'
export default class ColourCard extends React.Component {
  state = {
    colours: [{}, {}, {}, {}, {}]
  }

  componentDidMount () {
    getColours()
      .then((colours) => {
        this.setState({
          colours
        })
        return null
      })
      .catch((error) => {
        dispatch(showError(error.message))
      })
  }

  render () {
    return (
      <>
        <div className='colordCard'>
          <h2 className='cardQuiz'>What colours does the bird have?</h2>
          <p className='cardText'>Please select the main colours to find out what your bird might be?</p>
          <div className="colorPick">
            <label className="control controlColour--radio">{this.state.colours[0].name}
              <input type="radio" name="radioColour" value={this.state.colours[0].name} />
              <div className="control__indicator"></div>
            </label>
            <label className="control control--radio">{this.state.colours[1].name}
              <input type="radio" name="radioColour" value={this.state.colours[1].name} />
              <div className="control__indicator"></div>
            </label>
            <label className="control control--radio">{this.state.colours[2].name}
              <input type="radio" name="radioColour" value={this.state.colours[2].name} />
              <div className="control__indicator"></div>
            </label>
            <label className="control control--radio">{this.state.colours[3].name}
              <input type="radio" name="radioColour" value={this.state.colours[3].name} />
              <div className="control__indicator"></div>
            </label>
            <label className="control control--radio">{this.state.colours[4].name}
              <input type="radio" name="radioColour" value={this.state.colours[4].name} />
              <div className="control__indicator"></div>
            </label>
          </div>
        </div>
      </>
    )
  }
}
