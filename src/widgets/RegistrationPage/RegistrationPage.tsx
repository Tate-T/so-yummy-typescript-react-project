"use client";
import { FormEvent, useState } from "react";
import { z } from "zod";
import {
  useSigninMutation,
  useSignupMutation,
} from "@/redux/auth/authOperations";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/slices/authSlice";
import saveRefreshToken from "@/features/auth/saveRefreshToken";
import AuthPage from "@/shared/AuthPage/AuthPage";

const FormSchema = z.object({
  name: z.string().min(2, "Name too short"),
  email: z.string().email(),
  password: z
    .string()
    .min(5, "Password too short")
    .max(21, "Password too long"),
});

type FormFields = z.infer<typeof FormSchema>;

const RegistrationPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [registr] = useSignupMutation();
  const [login] = useSigninMutation();
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormFields, string>>
  >({});

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const formData = new FormData(evt.currentTarget);

    const data = {
      name: (formData.get("name") as string) || "",
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
        await registr(data).unwrap();
        const response = await login({
          email: data.email,
          password: data.password,
        }).unwrap();
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
      isRegistration={true}
      handleSubmit={handleSubmit}
      errors={errors}
    />
  );
};

export default RegistrationPage;
