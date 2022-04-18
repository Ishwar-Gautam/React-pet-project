import NavigationSection from "./NavigationSection";
import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <div>
      <NavigationSection />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
