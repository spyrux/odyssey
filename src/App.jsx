import { useState } from 'react'
import {usePrivy} from '@privy-io/react-auth';
import running from '/running.gif'
import './App.css'

function App() {
  const {ready, authenticated, login, user} = usePrivy();
  // Disable login when Privy is not ready or the user is already authenticated
  const disableLogin = !ready || (ready && authenticated);

  console.log(user)

  return (
    <main>
      <div>
        <img src={running} className="char" width="400" alt="Character sprite" />
      </div>
      <h1>Odyssey</h1>
      <div className="card">
        <button disabled={disableLogin} onClick={login}>
          Log in
        </button>
        <button onClick={() => {}}>
          Quest
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </main>
  )
}

export default App
