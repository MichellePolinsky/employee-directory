import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const [getStaff, setGetStaff] = useState([])

  const fetchData = async () => {
    const resp = await Axios.get(
      'https://sdg-staff-directory-app.herokuapp.com/api/Solar%20Shore%20Formulators%20Foundation/Employees'
    )

    setGetStaff(resp.data)
    console.log(resp.data, 'staff')
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <main>
      <h3 className="header">Staff</h3>
      <div>
        {getStaff.map((staff, i) => {
          return (
            <section key={i}>
              <Link to={{ pathname: `/employee/${staff.id}` }}>
                <h3>
                  {staff.firstName} {staff.lastName}
                </h3>
              </Link>
            </section>
          )
        })}
      </div>
    </main>
  )
}

export default HomePage
