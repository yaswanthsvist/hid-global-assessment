import React from 'react'
import { hot } from 'react-hot-loader'
import ReactDOM from 'react-dom'
import { Route, Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './middleware'
import SelectTeam from './pages/selectTeam/index'
import { createBrowserHistory } from 'history'

export const history = createBrowserHistory()

if (process.env.NODE_ENV !== 'production') {
  window.React = React
}

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div>
            <Route exact path="/" component={SelectTeam} />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default hot(module)(App)
