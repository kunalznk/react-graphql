import React from "react";
import {
  FlexColumnSpaceBetween,
  FlexRow,
} from "../commonComponents/commonStyles";
import { Carousel } from "react-responsive-carousel";

export const Card = () => {
  return (
    <FlexColumnSpaceBetween
      style={{
        border: "solid 4px red",
      }}
    >
      <FlexRow
        style={{
          border: "solid 4px blue",
        }}
      >
        <FlexRow>userIcon</FlexRow>
        <FlexRow>UserName</FlexRow>
        <FlexRow>Option</FlexRow>
      </FlexRow>
      <FlexRow>
        <img src="https://i.picsum.photos/id/318/200/300.jpg?hmac=WEC_ft7NGxXgRDHWhj1tz7_gmAOrnI9d5IiS98juw8I"></img>
      </FlexRow>
      <FlexRow
        style={{
          border: "solid 4px black",
        }}
      >
        <FlexRow>
          <FlexRow>Like</FlexRow>
          <FlexRow>Comment</FlexRow>
        </FlexRow>

        <FlexRow>Save</FlexRow>
      </FlexRow>
    </FlexColumnSpaceBetween>
  );
};
