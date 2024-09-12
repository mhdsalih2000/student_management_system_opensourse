import React, { useState } from 'react'
import "./AdminDashbord.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import stati from "../../assets/stati.png"
import eduCap from "../../assets/student1.png"
import teacher from "../../assets/teacher.png"
import wallet from "../../assets/wallet.png"
import mail from "../../assets/mail.png"
import { CSSTransition } from 'react-transition-group';
import addstudent from "../../assets/addS.png"
import Table from '../Table/Table'





function AdminDashboard() {
  const [component , setcomponent] = useState("")
  return (
    <div className='Admin_main'>
        <div className="sidebar">
          <div className="fo">
          </div>
          <div className="navleftlastside">
          <div className ='fontIcon'><img src={stati} alt="" />
          </div>
          </div>
          <div className="navleftlastside" onClick={()=>setcomponent("student")}>
          <div className ='fontIcon'><img src={eduCap} alt=""  />
          </div>
          </div>
          <div className="navleftlastside">
          <div className ='fontIcon'><img src={teacher} alt="" />
          </div>
          </div>
          <div className="navleftlastside">
          <div className ='fontIcon'><img src={wallet} alt="" />
          </div>
          </div>
          <div className="navleftlastside">
          <div className ='fontIcon'><img src={mail} alt="" />
          </div>
          </div>
        </div>
        <div className="Nextnav">

        <div className="table">
        {component === "student" ? <CSSTransition
        in={component === 'student'}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <Table />
      </CSSTransition>: null}
        </div>

        </div>
        
        
    </div>
  )
}

export default AdminDashboard