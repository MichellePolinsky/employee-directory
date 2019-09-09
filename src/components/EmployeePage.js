import React, { useEffect, useState } from 'react'
import Axios from 'axios'

const EmployeePage = props => {
  const [employeeInfo, setEmployeeInfo] = useState(props.match.params.employee)
  const [profile, setProfile] = useState({})

  const fetchEmployeeInfo = async () => {
    const resp = await Axios.get(
      'https://sdg-staff-directory-app.herokuapp.com/api/Solar%20Shore%20Formulators%20Foundation/Employees/459'
    )
    setProfile(resp.data)
    console.log({ data: resp.data }, 'Prof')
  }

  useEffect(() => {
    fetchEmployeeInfo()
  }, [employeeInfo])

  useEffect(() => {
    setEmployeeInfo(props.match.params.employee)
  }, [props])

  return (
    <>
      <div>
        <h2>First Name: {profile.firstName}</h2>
        <h3>Last Name: {profile.lastName}</h3>
        <p>Job Title: {profile.jobTitle}</p>
        <p>Email: {profile.email}</p>
        <p>Phone Number: {profile.phoneNumber}</p>
      </div>
    </>
  )
}

export default EmployeePage
