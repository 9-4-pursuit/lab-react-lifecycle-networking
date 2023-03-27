import { useState, useEffect } from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

export const EmployeeList = () => {
  const [showEmployees, setShowEmployees] = useState([]);

  async function fetchAPI() {
    try {
      const response = await fetch("https://vet-app-0obi.onrender.com/api/employees");
      const data = await response.json();
      return data;
    } catch(error) {
      return console.log("Error fetching API: ", error);
    }
  }

  useEffect(() => {
    fetchAPI()
      .then((response) => {
        setShowEmployees(response);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {
          showEmployees.map((employee) => {
            return <Employee 
              key={employee.id}
              employee={employee}
            />
          })
        }
      </section>
    </main>
)}; 

export default EmployeeList;