import classes from './Layout.module.css';
import MainNavigation from "./MainNavigation";

function Layout(props) {

    return(
     <div>
        <MainNavigation />
        <main className={classes.main}>
            {/*Children Concept*/}
            {props.children}
        </main>
     </div>
    )
}

export default Layout;