import { createContext, Dispatch, SetStateAction, useState } from "react";

interface DefaultValue {
  curId: string | undefined;
  curQ: string | undefined;
  isOpen: boolean;
  setCurId: Dispatch<SetStateAction<string | undefined>>;
  setCurQ: Dispatch<SetStateAction<string | undefined>>;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const RentalContext = createContext<DefaultValue>({
  curId: undefined,
  curQ: undefined,
  isOpen: false,
  setCurId: () => {},
  setCurQ: () => {},
  setIsOpen: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const RentalContextProvider = ({ children }: Props) => {
  const [curId, setCurId] = useState<string | undefined>(undefined);
  const [curQ, setCurQ] = useState<string | undefined>(undefined);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const value = {
    curId: curId,
    curQ: curQ,
    isOpen: isOpen,
    setCurId: setCurId,
    setCurQ: setCurQ,
    setIsOpen: setIsOpen,
  };

  return <RentalContext.Provider value={value}>{children}</RentalContext.Provider>;
};
