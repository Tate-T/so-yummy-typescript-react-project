"use client";

import { useState, useEffect, MouseEvent, useRef, FormEvent } from "react";
import css from "./UserInfo.module.scss";
import { TfiClose } from "react-icons/tfi";
import { selectUser, setUser } from "@/redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { FiPlus, FiUser, FiEdit2 } from "react-icons/fi";
import clsx from "clsx";
import Image from "next/image";
import z from "zod/v4";
import ErrorSvg from "../../../../public/icons/error.svg";
import { useChangeDataMutation } from "@/redux/auth/authOperations";
import { toast } from "react-toastify";
import { ChangeBody, ChangeResp } from "@/entities/ChangeData.type";

const validationSchema = z.object({
  name: z.string().min(3, "Too short username").max(16, "Your new username is too long"),
  avatar: z.file().optional(),
});

const UserInfo = ({ openUserInfo }: { openUserInfo: () => void }) => {
  const user = useSelector(selectUser);
  const [imgBin, setImgBin] = useState<File | string>(user.avatarURL); //? this must be sent
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [imgPreview, setImgPreview] = useState<string>(user.avatarURL);
  const usernameInputRef = useRef(null);
  const [changeData, { isLoading }] = useChangeDataMutation();
  // const dispatch = useDispatch();
  const [username, setUsername] = useState<string>(user.name);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (!(e.target instanceof HTMLFormElement)) return;

    const data: ChangeBody = {
      name: e.target.username.value.trim(),
    };
    if (imgBin instanceof File) data.avatar = imgBin;
    const validationRes = validationSchema.safeParse(data);
    console.log(data);
    console.log(errors);
    if (!validationRes.success) {
      console.log("valerr");
      const errObj: Record<string, string> = {};
      validationRes.error.issues.forEach((err) => {
        errObj[err.path.join(".")] = err.message;
      });
      setErrors(errObj);
    } else {
      setErrors({});
      if (data.name === user.name && !data.avatar) {
        console.log("no new data");
        openUserInfo();
        return;
      }
      try {
        console.log("dfdsufhusghiudhgudfhg");
        await changeData(data);
        toast.success("Your profile has changed");
        openUserInfo();
      } catch (reqErr) {
        const err = reqErr as { status?: number };
        toast.error(`Server error ${err?.status ? err?.status : "lalala"}`);
      }
    }
    return;
  };

  return (
    <div className={css.userInfoOverlay}>
      <div className={css.bagUserInfo} data-open-modal>
        <form className={css.modalUserInfo} onSubmit={handleSubmit}>
          <TfiClose onClick={openUserInfo} className={css.iconClose} />
          <div className={css.boxUserImg}>
            <input
              accept=".jpg,.jpeg,.png"
              type="file"
              name="avatar"
              className={css.userInfoFile}
              onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
                const file = evt.target.files?.[0];
                if (!file) return;
                if (Number((file.size / (1024 * 1024)).toFixed(2)) > 1) {
                  toast.error("Too large file");
                  return;
                }
                const reader = new FileReader();
                reader.onload = (e: ProgressEvent<FileReader>) =>
                  // dispatch(setImg(e.target?.result ?? ""));
                  setImgPreview(String(e.target?.result) ?? "");
                reader.readAsDataURL(file);
                setImgBin(file);
              }}
            />
            <div className={css.plusBox}>
              <FiPlus className={css.plus} />
            </div>
            {/* {imgBin ? } */}
            <div className={css.test}>
              {imgPreview ? (
                <Image
                  src={imgPreview}
                  alt="userImg"
                  width={103}
                  height={103}
                  className={css.previewImg}
                />
              ) : (
                <FiUser className={css.testIcon} />
              )}
              {/* <FiUser className={css.testIcon} /> */}
            </div>
          </div>
          <div className={css.boxNameUser}>
            <FiUser className={css.iconUser} />
            <input
              value={username}
              name="username"
              ref={usernameInputRef}
              className={clsx(css.inputNameUser, errors?.name && css.inputNameUserError)}
              onChange={(evt) => setUsername(evt.target.value)}
            />
            <FiEdit2
              className={css.iconRename}
              onClick={(e: MouseEvent) => {
                if (usernameInputRef.current) {
                  (usernameInputRef.current as HTMLInputElement).focus();
                }
              }}
            />
            {/* <Image src={ErrorSvg} alt="errorSvg" className={css.iconRename} /> */}
          </div>

          <button type="submit" className={css.btnSubmitUser} disabled={isLoading}>
            Save changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserInfo;
