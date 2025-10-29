import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

type AuthContextType = {
  isAuthenticated: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);
const FAKE_TOKEN_KEY = "fake_auth_token";

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [_loading, setLoading] = useState(false);

  useEffect(() => {
    const loadAuthState = async () => {
      try {
        const token = await AsyncStorage.getItem(FAKE_TOKEN_KEY);
        setIsAuthenticated(!!token);
      } finally {
        setLoading(false);
      }
    };

    loadAuthState();
  }, []);

  const login = async () => {
    setLoading(true);
    await AsyncStorage.setItem(FAKE_TOKEN_KEY, "dummy_token");
    setIsAuthenticated(true);
    setLoading(false);
  };

  const logout = async () => {
    setLoading(false);
    await AsyncStorage.removeItem(FAKE_TOKEN_KEY);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
