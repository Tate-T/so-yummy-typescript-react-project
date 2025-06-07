import css from "./AuthPage.module.scss";
import Link from "next/link";
import clsx from "clsx";
import { FC } from "react";
import { AuthPageProps } from "@/entities/AuthPage.type";
import Image from "next/image";
import AuthPhoto from "../../../public/authImgs/authPhoto.webp";
import Container from "../Container/Container";

const AuthPage: FC<AuthPageProps> = ({
  isRegistration,
  handleSubmit,
  errors,
}) => {
  return (
    <div className={css.authPage}>
      <Container>
        <div className={css.test}>
          <Image src={AuthPhoto} alt="photo" className={css.authPhoto} />
          <div className={css.authBox}>
            <div className={css.authBlock}>
              <h2 className={css.authTitle}>
                {isRegistration ? "Registration" : "Sign In"}
              </h2>
              <form className={css.authForm} onSubmit={handleSubmit}>
                {isRegistration && (
                  <div
                    className={clsx(
                      css.authNameBefore,
                      errors.name && css.authErrorAfter
                    )}
                  >
                    <input
                      type="text"
                      className={clsx(
                        css.authInput,
                        errors.name && css.authErrorInput
                      )}
                      placeholder="Name"
                      name="name"
                    />
                  </div>
                )}
                <div
                  className={clsx(
                    css.authEmailBefore,
                    errors.email && css.authErrorAfter
                  )}
                >
                  <input
                    type="text"
                    className={clsx(
                      css.authInput,
                      errors.email && css.authErrorInput
                    )}
                    placeholder="Email"
                    name="email"
                  />
                </div>
                <div
                  className={clsx(
                    css.authPasswordBefore,
                    errors.password && css.authErrorAfter
                  )}
                >
                  <input
                    type="password"
                    className={clsx(
                      css.authInput,
                      errors.password && css.authErrorInput
                    )}
                    placeholder="Password"
                    name="password"
                  />
                </div>
                <button type="submit" className={css.loginBtn}>
                  Sign In
                </button>
              </form>
            </div>
            <Link
              href={isRegistration ? "/start/login" : "/start/registration"}
              className={css.authLink}
            >
              {isRegistration ? "Sign in" : "Registration"}
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AuthPage;
