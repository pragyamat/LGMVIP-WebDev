import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={classes["footer"]}>
      <div className={classes["footer-inner"]}>
        <p>
          &copy;2021 Pragya Mathur | Developed as part of LGM Task Submission
        </p>
      </div>
    </footer>
  );
};

export default Footer;
