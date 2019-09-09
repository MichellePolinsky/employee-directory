import React, { useEffect, useState } from 'react'
import Axios from 'axios'
// import { link } from 'react-router-dom'

const AddNew = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [jobTitle, setJobTitle] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')

  const addEmployee = async () => {
    const resp = await Axios.post(
      'https://sdg-staff-directory-app.herokuapp.com/api/Solar%20Shore%20Formulators%20Foundation/Employees',
      {
        firstName,
        lastName,
        jobTitle,
        email,
        phoneNumber
      }
    )
  }

  // useEffect(() => {
  //   addEmployee()
  // }, [])

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          addEmployee()
        }}
      >
        <section>
          <label>First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
        </section>
        <section>
          <label>Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
        </section>
        <section>
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </section>
        <section>
          <label>Phone Number</label>
          <input
            type="number"
            value={phoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
          />
        </section>
        <section>
          <label>Job Title</label>
          <input
            type="text"
            value={jobTitle}
            onChange={e => setJobTitle(e.target.value)}
          />
        </section>
        <button>Add Employee</button>
      </form>
    </div>
  )
}

export default AddNew
