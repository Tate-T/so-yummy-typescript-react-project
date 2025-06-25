import { BsArrowRight } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";
import css from "./User.module.scss";

const User = ({ openLogOutunction }: { openLogOutunction: () => void }) => {
  return (
    <div className={css.boxUser}>
      <div className={css.boxUserName}>
        <p className={css.textName}>Edit profile</p>
        <FiEdit2 className={css.buttonRename} />
      </div>
      <div className={css.relativeIcon} onClick={openLogOutunction}>
        <button type="button" className={css.btnLogOutR}>
          Log out
        </button>
        <BsArrowRight className={css.iconLogOut} />
      </div>
    </div>
  );
};
export default User;
