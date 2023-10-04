import { createContext, useContext } from "react";

export interface AppContextType {
  isAuthenticated: boolean;
  userHasAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = createContext<AppContextType>({
  isAuthenticated: false,
  userHasAuthenticated: useAppContext,
});

export function useAppContext() {
  return useContext(AppContext);
}
export function onError(error: any) {
    let message = String(error);
  
    if (!(error instanceof Error) && error.message) {
      message = String(error.message);
    }
  
    alert(message);
  }