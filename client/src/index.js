import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from './App'
import Contact from './Contact'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'


ReactDOM.render(<Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/Contact" component={Contact} />
    </div>
</Router>, document.getElementById('root'))
