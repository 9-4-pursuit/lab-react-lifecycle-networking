import { useState, useEffect } from "react";

import PetList from "./PetList";
import "./Employee.css";

export const Employee = ({
  firstName,
  lastName,
  title,
  prefix,
  postfix,
  id,
}) => {
  const [pets, setPets] = useState([]);
  const [showPets, setShowPets] = useState(false);

  const name = `${prefix ? prefix + " " : ""}${firstName} ${lastName}${
    postfix ? ", " + postfix : ""
  }`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://vet-api-1.onrender.com/api/pets?employeeId=${id}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPets(data);
      } catch (error) {
        console.error("Error fetching pets:", error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <article className="employee">
      <h3>{name}</h3>
      <h4>{title}</h4>
      <button onClick={() => setShowPets(!showPets)}>
        {showPets ? "Hide Pets" : "Show Pets"}
      </button>
      {showPets && <PetList pets={pets} />}
    </article>
  );
};

export default Employee;
