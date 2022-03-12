import axios from "axios";
import { ipcRenderer } from "electron";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AppsItem from "./AppsItem";
import { Context } from "./contextApi/Context";
import { ArrowBottom, RedCircle, Reload, Tick } from "./icon";
import Layout from "./Layout";
import PlatformIcon from "./PlatformIcon";
import User from "./User";

function SelectApps(props) {
  const [data, setData] = useState("");
  const [clickCreate, setClickCreate] = useState(false);
  const [fetchAppEffect, setFetchAppEffect] = useState(false);

  const context = useContext(Context);
  const {
    accounts,
    selected,
    setSelected,
    port,
    setPort,
    showApps,
    setShowApps,
    deploy,
    current,
    disabled,
    defaultPort,
    check,
    setCheck,
    clearInfo,
    checkDirectory,
    isconfigPort,
    setIsConfigPort,
    next,
    setNext,
    openCreateApp,
    fetchApp,
    getProject,
    setFetchApp,
  } = context;

  useEffect(() => {
    !fetchApp && setCheck(true);
    setSelected("");
    if (Object.values(accounts).length == 0) {
      props.history.push("/");
    }
    getProject()
      .then((res) => {
        setData(res.data.projects);
        setCheck(false);
        setFetchApp(false);
      })

      .catch((error) => {
        console.error(error);
        ipcRenderer.send("asynchronous-login", "liara-cloud");
      });
  }, [current, fetchAppEffect]);

  const hasConfig =
    checkDirectory.config.port !== undefined &&
    checkDirectory.config.port !== false &&
    isconfigPort;

  const val = hasConfig ? checkDirectory.config.port : port;
  hasConfig && setPort(checkDirectory.config.port);

  // kill warning
  useEffect(() => {
    setTimeout(() => {
      setNext(false);
    }, 5000);
  }, [next]);

  const checkPort = port === "" || port === undefined;

  const handleFetchApp = () => {
    setFetchApp(true);
    setFetchAppEffect(!fetchAppEffect);
  };

  if (data.length == 0) {
    return (
      <Layout>
        <div dir="rtl">
          {check && (
            <div className="load-container">
              <span className="load"></span>{" "}
              <span className="background"></span>
            </div>
          )}
          <User />
          <div className="no-app error">
            <RedCircle />
            <p>برنامه ای یافت نشد.</p>
            <span>
              شما هیچ برنامه ای ندارید. ابتدا وارد کنسول لیارا شوید و برنامه ای
              بسازید.{" "}
              <span className="reload-noapp" onClick={handleFetchApp}>
                بارگذاری مجدد
              </span>
            </span>
          </div>

          <div
            className="btn-container"
            style={{
              position: "absolute",
              bottom: 55,
            }}
          >
            <button
              className={`btn main ${clickCreate ? `primary` : `hint`} `}
              onClick={() => openCreateApp() + setClickCreate(true)}
            >
              ساخت برنامه
            </button>

            <Link to="/Draggable">
              <button
                className={`btn main ${clickCreate ? `hint` : `primary`} `}
                onClick={() => clearInfo()}
              >
                قبلی
              </button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div dir="rtl">
        {check && (
          <div className="load-container">
            <span className="load"></span> <span className="background"></span>
          </div>
        )}
        <User />
        <p className="title">انتخاب برنامه</p>
        <p
          className="caption"
          style={next && selected == "" ? { color: "#ea5167 " } : {}}
        >
          ﺑﺮﻧﺎﻣﻪﺍﯼ ﮐﻪ ﻣﯽﺧﻮﺍﻫﯿﺪ ﺩﺭ ﺁﻥ ﺩﯾﭙﻠﻮﯼ ﮐﻨﯿﺪ ﺭﺍ ﺍﻧﺘﺨﺎﺏ ﮐﻨﯿﺪ.
        </p>
        <div style={{ display: "flex" }}>
          <div
            className={`apps ${fetchApp && `fetch`}`}
            style={
              next && selected == ""
                ? { border: "1px solid #ea5167", color: "#ea5167" }
                : {}
            }
            onClick={() => !fetchApp && setShowApps(!showApps)}
          >
            {selected === "" && data.length > 0 ? (
              <>
                برنامه ای انتخاب نشده
                <span className="left-icon">
                  {next && selected != {} ? (
                    <ArrowBottom color={`#ea5167`} />
                  ) : (
                    <ArrowBottom color={`#303030`} />
                  )}
                </span>
              </>
            ) : (
              <>
                {data.length > 0 ? (
                  <>
                    <PlatformIcon platform={selected.type} />

                    <span className="name">{selected.project_id}</span>
                    <span className="left-icon">
                      <Tick />
                    </span>
                  </>
                ) : (
                  "برنامه ای وجود ندارد"
                )}
              </>
            )}
          </div>
          <button
            className={`reload ${fetchApp && `fetch`}`}
            onClick={handleFetchApp}
          >
            <Reload />
          </button>
        </div>
        {showApps && data.length > 0 && (
          <div className="box" style={data.length > 5 ? { height: 165 } : {}}>
            {data.map((item) => (
              <AppsItem
                key={item.project_id}
                item={item}
                setShowApps={setShowApps}
                setSelected={setSelected}
              />
            ))}
          </div>
        )}
        {defaultPort.length === 0 && (
          <>
            <p className="title">ﺗﻌﯿﯿﻦ ﭘﻮﺭﺕ</p>
            <p
              className="caption"
              style={next && checkPort ? { color: "#ea5167" } : {}}
            >
              ﭘﻮﺭﺕ ﻣﻮﺭﺩ ﻧﻈﺮﺗﺎﻥ ﺭﺍ ﻭﺍﺭﺩ ﮐﻨﯿﺪ.
            </p>
            <input
              value={val}
              disabled={disabled}
              onChange={(e) => setPort(e.target.value) + setIsConfigPort(false)}
              className="port"
              type="number"
              style={next && checkPort ? { border: "1px solid #ea5167" } : {}}
            />
          </>
        )}
        <div
          className="btn-container"
          style={{
            position: "absolute",
            bottom: 55,
          }}
        >
          {port != "" && selected != "" ? (
            <Link to="/Deploy">
              <button className="btn main hint" onClick={() => deploy()}>
                بعدی
              </button>
            </Link>
          ) : (
            <button className="btn main primary" onClick={() => setNext(true)}>
              بعدی
            </button>
          )}
          <Link to="/Draggable">
            <button className="btn main primary" onClick={() => clearInfo()}>
              قبلی
            </button>
          </Link>
        </div>
      </div>
      {showApps && (
        <div className="apps-back" onClick={() => setShowApps(!showApps)}></div>
      )}
    </Layout>
  );
}
export default SelectApps;
