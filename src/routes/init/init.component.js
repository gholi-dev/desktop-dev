import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import ActionContainer from "../../components/action-container/action-container.component";
import Button from "../../components/button/button.component";
import Gap from "../../components/gap/gap.component";
import LayoutDeploy from "../../components/layout-deploy/layout-deploy.component";
import Title from "../../components/title/title.component";
import UploadInfo from "../../components/upload-info/upload-info.component";

const Init = () => {
  const { log } = useSelector((state) => state.deploy);

  return (
    <LayoutDeploy>
      <div style={{ marginBottom: 15 }}>
        <Title text="در حال آماده‌سازی..." />

        <Gap h={15} />
        <UploadInfo log={log.toString()} disabled />
        <Gap h={20} />
        <ActionContainer justifyContent="center">
          <Button>لغو</Button>
        </ActionContainer>
      </div>
    </LayoutDeploy>
  );
};

export default Init;
