import React, { useState } from "react";
import InstrumentAddButton from "component/navbar";
import { Button, Modal, Form } from 'react-bootstrap'

import { useRouter } from 'next/router';
import { toast } from "react-toastify";
import { Alert } from "reactstrap";

function loginPage() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [defaultAlert, setDefaultAlert] = useState(false)
  const [lapp, setlapp] = useState(false)

  const router = useRouter();

  const changeUsername = (e: any) => {

    console.log(e.target.value)
    setUsername(e.target.value)

    const check1 = e.target.value.indexOf(".com")
    const check2 = e.target.value.indexOf(".ac.th")

    // console.log("check true? ", ans)

    if (!(e.target.value.indexOf("@") > -1 && (check1 > -1 || check2 > -1))) {
      setDefaultAlert(true)
    }
    else {
      setDefaultAlert(false)
    }

  }

  const changePassword = (e: any) => {

    console.log(e.target.value)
    setPassword(e.target.value)




  }



  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("user", username)
    console.log("pass", password)

    const check1 = username.indexOf(".com")
    const check2 = username.indexOf(".ac.th")
    const check3 = username.indexOf("@")


   if((check3 > -1 && (check1 > -1 || check2 > -1)))
      router.push("/todo");

  }



  return (

    <div className="container  p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1>Login page</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input className="form-control" type="text" name="username" onChange={changeUsername} />
            </div>
            <Alert color="primary" isOpen={defaultAlert}>
              <strong>! </strong> Your email should have the following format such as test.3@.com/test.3@.ac.th
            </Alert>


            <div className="from-group">
              <label>Password</label>
              <input className="form-control" type="text" name="password" onChange={changePassword} />
            </div>


            <button className="btn btn-success">ส่ง</button>
            <Alert color="primary" isOpen={lapp}>
              <strong>! </strong> Your email should have the following format such as test.3@.com/test.3@.ac.th
            </Alert>
          </form>
        </div>
      </div>
    </div>





  )
}

export default loginPage;