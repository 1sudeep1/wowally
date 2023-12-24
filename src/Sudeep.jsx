import React, { useEffect, useState } from 'react'

function Sudeep() {
    //     const [num, setNum] = useState(1)
    //     var abc=(a)=>(
    //         setNum(num+1)
    //     )
    //     useEffect(()=>{
    //         document.title="Sudeep"
    //     })
    //     return (
    //         <>
    //             <h1>{num}</h1>
    //             <button onClick={abc}>++</button>
    //         </>

    //     )
    // }


const[input1, setInput]=useState([])
var aa=(a)=>{
    setInput(a.target.value)
}


    return (
            <>
                <h1>{input1}</h1>
                <input type="text" onChange={aa} />
            </>
    )
}

export default Sudeep
