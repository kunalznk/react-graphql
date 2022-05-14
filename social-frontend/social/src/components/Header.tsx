import { height } from "@mui/system";
import React, { ReactElement } from "react";
import { FlexRow } from "./commonComponents/commonStyles";

export const Header = (): ReactElement => {
  return (
    <FlexRow>
      <FlexRow
        style={{
          justifyContent: "space-between",
        }}
      >
        <FlexRow
          style={{
            justifyContent: "flex-start",
          }}
        >
          <span>Social</span>
        </FlexRow>
        <FlexRow>
          <span>Search</span>
        </FlexRow>
        <FlexRow
          style={{
            justifyContent: "space-between",
            alignSelf: "flex-end",
          }}
        >
          <FlexRow>Icon</FlexRow>
          <FlexRow>Icon</FlexRow>
          <FlexRow>Icon</FlexRow>
          <FlexRow>Icon</FlexRow>
          <FlexRow>Icon</FlexRow>
          <FlexRow>Icon</FlexRow>
        </FlexRow>
      </FlexRow>
    </FlexRow>
  );
};
