import './App.css';
import {Alert,Button, TextField} from '@mui/material';
import BasicModal from './ModalComponent';
import { useState } from 'react';



function App() {
  let [value, setValue] = useState('')
  return (
    <div className="App">
      <h1>Write your name:</h1>
      <TextField 
        id="outlined-basic"
        variant="outlined"
        onChange={(e) => setValue(e.target.value)}
        />
        <BasicModal text={value}/>
    </div>
  );
}

export default App;
