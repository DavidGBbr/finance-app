import { useNavigation } from "@react-navigation/native";
import { createContext, useState } from "react";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const [visibleModal, setVisibleModal] = useState(false);
  const [list, setList] = useState([
    {
      id: 1,
      label: "Boleto conta luz",
      value: "300,90",
      date: "17/09/2022",
      type: 1,
    },
    {
      id: 2,
      label: "Pix Cliente X",
      value: "2.500,00",
      date: "20/09/2022",
      type: 0,
    },
    {
      id: 3,
      label: "Salário",
      value: "7.200,00",
      date: "22/09/2022",
      type: 0,
    },
  ]);
  const navigation = useNavigation();

  const addItemList = (label, value, date, type) => {
    const newItem = {
      id: Date.now(),
      label,
      value,
      date,
      type,
    };

    setList([...list, newItem]);
    navigation.navigate("Home");
  };

  function signIn(email, password) {
    if (email !== "" && password !== "") {
      setUser({
        email: email,
        status: "ATIVO",
      });

      navigation.navigate("Home");
    }
  }

  return (
    <AuthContext.Provider
      value={{
        userName: "David Brigido",
        signIn,
        user,
        visibleModal,
        setVisibleModal,
        list,
        addItemList,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
