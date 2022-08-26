import React from "react";
import Timer from "./Timer";

export default function TopBar({gameOver, setTime}){
    return(
        <div style={{
            background: "#75b3f0",
            padding: "10px 0",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center"
        }}>
        <span role="img" aria-label="flag" style={{paddingBottom: 10}}>Игрок1</span>
            <Timer gameOver={gameOver} sendTime={setTime} />
        </div>
    )
}