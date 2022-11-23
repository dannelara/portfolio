import React, { useState, useEffect } from "react";

// interface State {
//   full_screen: Boolean;
// }

export const GlobalStateContext = React.createContext<any>(null);

const GlobalState = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [full_screen, setFull_screen] = useState(false);

  const state = {
    full_screen,
    setFull_screen,
  };

  return (
    <GlobalStateContext.Provider value={state}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
