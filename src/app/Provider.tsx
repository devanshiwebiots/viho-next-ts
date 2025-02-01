"use client";
import { Provider } from "react-redux";
import Store from "../Redux/ReduxStore";

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  return (
     
      <Provider store={Store}>
        <div>{children}</div>
      </Provider>
    
  );
};

export default LayoutProvider;
