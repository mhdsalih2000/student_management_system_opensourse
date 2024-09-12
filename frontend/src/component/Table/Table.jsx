import React, { useState } from 'react'
import "./Table.css"
import plus from '../../assets/plus.png'
import filter from '../../assets/fitlter.png'
function Table() {
  const [addstudentPopup, setaddstudentPopup] = useState(false);

  const closePopup = () => {
    setaddstudentPopup(false);
  };
  return (
    <div className="table-main">
        <div className="tablehead">
            <div className="table-right">
                <p>Spetix \ Student table</p>
            </div>
            <div className="table-left">
            </div>
        </div>
        <div className="tablehead-input">
          <div className="left-table-inputhead">
          <input placeholder='Search Student' className='inp' type="text" />
          <div className='btn' onClick={()=>{setaddstudentPopup(true)}}><img src={plus} alt="" /><p>Add Student</p></div>
          </div>
       <div className="right-table-inputhead">
        
       <div className='fiter'><img src={filter} alt="" /></div>

       </div>

        
            
        </div>
        
             
        <div className="table-div">
        <table>
  <tr>
    <th>Student ID</th>
    <th>Name</th>
    <th>Email</th>
    <th>Course</th>
    <th>Year</th>
    <th>Status</th>
    <th>Action</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
  <tr>
    <td>Ernst Handel</td>
    <td>Roland Mendel</td>
    <td>Austria</td>
  </tr>
  <tr>
    <td>Island Trading</td>
    <td>Helen Bennett</td>
    <td>UK</td>
  </tr>
  <tr>
    <td>Laughing Bacchus Winecellars</td>
    <td>Yoshi Tannamuri</td>
    <td>Canada</td>
  </tr>
  <tr>
    <td>Magazzini Alimentari Riuniti</td>
    <td>Giovanni Rovelli</td>
    <td>Italy</td>
  </tr>
</table>
            

        </div>
        {addstudentPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={closePopup}>&times;</span>
            <h2>Add Student</h2>
            {/* Add your form or inputs for adding a student here */}
            <form>
              <input type="text" placeholder="Student ID" />
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Course" />
              <input type="text" placeholder="Year" />
              <input type="text" placeholder="Status" />
              <button type="submit">Add</button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Table