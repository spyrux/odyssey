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

const Img = styled.img`
  filter: drop-shadow(0px 7px 5px #22222255);
`

function App() {
  const {ready, authenticated, login, user} = usePrivy();
  // Disable login when Privy is not ready or the user is already authenticated
  const disableLogin = !ready || (ready && authenticated);

  console.log(user)

  return (
    <Main>
    <button disabled={disableLogin} onClick={login}>
      Log in
      </button>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="card">
        <Img src={running} className="char" width="200" alt="Character sprite" /> 
      </div>
      <button onClick={() => {}}>
        Quest
      </button>
    </Main>
  )
}

export default App
