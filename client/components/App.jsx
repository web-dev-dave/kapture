import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { setUser } from '../actions/user'
import { isAuthenticated, getDecodedToken } from '../auth'

// Import components
import LandingCard from './LandingCard'
import Home from './Home'
// import WaitingIcon from './WaitingIcon'
import WaitingIndicator from './WaitingIndicator'
import ErrorMessage from './Error'
import QuizCard from './QuizCard'
import QuizResult from './QuizResult'
import BirdSightings from './BirdSightings'
import Profile from './Profile'

class App extends React.Component {
  componentDidMount () {
    if (isAuthenticated()) {
      const { username, isAdmin } = getDecodedToken()
      this.props.dispatch(setUser({ username, isAdmin }))
    }
  }

  render () {
    return (
      <>
        <div className='app'>
          <ErrorMessage />
          <WaitingIndicator />
          <header>
            <img className="logo" src="/images/build/kapture.png" alt='logo' width='25%'></img>
          </header>
          <Route exact path="/">
            <Redirect to="/welcome"/>
          </Route>
          <Route path="/welcome" component={LandingCard}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/quiz" component={QuizCard}/>
          <Route exact path="/quiz/result" component={QuizResult}/>
          <Route exact path='/profile/:username' component={Profile} />
          <Route exact path="/sightings" component={BirdSightings}/>
          <Route exact path="/profile" component={Profile} />
        </div>
      </>
    )
  }
}

export default connect()(App)
