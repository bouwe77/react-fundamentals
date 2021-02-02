// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // =====>>> Bonus Exercise #3 Controlled Form
  const [username, setUserName] = React.useState('')

  function handleChange(event) {
    setUserName(event.currentTarget.value.toLowerCase())
  }

  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(username)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          type="text"
          id="usernameInput"
          value={username}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )

  //
  // =================================================================
  //
  // =====>>> Bonus Exercise #2: useState voor error messages
  //
  // const [error, setError] = React.useState(null)
  // function handleChange(event) {
  //   const value = event.currentTarget.value
  //   setError(
  //     value === value.toLowerCase() ? null : 'Username must be lower case',
  //   )
  // }
  // const usernameRef = React.useRef()
  // function handleSubmit(event) {
  //   event.preventDefault()
  //   const username = usernameRef.current.value + '!!!'
  //   onSubmitUsername(username)
  // }
  // return (
  //   <form onSubmit={handleSubmit}>
  //     <div>
  //       {error && <span>{error}</span>}
  //       <label htmlFor="usernameInput">Username:</label>
  //       <input
  //         type="text"
  //         id="usernameInput"
  //         ref={usernameRef}
  //         onChange={handleChange}
  //       />
  //     </div>
  //     <button type="submit" disabled={!!error}>
  //       Submit
  //     </button>
  //   </form>
  //)
  //
  // ====================================================
  //
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input
  // 🐨 add the onSubmit handler to the <form> below
  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  //
  // =====>>> Bonus Exercise #2: ref
  //
  // const usernameRef = React.useRef()
  // function handleSubmit(event) {
  //   event.preventDefault()
  //   const username = usernameRef.current.value + '!!!'
  //   onSubmitUsername(username)
  // }
  // return (
  //   <form onSubmit={handleSubmit}>
  //     <div>
  //       <label htmlFor="usernameInput">Username:</label>
  //       <input type="text" id="usernameInput" ref={usernameRef} />
  //     </div>
  //     <button type="submit">Submit</button>
  //   </form>
  // )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
