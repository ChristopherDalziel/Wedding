import React, { useState } from 'react'
import { connect } from 'react-redux'
import { startLogin } from "./actions/auth"

const App = () => {
  const [input, setInput] = useState("")

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    startLogin("christopher_dalziel@hotmail.com", input)
  }

  return <main>
    <form onSubmit={onSubmit}>
      <input type="text" name="password" placeholder="password" onChange={handleInputChange}></input>
    </form>
  </main>
}

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
})

export default connect(mapDispatchToProps)(App)
