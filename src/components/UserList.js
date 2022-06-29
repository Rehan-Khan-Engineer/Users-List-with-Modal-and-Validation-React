import UserItem from "./UserItem";
import classes from "./UserList.module.css";

const UserList = (props) => {
  return (
    <section className={classes.container}>
      {props.users.map((element) => {
        return (
          <UserItem
            name={element.userName}
            age={element.age}
            key={element.userName}
            id={element.id}
            onDelete={props.onDeleteByClick}
          />
        );
      })}
    </section>
  );
};

export default UserList;
