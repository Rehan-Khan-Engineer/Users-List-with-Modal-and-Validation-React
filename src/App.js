import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import { useState } from "react";

const USERS = [
  { userName: "Rehan", age: 23, id: 11 },
  { userName: "Javed", age: 24, id: 22 },
];

function App() {
  const [userData, setUserData] = useState(USERS);

  const saveUserHandler = (userInput) => {
    setUserData((prevState) => {
      return [userInput, ...prevState];
    });
  };

  const deleteHandler = (Id) => {
    setUserData((prevState) => {
      return prevState.filter((element) => element.id !== Id);
    });
  };

  let content = (
    <div
      style={{
        margin: "1rem auto",
        padding: "1rem",
        backgroundColor: "white",
        width: "50vw",
        borderRadius: "0.5rem",
      }}
    >
      <p style={{ textAlign: "center" }}>No Users Found! Add one?</p>
    </div>
  );

  if (userData.length > 0) {
    content = <UserList users={userData} onDeleteByClick={deleteHandler} />;
  }

  return (
    <div>
      <UserForm onSaveUserHandler={saveUserHandler} />
      {content}
    </div>
  );
}

export default App;
