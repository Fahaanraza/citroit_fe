import React from 'react';
// import { Row, Col, Select, Space } from 'antd';
import { Menu,Button } from 'antd';
import '../../App.css'
import { useNavigate } from "react-router-dom";


export default function Navbar() {
	const navigate = useNavigate();


  function handleRegister() {
    navigate("/register");
  }

  function handleLogin() {
    navigate("/login");
  }

  function handleAdminLogin() {
    navigate("/admin-login");
  }

  const items = [
    {
      label: (
        <a href="https://citriot.com" target="_blank" rel="noopener noreferrer">
          ABOUT US
        </a>
      ),
      key: 'about',
    },
    {
      label: 'SERVICES',
      key: 'services',
    },
    {
      label: <button onClick={handleLogin}>Login</button>,
      key: 'login',
    },
    {
      label: <button onClick={handleRegister}>Register</button>,
      key: 'register',
    },
    {
      label: <button onClick={handleAdminLogin}>Admin</button>,
      key: 'admin',
    },
    
    
  ];



  return (
    <div className="grid my-2">

    <div className="lgl:mx-40 xs:mx-10 grid grid-cols-2 md:grid-cols-2 xl:grid-cols-2">
  
        <div >
        <a href="#" className='text-2xl py-2 font-serif'>Fire-Connect</a>
          {/* <Button type="text" size='large' >
          Fire-Connect
          </Button> */}
        </div>

        <div>
          <Menu selectable={false} mode="horizontal" items={items} style={{'border-bottom':'0px'}} className='text-sm pt-2 font-mono'/>
        </div>
    
    </div>
  </div>
  )
}
