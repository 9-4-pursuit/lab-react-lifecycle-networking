export const PetList = ({ pets }) => {
  function showPet() {
    return(
      <ol>
        {
          pets.map((pet) => {
            return(
              <li key={pet.id}>
                <p>{pet.name} ({pet.kind.toLowerCase()})</p>
              </li>
            )
          })
        }
      </ol>
    )
  }

  return (
    <aside className="pets-list">
      {
        pets.length === 0
        ? <p>No pets listed for this employee.</p>
        : showPet()
      }
    </aside>
  );
};

export default PetList;
