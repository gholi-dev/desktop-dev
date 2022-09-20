import React from "react";
import Accounts from "./accounts/accounts.component";
import { useDispatch, useSelector } from "react-redux";
import {
  SidebarContainer,
  Dividr,
  OptionItem,
  CloseContainer
} from "./sidebar.styles";
import { ipcRenderer } from "electron";
import { user } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";
import CurrentSection from "./current-section/current-section.component";
import { Fragment } from "react";
import { toggle } from "../../store/sidebarSlice";

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isOpen } = useSelector(state => state.sidebar);
  const { currentAccount } = useSelector(state => state.auth.user);

  const logInWithBrowser = () => {
    ipcRenderer.on("open-console", (_, arg) => {
      dispatch(user(arg));
    });
    ipcRenderer.send("open-console", { page: "login" });
  };

  const openTicketingInBrowser = () => {
    ipcRenderer.send("console", {
      support: true
    });
  };

  const handleLogout = () => {
    const { email, region } = currentAccount;
    ipcRenderer.on("remove-account", (_, arg) => {
      dispatch(user(arg));
      if (!arg.length) navigate("/auth");
    });
    ipcRenderer.send("remove-account", { email, region });
  };

  const closeSidebar = () => {
    dispatch(toggle());
  };

  if (!currentAccount?.email || !currentAccount?.region ) {
    return null;
  }

  return (
    <Fragment>
      {isOpen && <CloseContainer onClick={closeSidebar} />}
      <SidebarContainer
        style={{ transform: `translateX(${isOpen ? 0 : `70vw`})` }}
      >
        <CurrentSection />

        <Accounts />

        <div style={{ padding: "10px 25px" }}>
          <OptionItem onClick={logInWithBrowser}>افزودن حساب کاربری</OptionItem>
          <OptionItem onClick={openTicketingInBrowser}>
            ارتباط با پشتیبانی
          </OptionItem>
          <OptionItem onClick={handleLogout}>خروج</OptionItem>
        </div>
      </SidebarContainer>
    </Fragment>
  );
};

export default Sidebar;
