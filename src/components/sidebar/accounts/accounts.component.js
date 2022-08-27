import { ipcRenderer } from "electron";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { user } from "../../../store/authSlice";
import {
  Account,
  AccountAvatar,
  AccountsContaienr,
  BadgeRegion
} from "./accounts.styles";

const handleChangeCurrent = (email, region) => {
  ipcRenderer.on("change-current", (event, arg) => {
    if (arg !== {}) {
      const user = arg.map((item) => {
        return {
          account_name: Object.keys(item)[0],
          ...Object.values(item)[0]
        };
      });
      setAccounts(user);
      setCurrent(user.filter((item) => item.current)[0]);
    }
  });
  ipcRenderer.send("change-current", {
    email,
    region
  });
};

const Accounts = () => {
  const { accounts } = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handlechengeCurrent = (email, region) => {
    ipcRenderer.on("change-current", (_, arg) => {
      dispatch(user(arg));
    });
    ipcRenderer.send("change-current", {
      email,
      region
    });
  };

  return (
    <AccountsContaienr>
      {accounts.map(
        ({ account_name, current, email, region, avatar, fullname }) => {
          return (
            <Account
              key={account_name}
              current={current}
              onClick={() => handlechengeCurrent(email, region)}
            >
              <AccountAvatar src={avatar} alt={`avatar-${account_name}`} />
              <p>{fullname}</p>
              <BadgeRegion src={region} />
            </Account>
          );
        }
      )}
    </AccountsContaienr>
  );
};

export default Accounts;
