import { Link } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { BlueCircle, GreenCircle, RedCircle } from "../components/icon";
import Layout from "../components/Layout";
import User from "../components/User";
import { Context } from "./contextApi/Context";

export default function Deploy() {
  const [status, setStatus] = useState("deploy");
  // deploy - error - success

  const context = useContext(Context);
  const { log } = context;
  

  if (status === "deploy") {
    return (
      <Layout>
        <div dir="rtl">
          <User />
          <div className="deploy">
            <span className="deploy-icon">
              <BlueCircle />
            </span>
            <p>در حال استقرار</p>
            <textarea
              readOnly
              value={log}
              placeholder="> Fetching the log code: 0%"
              spellCheck="false"
            ></textarea>
            <button className="btn cancle">لغو</button>
          </div>
        </div>
      </Layout>
    );
  }
  if (status === "error") {
    return (
      <Layout>
        <div dir="rtl">
          <User />
          <div className="deploy error">
            <RedCircle />
            <p>ﺍﺳﺘﻘﺮﺍﺭ ﺑﺎ ﺧﻄﺎ ﻣﻮﺍﺟﻪ ﺷﺪ</p>
            <span>
              ﺩﺭ ﺻﻮﺭﺕ ﻧﯿﺎﺯ ﺑﻪ ﭘﺸﺘﯿﺒﺎﻧﯽ، ﻻﮒﻫﺎﯼ ﺍﯾﻦ ﺍﺳﺘﻘﺮﺍﺭ ﺭﺍ ﺩﺭﯾﺎﻓﺖ ﻭ ﺩﺭ ﺗﯿﮑﺖ
              ﭘﯿﻮﺳﺖ ﮐﻨﯿﺪ.
            </span>
            <textarea
              readOnly
              value={log}
              placeholder="> Fetching the log code: 0%"
              spellCheck="false"
            ></textarea>

            <div className="btn-container">
              <Link to="/Deploy">
                <button className="btn main">دریافت لاگ</button>
              </Link>
              <Link to="/Draggable">
                <button className="btn main">استقرار جدید</button>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
  if (status === "success") {
    return (
      <Layout>
        <div dir="rtl">
          <User />
          <div className="deploy ">
            <GreenCircle />
            <p>ﺍﺳﺘﻘﺮﺍﺭ ﺍﻧﺠﺎﻡ ﺷﺪ</p>
            <textarea
              readOnly
              value={log}
              placeholder="> Fetching the log code: 0%"
              spellCheck="false"
            ></textarea>

            <div className="btn-container">
              <Link to="/Draggable">
                <button className="btn main">نمایش در مرورگر</button>
              </Link>
              <Link to="/Deploy">
                <button className="btn main">دریافت لاگ</button>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
