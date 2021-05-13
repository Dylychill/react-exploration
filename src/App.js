import React, {useState, useEffect} from 'react'; 
import './App.css';
import Counter from './counter.js';
import CounterStart from './counter_broke.js'
import HideButton from './hide.js';

const counterz = [
  {label: "Add one", n:1, initial:5},
  {label: "Minus Five", n:-5},
  {label: "Add 100", n:100},
  {label: "Minus 300", n:-300}
]

function App() {
    return <div className="App">
      <HideButton></HideButton>
      
      <CounterStart />
      {/* <Counter label="Add one" n={1}/>
      <Counter label="Add Five" n={5}/>
      <Counter label="Plus Two" n={2}/> */}

      {counterz.map((c,i) => <Counter key={i} {...c}/>)}
      {/* Above map is looping through the counterz array const */}


    </div>
}

export default App;


//   {label: "Plus Two", n:2},