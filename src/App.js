import React, { useState } from 'react'

const App = () => {
  const [input, setInput] = useState("")

  const handleInputChange = (e) => {
    console.log(e.target.value)
    setInput(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(input)
  }

  return <main>
    <form onSubmit={onSubmit}>
      <input type="text" name="password" placeholder="password" onChange={handleInputChange}></input>
    </form>
  </main>
}

export default App;
