import React, {useState, useEffect} from "react";
let timeIntervalId;
export default function Timer({gameOver, sendTime}){
    let [time, setTime] = useState(0);
    let [sTime, SetSTime] = useState(0);

    useEffect(()=>{
        if (time > 0 && gameOver){
            SetSTime(time);
            setTime(0);
        }
    }, [gameOver, time]);

    useEffect(()=>{
        const incrementTime = () =>{
            let newTime = time + 1;
            setTime(newTime);
        }
        timeIntervalId = setTimeout(()=>{
            incrementTime();
        }, 1000);
        if (gameOver){
            clearInterval(timeIntervalId);
        }
    }, [time, setTime, gameOver, sendTime]);

    return(
        <div style={{ color: "white", fontSize: 20 }}>
            <span role= "img" aria-label="clock" style={{paddingRight: 15}}>
            🕒
            </span>
            {gameOver ? sTime : time}
        </div>
    )
}