import classes from "./UserCard.module.css";
const UserCard = (props) => {
  return (
    <div className={classes["user-card"]}>
      <div className={classes["user-card-inner"]}>
        <div className={classes["img-container"]}>
          <img src={props.user.avatar} alt={props.user.first_name} />
        </div>
        <div className={classes.name}>
          <p>{`${props.user.first_name} ${props.user.last_name} \n ${props.user.email}`}</p>
        </div>
        </div>
    </div>
  );
};

export default UserCard;
