import React, {useState, useEffect} from 'react';

function CounterStart(props) {
    let count = 0; // will always be reinitialize
    count = count + 1;
    console.log(count);
    // count never gets bigger than 1

    return (<div style={{marginTop:25}}>
        <button onClick={()=> count = count + 1}>
            Broken Button
        </button>
        {/* When the above button is clicked, perform a task */}
        <div>
            {count}
        </div>
        {}
    </div>
    );
}

export default CounterStart;