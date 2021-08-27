import classes from "./Header.module.css";
const Header = (props) => {
  return (
    <header className={classes["header"]}>
      <div className={classes["header-container"]}>
        <p className={classes.logo}>User Grid</p>
        <button
          className={classes["get-user-btn"]}
          onClick={() => props.getUsers()}
        >
          Get users
        </button>
      </div>
    </header>
  );
};

export default Header;
