export const PetList = ({ pets }) => {
  return (
    <aside className="pets-list">
      {pets.length ? (
        <p>{pets.map((pet) => pet.name).join(", ")}</p>
      ) : (
        <p>No pets listed for this employee.</p>
      )}
    </aside>
  );
};

export default PetList;
