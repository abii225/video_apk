import React, { ReactNode, createContext, useEffect, useState } from "react";
interface state {
  allPosts: any[];
}
interface context {
  state: any;
  setState: React.Dispatch<React.SetStateAction<state>>;
}
export const DataContext = createContext<context>({
  state: { allPosts: [] },
  setState: () => {},
});

const ContextApi: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<state>({ allPosts: [] });
  useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <>
      <div>
        <DataContext.Provider value={{ state, setState }}>
          {children}
        </DataContext.Provider>
      </div>
    </>
  );
};

export default ContextApi;
