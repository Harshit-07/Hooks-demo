import './App.css';
// import react from 'react';
// import HookCounter from './components/HookCounter';
// import HookCounter2 from './components/HookCounter2';
// import HookCounter3 from './components/HookCounter3';
// import HookCounter4 from './components/HookCounter4';
// import HookCounter5 from './components/HookCounter5';
// import HookCounter1 from './components/useEffect/HookCounter1';
// import HookMouse from './components/useEffect/HookMouse';
// import MouseContainer from './components/useEffect/MouseContainer';
// import IntervalHookCounter from './components/useEffect/IntervalHookCounte';
// import HookFetchData from './components/useEffect/HookFetchData';
import CompoA from './components/useContext/CompoA';
import React from 'react';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <>
      {/* <HookCounter /> */}
      {/* <HookCounter2 /> */}
      {/* <HookCounter3 /> */}
      {/* <HookCounter4 /> */}
      {/* <HookCounter5 /> */}
      {/* <HookCounter1 /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalHookCounter /> */}
      {/* <HookFetchData /> */}
      {/* Context Hook */}
      <UserContext.Provider value={'Harshit'}>
        <ChannelContext.Provider value={'Gupta'}>
          <CompoA />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default App;