import React,{useState} from 'react'

function Counter(){

    const [num,setNum]=useState(1)
    function add(){
        setNum((curNum) => {
            return curNum+1;
        });
    }
    return <button onClick={add}>{num}</button>
}

export default Counter