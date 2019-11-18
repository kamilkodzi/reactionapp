import React, {useReducer} from 'react';
import reducer,{initialState} from '../state/reducer';
import PublishMessage from './PublishMessage';
import MessageBoard from './MessageBoard';

function App() {
  const [state,dispatch]=useReducer(reducer,initialState)

  console.log('state',state);
  return (
    <div>
      <h2>Reaction</h2>
      <hr/>
      <PublishMessage dispatch={dispatch}/>
      <hr/>
      <MessageBoard messages={state.messages}/>
    </div>
  );
}

export default App;
