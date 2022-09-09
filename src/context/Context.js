import React, { useState, useContext } from 'react';

const CompletedContext = React.createContext();
const CompletedUpdateContext = React.createContext();

export function useComplete() {
  return useContext(CompletedContext);
}
export function useCompleteUpdate() {
  return useContext(CompletedUpdateContext);
}

export function CompletedProvider({ children }) {
  const [completed, setCompleted] = useState(false);

  function toggleCompletedUpdate() {
    setCompleted((prev) => !prev);
  }

  return (
    <CompletedContext.Provider value={completed}>
      <CompletedUpdateContext.Provider value={toggleCompletedUpdate}>
        {children}
      </CompletedUpdateContext.Provider>
    </CompletedContext.Provider>
  );
}
