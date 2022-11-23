import React from "react";
import { Main } from "./components";
import { Wrapper } from "./utils";
import GlobalState from "./global/GlobalState";
function App() {
  return (
    <GlobalState>
      <Wrapper type="main">
        <Main />
      </Wrapper>
    </GlobalState>
  );
}

export default App;
