import { useEffect, useState } from "react";

const TrafficLight = () => {
    const [isRed, setIsRed] = useState(false);
    const [isGreen, setIsGreen] = useState(false)
    const [isYellow, setIsYellow] = useState(false)

    const handleClickRed = () => {
        setIsYellow(false)
        setIsRed(true)
        setIsGreen(false)
    }
    const handleClickYellow = () => {
        setIsYellow(true)
        setIsRed(false)
        setIsGreen(false)
    }
    const handleClickGreen = () => {
        setIsGreen(true)
        setIsRed(false)
        setIsYellow(false)
    }



    return (
        <div className="container-flex justify-content-center d-flex">
            <div className="lightPole"></div>
            <div className="trafficLight h-100 py-1 align-items-center d-flex flex-column bg-secondary col-1 text-white">
                <div className="row">
                    <button className={`btn ${isRed ? "btn-danger" : "btn-dark"} glow-red my-3 btn-danger rounded-circle w-75 h-75 border border-danger`} onClick={handleClickRed}></button>
                </div>
                <div className="row">
                    <button className={`btn ${isYellow ? "btn-warning" : "btn-dark"} glow-yellow my-3 btn-warning rounded-circle w-75 h-75 border border-warning`} onClick={handleClickYellow}></button>
                </div>
                <div className="row">
                    <button className={`btn ${isGreen ? "btn-success" : "btn-dark"} glow-green my-3 btn-success rounded-circle w-75 h-75 border border-success`} onClick={handleClickGreen}></button>
                </div>
            </div>


        </div>
    )


}
export default TrafficLight