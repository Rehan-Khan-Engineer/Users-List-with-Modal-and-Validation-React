import classes from "./UserItem.module.css";

const UserItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <div>
      <p className={classes["sub-element"]} onClick={deleteHandler}>
        {props.name + " (" + props.age + " Years old)"}
      </p>
    </div>
  );
};

export default UserItem;
