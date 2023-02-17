import React from "react";
import { useRouterContext, TitleProps } from "@pankod/refine-core";
import { Button } from "@pankod/refine-mui";

import { logo, yariga } from 'assets';

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button fullWidth variant="text" disableRipple>
      <Link to="/">
        {collapsed ? (
          <img src={require("./logolg.png")} alt="Yariga" width="28px" />
        ) : (
          <img src={require("./logosm.png")} alt="Refine" width="140px" />
        )}
      </Link>
    </Button>
  );
};
