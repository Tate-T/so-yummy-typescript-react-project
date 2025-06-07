"use client";
import { z } from "zod";
import { useSigninMutation } from "@/redux/auth/authOperations";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/slices/authSlice";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import saveRefreshToken from "@/features/auth/saveRefreshToken";
import AuthPage from "@/shared/AuthPage/AuthPage";

const FormSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(5, "Password too short")
    .max(21, "Password too long"),
});

type FormFields = z.infer<typeof FormSchema>;

const LoginPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [login] = useSigninMutation();
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormFields, string>>
  >({});

  const handleSumbit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const formData = new FormData(evt.currentTarget);

    const data = {
      email: (formData.get("email") as string) || "",
      password: (formData.get("password") as string) || "",
    };

    const result = FormSchema.safeParse(data);

    if (!result.success) {
      const fieldErrors: typeof errors = {};
      result.error.errors.forEach((err) => {
        console.log("err", err);
        const field = err.path[0] as keyof FormFields;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
    } else {
      setErrors({});
      try {
        const response = await login({
          email: data.email,
          password: data.password,
        }).unwrap();
        console.log(response);
        router.push("/");
        dispatch(
          setUser({
            user: {
              ...response.user,
              accessToken: response.accessToken,
            },
          })
        );
        saveRefreshToken(response.refreshToken);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <AuthPage
      isRegistration={false}
      handleSubmit={handleSumbit}
      errors={errors}
    />
  );
};

export default LoginPage;
