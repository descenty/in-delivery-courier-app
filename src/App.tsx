import "./App.css";
import AuthScreen from "./components/navigation/screens/authScreen";
import NavTabs from "./components/navigation/navTabs";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Button, NextUIProvider } from "@nextui-org/react";
import { $loggedIn, switchLoggedIn } from "./stores/debugStore";
import ChatScreen from "./components/navigation/screens/chatScreen";
import OrdersScreen from "./components/navigation/screens/ordersScreen";
import ProfileScreen from "./components/navigation/screens/profileScreen";
import { useUnit } from "effector-react";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();
  const loggedIn = useUnit($loggedIn);
  useEffect(() => {
    if (!loggedIn) navigate("/auth");
  }, [loggedIn, navigate]);
  return (
    <NextUIProvider navigate={navigate}>
      <div className="flex flex-col justify-center items-center w-[100vw] h-[100vh]">
        <Routes>
          <Route path="/auth" element={<AuthScreen />} />
          <Route path="/orders" element={<OrdersScreen />} />
          <Route path="/chat" element={<ChatScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
        </Routes>
      </div>
      <NavTabs />
      {/* THIS BUTTON IS ONLY FOR DEBUGGING */}
      <Button className="fixed top-2 right-2" onClick={() => switchLoggedIn(navigate)}>
        Переключить состояние входа
      </Button>
    </NextUIProvider>
  );
}

export default App;
