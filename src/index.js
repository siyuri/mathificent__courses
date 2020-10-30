import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './containers/App'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(< React.StrictMode >
  <App />
</React.StrictMode>,
  document.getElementById('root')
)
// function LoginBox(props) {
//   return (
//     <div>
//       <label>Log In <input type="text" id="username"
//       placeholder={props.placeholderText} />
//       </label>
//     </div>
//   );
// }
// ReactDOM.render(<LoginBox placeholderText="Enter Your Email" />, document.getElementById("login"));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()