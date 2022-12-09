import React from 'react';
import "./GpsSummary.css";
import data from "../data.json";
import _ from 'lodash';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


// const pagesize = 10;
function GPSsumary() {

  // const pageCount = data ? Math.ceil(data.length/pagesize) : 0;
  // if (pageCount==1){
  //   return null;
  // }
  // const pages = _.range(1,pageCount);
  const[searching, setSearching] =useState("")
  const navigate = useNavigate();

  const navigateto = () =>{
    navigate("/gpsdetailed")
  }

  return (
    <div>
        <h1 className="heading">GPS Summary</h1>
        <input type="text" placeholder='Search' className='search' onChange={(e) => setSearching(e.target.value)}/>

        <div className="d-flex flex-row justify-content-end">
          <nav>
            <ul className="pagination">
              {/* {paginatedpage.map((page) =>{
                <li className="page-link">{page}</li>
              })} */}
              <li className='page-link'>1</li>
              <li className='page-link'>2</li>
              <li className='page-link'>3</li>
            </ul>
          </nav>
        </div>
        <div className="table text-center">
        <table>
        <tr>
          <th>Device Id</th>
          <th>Device Type</th>
          <th>Latest Timestamp</th>
          <th>Latest Location</th>
          <th></th>
        </tr>
        {data.filter((items) => {
          return (searching.toLowerCase() === "" ? data : items.deviceType.toLowerCase().includes(searching))
        })
        .map((data) => {
          return (
            <tr key={data.id}>
              <td>{data.deviceId}</td>
              <td>{data.deviceType}</td>
              <td>{data.timeStamp}</td>
              <td>{data.location}</td>
              <td><button onClick={navigateto}><i class="fa-sharp fa-solid fa-arrow-right"></i></button></td>
            </tr>
          )
        })}
      </table>
        </div>
    </div>
  )
}

export default GPSsumary