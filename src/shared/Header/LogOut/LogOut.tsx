"use client";

import { TfiClose } from "react-icons/tfi";
import css from "./LogOut.module.scss";
import { useLogoutMutation } from "@/redux/auth/authOperations";
import deleteRefreshToken from "@/features/auth/deleteRefreshToken";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/slices/authSlice";
import { useRouter } from "next/navigation";
import { MouseEvent } from "react";

const LogOut = ({ openLogOutunction }: { openLogOutunction: () => void }) => {
  const [logoutFn] = useLogoutMutation();
  const dispatch = useDispatch();
  const router = useRouter();
  const handleLogout = (): void => {
    logoutFn(undefined);
    deleteRefreshToken();
    dispatch(setUser({ user: { accessToken: "" } }));
    router.push("/start");
  };
  const handleOverlayClick = (e: MouseEvent): void => {
    if (!(e.target instanceof HTMLDivElement)) return;
    if (e.target.dataset.logoutOverlay) openLogOutunction();
  };
  return (
    <div className={css.logoutOverlay} data-logout-overlay="1" onClick={handleOverlayClick}>
      <div className={css.logOutBox} data-open-modal>
        <TfiClose className={css.iconCross} onClick={openLogOutunction} />
        <p className={css.textLogOut}>Are you sure you want to log out?</p>
        <ul className={css.listButton}>
          <li>
            <button type="button" className={css.btnLogOut} onClick={handleLogout}>
              Log out
            </button>
          </li>
          <li>
            <button type="button" className={css.btnCancel} onClick={openLogOutunction}>
              Cancel
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LogOut;
