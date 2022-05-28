import React from "react";
import Header from "./component/Header.js"
import Main from "./component/Main.js"
import Benefit from "./component/Benefit.js";
import Curation from "./component/Curation.js"
import Guide from "./component/Guide.js";
import './style.css'
function App() {
  return (
    <>
      <Header />
      <Main />
      <Benefit />
      <Curation />
      <Guide />
    </>
  )
}

export default App;
