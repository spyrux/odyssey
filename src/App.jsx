import { useState } from 'react'
import {usePrivy} from '@privy-io/react-auth'
import running from '/running.gif'
import bg3 from '/bg3.webp'
import styled from 'styled-components'
import './App.css'

const Main = styled.main`
  background:url(${bg3});
  background-size: cover;
  padding: 1.5em;
  min-height: 100vh;
  box-sizing: border-box;
`

function App() {
  const {ready, authenticated, login, user} = usePrivy();
  // Disable login when Privy is not ready or the user is already authenticated
  const disableLogin = !ready || (ready && authenticated);

  console.log(user)

  return (
    <Main>
      <br/>
      <br/>
      <br/>
      <br/>
      <h1>Odyssey</h1>
      <div className="card">
        <button disabled={disableLogin} onClick={login}>
          Log in
        </button>
        <button onClick={() => {}}>
          Quest
        </button>
      </div>
      <img src={running} className="char" width="400" alt="Character sprite" /> 
    </Main>
  )
}

export default App
