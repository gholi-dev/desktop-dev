import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./global.style";
import Auth from "./routes/auth/auth.component";
import Config from "./routes/config/config.component";
import Directory from "./routes/directory/directory.component";
import Init from "./routes/init/init.component";
import Navigation from "./routes/navigation/navigation.component";
import Upload from "./routes/uplaod/upload.component";

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Directory />} />
          <Route path="auth" element={<Auth />} />
          <Route path="config" element={<Config />} />
          <Route path="init" element={<Init />} />
          <Route path="upload" element={<Upload />} />
        </Route>
      </Routes>
    </Fragment>
  );
};

export default App;
