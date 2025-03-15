import { useEffect, useState } from "react";

const TrafficLight = () => {
    const [color, setColor] = useState("red");
    useEffect(()=>{
        console.log(color)
    },[color])

    return (
        <div className="body">
            <div className="lightPole"></div>
            <div className="trafficLight">
                <div className="red" onClick={()=>{setColor("red")}}>REDD</div>
                <div className="yellow" onClick={()=>{setColor("yellow")}}>YELOOWW</div>
                <div className="green" onClick={()=>{setColor("green")}}>GREEEN</div>


            </div>
        </div>
    )


}
export default TrafficLight