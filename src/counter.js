import React, {useState, useEffect} from 'react';

function Counter(props) {
    const {label, n, initial} = props;
    const [count, setCount] = useState(0)

    // let count = 0; // will always be reinitialize
    // count = count + 1;
    // console.log(count);
    // count never gets bigger than 1

    return (<div style={{marginTop:25}}>
        <button onClick={()=> setCount(count+n)}>
            {label}
        </button>
        <div>
            {count}
        </div>

    </div>
    );
}

export default Counter;