import React from 'react'
import './Navnar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuildingColumns } from '@fortawesome/free-solid-svg-icons'
import { faUser as faUserLight } from '@fortawesome/free-solid-svg-icons'; 
import { faListUl } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
function Navbar() {
  return (
    <div className="m">
      <div className="smaldiv"></div>
    <div className='mainConateiner'>
      <div className="subdiv">
     
      <div className="right_nav">
        
        <div className='right_inside'>
        
        <p>LOGO</p>
        </div>
        {/* <div className="serch_div">
          <div className="icon">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          </div>
          <input className='serch' type="text" />
          <div className='search-button'>
            <button onClick={()=>{console.log("button");
            }}>Search</button>
          </div> */}
{/*           
        </div> */}
        
      </div>
      <div className="left_div">
        <div className="fonticonelink">
        <FontAwesomeIcon icon={faUserLight} style={{ color: 'rgb(25,49,84)'}}/>
       
        </div>
        <div className="fonticonelink" >
        <FontAwesomeIcon icon={faBuildingColumns} style={{ color: 'rgb(25,49,84)'}}/>
        </div>        
      </div>
      </div>
    </div>
    </div>
  )
}
export default Navbar