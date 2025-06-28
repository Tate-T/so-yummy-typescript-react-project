
import { TfiClose } from "react-icons/tfi";
import css from "./LogOut.module.scss";

const LogOut = ({ openLogOutunction }: { openLogOutunction: () => void } ) => {

  return (
    <>

    <div className={css.logOutBox}>
      <TfiClose className={css.iconCross} onClick={openLogOutunction} />
      <p className={css.textLogOut}>Are you sure you want to log out?</p>
      <ul className={css.listButton}>
        <li>
          <button type="button" className={css.btnLogOut} >
            Log out
          </button>
        </li>
        <li>
          <button type="button" className={css.btnCancel}  onClick={openLogOutunction}>
            Cancel
          </button>
        </li>
      </ul>
    </div>
    </>
  );
};

export default LogOut;