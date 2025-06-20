import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { FC } from "react";
import RegMotivation from "../RegMotivation/RegMotivation";


const withAuth = <P extends object>(WrappedComponent: FC<P>): FC<P> => {
  return async function ProtectedRoute(props: P) {
    const cookiesStore = await cookies();
    const refreshToken = cookiesStore.get("refreshToken");
    if (!refreshToken) {
      return redirect("/start");
    }
    return <>
      <WrappedComponent {...props} />
      <RegMotivation />
    </>;
  };
};

export default withAuth;
