import { useState } from "react";

const timeBlocksData = [
    {
        userID: 0,
        username: "TestUser1",
        date: "2025-01-20",
        actions: ["", "ss", "s", "s", "s", "s", "w", "w", "w", "w", "w", "t", "s", "s", "s", "s", "s", "s", "w", "w", "w", "w", "w", "t", "s", "s", "s", "s", "s", "s", "w", "w", "w", "w", "w", "t"]
    },
    {
        userID: 0,
        username: "TestUser1",
        date: "2025-01-21",
        actions: ["s", "s", "s", "s", "s", "s", "w", "w", "w", "w", "w", "t", "s", "s", "s", "s", "s", "s", "w", "w", "w", "w", "w", "t", "s", "s", "s", "s", "s", "s", "w", "w", "w", "w", "w", "t"]
    },
    {
        userID: 0,
        username: "TestUser1",
        date: "2025-01-22",
        actions: ["t", "t", "t", "t", "w", "w", "l", "l", "w", "w", "w", "t", "s", "s", "s", "s", "s", "s", "w", "w", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "w", "w", "w", "w", "w", "t"]
    },
    {
        userID: 0,
        username: "TestUser1",
        date: "2025-01-23",
        actions: ["t", "t", "t", "t", "w", "w", "w", "w", "w", "w", "w", "t", "s", "s", "s", "s", "s", "s", "w", "w", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "w", "w", "w", "w", "w", "t"]
    },
    {
        userID: 0,
        username: "TestUser1",
        date: "2025-01-24",
        actions: ["t", "t", "t", "t", "w", "w", "w", "w", "w", "w", "w", "t", "s", "s", "s", "s", "s", "s", "w", "w", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "w", "w", "w", "w", "w", "t"]
    },
    {
        userID: 0,
        username: "TestUser1",
        date: "2025-01-25",
        actions: ["t", "t", "t", "t", "w", "w", "w", "w", "w", "w", "w", "t", "s", "s", "s", "s", "s", "s", "w", "w", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "w", "w", "w", "w", "w", "t"]
    },
    {
        userID: 0,
        username: "TestUser1",
        date: "2025-01-26",
        actions: ["t", "t", "t", "t", "w", "w", "w", "w", "w", "w", "w", "t", "s", "s", "s", "s", "s", "s", "w", "w", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "w", "w", "w", "w", "w", "t"]
    }
]
const legendColorDict = {
    "l":{"color": "green", "activity": "Leisure", "code": "l"},
    "w":{"color": "blue", "activity": "Work", "code": "w"},
    "t":{"color": "red", "activity": "Transportation", "code": "t"},
    "s":{"color": "black", "activity": "Sleep", "code": "s"}
}
const weekday = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const defaultColor = "gray";

function LifeTrackerWeekly() {

    return(
        <div className="lifeTrackerWeekly">
            <h2>Life</h2>
            <a href="https://youtube.ca" target="_blank">edit</a>
            <LifeTrackerWeeklyContent/>
        </div>
    );
}

function LifeTrackerWeeklyContent() {

    const [data, setData] = useState(timeBlocksData);

    return(
        <div className="lifeTrackerWeeklyContent">
            <div className="weekOf">1/20/2025</div>
            <div className="timeTick">00:00</div>
            <div className="timeTick">04:00</div>
            <div className="timeTick">08:00</div>
            <div className="timeTick">12:00</div>
            <div className="timeTick">16:00</div>
            <div className="timeTick">20:00</div>

            {data.map((timeBlock, i)=>{
                return(
                    <TimeBlock date={timeBlock.date} actions={timeBlock.actions} key={"lifeTrackerWeekly"+i}/>
                );
            })}

        </div>
    );
}



function TimeBlock(props) {
    return(
        <div className="timeBlock">
            <div className="day">{weekday[new Date(props.date).getDay()]}</div>
            {props.actions.map((action, i) => {

                try {
                    return(
                        <div className="action" style={{backgroundColor: legendColorDict[action].color}} key={"timeBlock" + i}></div>
                    )
                } catch {
                    return(
                        <div className="action" style={{backgroundColor: defaultColor}} key={"timeBlock" + i}></div>
                    )
                }

            })}
        </div>
    );
}

export default LifeTrackerWeekly;