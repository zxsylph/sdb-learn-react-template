import React, { useState } from "react";
import InstrumentAddButton from "component/navbar";
import { Button, Modal, Form } from 'react-bootstrap'

import { useRouter } from 'next/router';

function loginPage() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')


  const router = useRouter();

  const changeUsername = (e: any) => {

    console.log(e.target.value)
    setUsername(e.target.value)


  }

  const changePassword = (e: any) => {

    console.log(e.target.value)
    setPassword(e.target.value)


  }



  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("user", username)
    console.log("pass", password)
    router.push("/todo");

  }



  return (

    <div className="container  p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1>Login page</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input className="form-control" type="text" name="username" onChange={changeUsername} />
            </div>


            <div className="from-group">
              <label>Password</label>
              <input className="form-control" type="text" name="password" onChange={changePassword} />
            </div>


            <button className="btn btn-success">ส่ง</button>

          </form>
        </div>
      </div>
    </div>





  )
}

export default loginPage;