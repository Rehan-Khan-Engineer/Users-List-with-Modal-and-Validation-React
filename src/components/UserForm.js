import classes from "./UserForm.module.css";
import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

const UserForm = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const [isUserNameValid, setIsUserNameValid] = useState(true);
  const [isAgeValid, setIsAgeValid] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState();

  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
    //to prevent displaying pink color in input if user starts typing
    setIsUserNameValid(true);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
    //to prevent displaying pink color in input if user starts typing
    setIsAgeValid(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    //to prevent rendering new item if user enters nothing.
    //adding + to force js to interpret age as a value and not a string, however,
    //it's not compulsory.
    if (enteredUserName.trim().length === 0) {
      setIsUserNameValid(false);
      setIsModalOpen({ message: "userName." });
      return;
    } else if (
      enteredAge.trim().length === 0 ||
      +enteredAge < 1 ||
      +enteredAge > 100
    ) {
      setIsAgeValid(false);
      setIsModalOpen({ message: "age." });
      return;
    }

    const userInputObject = {
      id: Math.random(),
      userName: enteredUserName,
      age: enteredAge,
    };

    props.onSaveUserHandler(userInputObject);

    setEnteredUserName("");
    setEnteredAge("");
  };

  const closeModalHandler = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={classes.container}>
      <form onSubmit={formSubmitHandler}>
        <div
          className={`${classes.elements} ${
            !isUserNameValid ? classes.invalid : ""
          }`}
        >
          <label htmlFor="userName">Username</label>
          <input
            id="userName"
            type="text"
            className={classes.input}
            value={enteredUserName}
            onChange={userNameChangeHandler}
          />
        </div>
        <div
          className={`${classes.elements} ${
            !isAgeValid ? classes.invalid : ""
          }`}
        >
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            className={classes.input}
            value={enteredAge}
            onChange={ageChangeHandler}
          />
        </div>
        <div className={classes.elements}>
          <button className={classes.button} type="submit">
            Add User
          </button>
        </div>
      </form>
      {isModalOpen ? (
        <Modal
          modalContent={isModalOpen.message}
          closeModalHandler2={closeModalHandler}
        />
      ) : null}
      {isModalOpen ? <Backdrop closeBackdrop2={closeModalHandler} /> : null}
    </div>
  );
};

export default UserForm;
