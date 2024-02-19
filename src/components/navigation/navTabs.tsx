import { Tab, Tabs } from "@nextui-org/react";
import { Link, useLocation } from "react-router-dom";
import UserIcon from "../icons/userIcon";
import ChatIcon from "../icons/chatIcon";
import CatalogIcon from "../icons/catalogIcon";
import { useUnit } from "effector-react";
import { $loggedIn } from "../../stores/debugStore";

type NavTab = {
  key: string;
  title: string;
  icon: JSX.Element;
};

const getTabs = (loggedIn: boolean): NavTab[] =>
  loggedIn
    ? [
        { key: "/orders", title: "Заказы", icon: <CatalogIcon size={1.5} /> },
        { key: "/chat", title: "Чат", icon: <ChatIcon size={1.5} /> },
        { key: "/profile", title: "Профиль", icon: <UserIcon size={1.5} /> },
      ]
    : [{ key: "/auth", title: "Вход", icon: <UserIcon size={1.5} /> }];

const NavTabs = () => {
  const { pathname } = useLocation();
  const loggedIn = useUnit($loggedIn);
  return (
    <Tabs className="fixed bottom-3 w-full flex justify-center" selectedKey={pathname} aria-label="Tabs">
      {getTabs(loggedIn).map((tab) => (
        <Tab
          key={tab.key}
          id={tab.key}
          className="w-20 h-12"
          title={
            <Link to={tab.key} className="w-24 h-full flex flex-col justify-center items-center text-md">
              {tab.icon}
              <span>{tab.title}</span>
            </Link>
          }
        />
      ))}
    </Tabs>
  );
};

export default NavTabs;
