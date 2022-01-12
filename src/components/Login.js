import React, { useContext, useEffect, useState } from "react";
import { withRouter } from "react-router";
import { Context } from "./contextApi/Context";
import { Liara } from "./icon";
import Layout from "./Layout";

const Login = (props) => {
  const context = useContext(Context);
  const {
    accounts,
    openConsoleLogin,
    openConsoleRegister,
    check,
    setCheck,
    loading,
  } = context;
  useEffect(() => {
    if (loading) return;
    if (Object.values(accounts).length != 0) {
      props.history.push("/Draggable");
    }
    // if (Object.values(accounts).length == 0) {
    //   setCheck(false);
    // }
  }, [accounts]);

  return (
    <Layout>
      <div dir="rtl">
        {loading && (
          <div className="load-container">
            <span className="load"></span> <span className="background"></span>
          </div>
        )}

        <div className="logo">
          <Liara />
          <span>سرویس ابری لیارا</span>
        </div>
        <div>
          <button
            className={`btn`}
            onClick={openConsoleLogin}
            // disabled={check}
          >
            ورود با مرورگر
          </button>
        </div>
        <span onClick={openConsoleRegister} className="register">
          حساب ندارید؟
          <a href="#">عضو شوید</a>
        </span>
      </div>
    </Layout>
  );
};

export default withRouter(Login);
