import React from 'react';
import "./GpsDetailedpage.css";
import { PieChart, Pie, Tooltip} from 'recharts';



function GpsDetailedpage(props) {

    const timeSpent = [
        {id: 1,name:"L1",value:80,},
        {id: 2,name:"L2", value:20}
    ];
    const timestamps = [
        {timeStamp:"31-08-2022 10:05", name:"L1"},
        {timeStamp:"31-08-2022 10:10", name:"L1"},
        {timeStamp:"31-08-2022 10:15", name:"L1"},
        {timeStamp:"31-08-2022 10:20", name:"L1"},
        {timeStamp:"31-08-2022 10:25", name:"L2"}

    ];
  return (
    <div>
        <div className='container'>
        <h1 className="detailedPageHeading">D-1567</h1>
        <h2>Aircraft</h2>
        <div className="row p-5">
            <div className="tableDetail m-3 col-3">
            <table>
                <tr>
                <th><h4>Timestamp</h4></th>
                <th><h4>Location</h4></th>
                </tr>
                {timestamps.map((timestamps) => {
                return (
                    <tr key={timestamps}>
                    <td>{timestamps.timeStamp}</td>
                    <td>{timestamps.name}</td>
                    </tr>
                )
                })}
                </table>
            </div>
            <div className="piedetail col-7 d-flex flex-row">
            <div className="piechart">
                {/* piechart */}
            <PieChart width={350} height={300}>
            <Pie
                dataKey="value"
                isAnimationActive={false}
                data={timeSpent}
                cx="60%"
                cy="40%"
                outerRadius={80}
                fill="#f70c47"
                label
                />
                <Tooltip />
                </PieChart>
              </div>
            <div className="detailOfL1L2">
            <h1 className="perheading">% Time spent on each other</h1>
            <ul className='lists'>
                {timeSpent.map((timeSpent) =>{
                    return (
                    <li key={timeSpent.id}>
                        {timeSpent.name}:{timeSpent.value}
                    </li>);
                })}
            </ul>
            </div>
            </div>
        </div>

    </div>
    </div>
  )
}

export default GpsDetailedpage
