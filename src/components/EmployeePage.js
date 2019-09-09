import React, { useEffect, useState } from 'react'
// import { link } from 'react-router-dom'
import Axios from 'axios'

const EmployeePage = props => {
  const [employeeInfo, setEmployeeInfo] = useState('')

  const fetchEmployeeInfo = async () => {
    const resp = await Axios.get(
      `https://sdg-staff-directory-app.herokuapp.com/api/Solar%20Shore%20Formulators%20Foundation/Employee/${props.match.params.employee}`
    )
    console.log(resp.data)
    setEmployeeInfo(resp.data)
  }

  useEffect(() => {
    fetchEmployeeInfo()
  }, [])

  return (
    <>
      <div>
        <h2>First Name: {employeeInfo.firstName}</h2>
        <h3>Last Name: {employeeInfo.lastName}</h3>
        <p>Job Title: {employeeInfo.jobTitle}</p>
        <p>Email: {employeeInfo.email}</p>
        <p>Phone Number: {employeeInfo.phoneNumber}</p>
      </div>
    </>
  )
}

export default EmployeePage
