import UserCard from "../userCard/UserCard";
import loaderSvg from "./../../assets/loader/loader.svg";
import classes from "./UserGrid.module.css";
const UserGrid = (props) => {
  return (
    <div className={classes["user-grid"]}>
      {props.isDataBeingFetched && (
        <div className={classes["loader"]}>
          <img src={loaderSvg} alt="loader" />
        </div>
      )}
      {!props.isDataBeingFetched && props.userData && (
        <div className={classes["user-grid-inner"]}>
          {props.userData.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
};

export default UserGrid;
