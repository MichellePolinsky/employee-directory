import React, { useState, useEffect } from 'react'
import Axios from 'axios'
// import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

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
            <p key={i}>
              {staff.firstName} {staff.lastName} - {staff.jobTitle}
            </p>
             <Link to={`/${EmployeePage.id}`}>
             <li>
               <h3>{EmployeePage.firstName}</h3>
             </li>
           </Link>
             <Switch>
             <Route exact path="/" component={EmployeePage}></Route>
           </Switch>
         </Router>
          
        })}
      </div>
    </main>
  )
}

export default HomePage
