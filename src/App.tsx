import { GlobalStyle } from "./Styles/global.ts";
import { ResetStyle } from "./Styles/reset.ts";
import { RoutesMain } from "./Routes/RoutesMain.tsx";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    
    <div className="App">
      <ResetStyle />
      <GlobalStyle />
      <RoutesMain/>
      <ToastContainer />
    </div>     
    
  );
};