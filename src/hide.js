import React, {useState, useEffect} from 'react';

function HideButton(props) {
    const [show, setShow] = useState(false)

    return (<div style={{marginTop:25}}>
        <button onClick={()=> setShow(!show)}>Click to toggle text</button>
        {show && <p>Surprise!</p>}
    </div>
    );
}

export default HideButton;