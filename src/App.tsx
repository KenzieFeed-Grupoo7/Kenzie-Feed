import { GlobalStyle } from "./Styles/global.ts";
import { ResetStyle } from "./Styles/reset.ts";
import { RoutesMain } from "./Routes/RoutesMain.tsx";
import { useContext } from "react";
import { UserContext } from "./Providers/UserContexts/UserContexts.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoadingSpinner } from "./Components/LoadingSpinner/index.tsx";

export const App = () => {
  const { loading } = useContext(UserContext);

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <ResetStyle />
          <GlobalStyle />
          <RoutesMain />
          <ToastContainer />
        </>
      )}
    </>
  );
};
