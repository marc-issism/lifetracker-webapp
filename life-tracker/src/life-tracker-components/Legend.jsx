import { useState } from "react";

const legendArrayData = [
    {
    "code": "l",
    "action": "Leisure",
    "color": "green"
    },
    {
    "code": "w",
    "action": "Work",
    "color": "blue"
    },
    {
    "code": "t",
    "action": "Transportation",
    "color": "red"
    },
    {
    "code": "s",
    "action": "Sleep",
    "color": "black"
    }
]

function Legend() {

    
    return(
        <div className="legend">
            <h2>Legend</h2>

            <a href="https://youtube.ca" target="_blank">edit</a>

            <LegendContent/>
        </div>
    )
}

function LegendContent() {

    const [legendArray, setLegendArray] = useState(legendArrayData);

    return(
        <div className="legendContent">
            <div className="legendColorCircleColumn">
                {legendArray.map((legend, i) => {
                    return(
                        <div className="legendColorCircle" style={{backgroundColor:legend.color}} key={"legendColor"+i}/>
                    );
                })}
            </div>
            <div className="legendNameColumn">
                {legendArray.map((legend, i) => {
                    return(
                        <div className="legendName" key={"legendName" + i}>{legend.action}</div>
                    );
                })}
            </div>
        </div>
    );
}

export default Legend;