import { useState, useEffect } from "react";
import PetList from "./PetList";
import "./Employee.css";

export const Employee = ({ employee }) => {
  const [showPets, setShowPets] = useState([]);
  const [toggle, setToggle] = useState(false);
  const { id, firstName, lastName, prefix, postfix, title } = employee;

  // const arrayOfName = [];
  // if (prefix) arrayOfName.push(prefix + " ")
  // arrayOfName.push(firstName + " " + lastName);
  // if (postfix) arrayOfName.push(", " + postfix)
  // const fullName = arrayOfName.join("");
  const fullName = `${prefix ? prefix + " " : ""}${firstName} ${lastName}${postfix ? ", " + postfix : ""}`

  async function fetchAPI() {
    try {
      const response = await fetch("https://vet-app-0obi.onrender.com/api/pets");
      const data = await response.json();
      return data;
    } catch(error) {
      return console.log("Error fetching API: ", error);
    }
  }

  useEffect(() => {
    fetchAPI()
    .then((response) => {
      setShowPets(response);
    })
    .catch((error) => {
      console.log(error);
    })
  }, []);

  function handleToggle() {
    setToggle(!toggle);
  }

  function filterPets() {
    const pets = showPets.filter((eachPet) => {
      return eachPet.employeeId === id;
    })
    return <PetList key={pets.id} pets={pets} />
  }

  return (
    <article className="employee">
      <h3>{fullName}</h3>
      <h4>{title}</h4>
      <button onClick={() => handleToggle()}>
        {toggle ? "Hide Pets" : "Show Pets"}
      </button>
      {toggle ? filterPets() : null}
    </article>
  );
};

export default Employee;
