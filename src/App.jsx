import { useState } from "react";
import { usePrivy } from "@privy-io/react-auth";
import running from "/running.gif";
import bg3 from "/bg3.webp";
import styled from "styled-components";
import Modal from "./components/Modal";
import Shake from "shake.js";
import "./App.css";

const Main = styled.main`
  background: url(${bg3});
  background-size: cover;
  padding: 1.5em;
  min-height: 100vh;
  box-sizing: border-box;
`;

const Img = styled.img`
  filter: drop-shadow(0px 7px 5px #22222255);
`;

function App() {
  const { ready, authenticated, login, user } = usePrivy();
  // Disable login when Privy is not ready or the user is already authenticated
  const disableLogin = !ready || (ready && authenticated);
  const [questModal, setQuestModal] = useState(false);

  console.log(user);
  const myShakeEvent = new Shake({
    threshold: 15, // optional shake strength threshold
    timeout: 1000, // optional, determines the frequency of event generation
  });
  myShakeEvent.start();

  function deviceMotionRequest() {
    // feature detect
    if (typeof DeviceMotionEvent.requestPermission === "function") {
      DeviceMotionEvent.requestPermission()
        .then((permissionState) => {
          if (permissionState === "granted") {
            window.addEventListener("devicemotion", () => {});
            window.addEventListener(
              "shake",
              () => {
                console.log("shaking");
              },
              false
            );
          }
        })
        .catch(console.error);
    } else {
      myShakeEvent.start();
      window.addEventListener("shake", () => console.log("shake"), false);
    }
  }

  return (
    <Main>
      {questModal && (
        <Modal onExit={() => setQuestModal(false)}>
          <h1>Quests</h1>
        </Modal>
      )}
      <button disabled={disableLogin} onClick={login}>
        Log in
      </button>
      <button id="request" onClick={deviceMotionRequest}>
        Shake Permission
      </button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="card">
        <Img
          src={running}
          className="char"
          width="200"
          alt="Character sprite"
        />
      </div>
      <button onClick={() => setQuestModal(true)}>Quest</button>
    </Main>
  );
}

export default App;
