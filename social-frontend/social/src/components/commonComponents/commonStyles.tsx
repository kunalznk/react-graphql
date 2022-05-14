import styled from "styled-components";
// import "../../globalStyles.css";

export const FlexRow = styled.div((props) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "start",
}));

export const FlexColumn = styled.div((props) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
}));

export const UrlText = styled.a`
  font-size: 14px;
  color: #4286f4;
  text-decoration: underline !important;
  cursor: pointer;
  word-break: break-all;
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fafbff;
  min-height: 100vh;
  flex: 1;
`;

export const PageBody = styled.div`
  position: relative;
  display: block;
`;

export const PageContent = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  margin-left: 90px;
  // margin-right: 50px;
`;

export const WhiteSection = styled.div((props) => ({
  borderRadius: "4px",
  border: "solid 1px #f6f6f6",
  backgroundColor: "#ffffff",
}));

export const Padding8 = styled.div(
  (props) => `
padding: 8px;
`
);
export const Padding16 = styled.div(
  (props) => `
padding: 16px;
`
);
export const FlexColumnSpaceBetween = styled.div(
  (props) => `
display: flex;
flex-direction: column;
justify-content: space-between;
`
);
export const Space16 = styled.div`
  margin-bottom: 1rem;
`;
export const Space8 = styled.div`
  margin-bottom: 0.5rem;
`;

export const Line = styled.div`
  border: 1px solid #dae2f2;
`;

export const ScrollView = {
  overflowY: "scroll",
};

export const WhiteCard = styled.div`
  padding: 8px 8px 14px;
  border-radius: 8px;
  box-shadow: 0 -12px 22px 0 rgba(82, 87, 104, 0.05),
    0 12px 22px 0 rgba(82, 87, 104, 0.1);
  background-color: #ffffff;
  flex: 1;
  @media screen and (min-width: 0) and (max-width: 768px) and (orientation: portrait),
    screen and (min-width: 0) and (max-width: 1024px) and (orientation: landscape) {
    padding: 8px;
  }
`;

export const ScrollWhiteCard = styled.div`
  padding: 8px 8px 14px;
  border-radius: 8px;
  box-shadow: 0 -12px 22px 0 rgba(82, 87, 104, 0.05),
    0 12px 22px 0 rgba(82, 87, 104, 0.1);
  background-color: #ffffff;
  flex: 1;
  @media screen and (min-width: 0) and (max-width: 768px) and (orientation: portrait),
    screen and (min-width: 0) and (max-width: 1024px) and (orientation: landscape) {
    padding: 8px;
  }
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
  }
`;

export const AccountComponent32 = styled.div`
  height: 32px;
  width: 32px;
  background-color: #ffc001;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: #264aa5;
`;
export const LinkText = styled.div`
  height: 36px;
  margin: 8px 0 0;
  padding: 0 0 0 8px;
  border-radius: 4px;
  border: solid 1px #cfd0d4;
`;

export const LigthBlueButton = styled.button`
  padding: 6px 22px;
  border-radius: 8px;
  background-color: #e9ecf6;
  border: none;
`;

export const AccountImage = styled.img`
  border-radius: 50%;
  height: 55px;
  width: 55px;
`;

export const LoadingShimmer = styled.div(
  (props: { height?: string; width?: string }) => `
    height: ${props.height ? props.height : "100%"};
    width: ${props.width ? props.width : "100%"};
    background-color: #e8e8e8;
    background-color: #eee;
    border-radius: 7px;
    @keyframes placeHolderShimmer {
      0% {
        background-position: -468px 0;
      }
      100% {
        background-position: 468px 0;
      }
    }
  `
);

export const AnimatedBackground = styled.div(
  (props) => `
    animation-duration: 1.25s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeHolderShimmer;
    animation-timing-function: linear;
    background: darkgray;
    background: linear-gradient(to right, #eeeeee 10%, #dddddd 18%, #eeeeee 33%);
    background-size: 800px 104px;
    height: inherit;
    position: relative;
    border-radius: 7px;
  `
);

export const DomainLevel = styled.div`
  width: 128px;
  height: 32px;
  background-color: #fcb404;
  border-radius: 16px;
  font-size: 15px;
  font-weight: bold;
  line-height: 32px;
  text-align: center;
  color: #fafbff;
  margin-left: 24px;
`;

export const BlueButton = styled.button`
  background: #e9ecf6;
  display: flex;
  /* justifycontent: center;
  alignitems: center; */
  gap: 8px;
  border: none;
  height: 100%;
  border-radius: 4px;
  padding: 4px;
  text-align: justify;
`;

export const RedButton = styled.button`
  background: #f9d6d4;
  color: #e3322c;
  display: flex;
  justifycontent: center;
  alignitems: center;
  gap: 8px;
  border: none;
  height: 32px;
  border-radius: 4px;
  padding: 4px;
`;

export const RightScrollableContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 0.75;
  gap: 32px;
  align-items: stretch;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
  }
`;

export const LoginButton = styled.button`
  border: none;
  background-color: "#fafbff";
  border-radius: 4px;
  height: 40px;
  width: 300px;
  color: #a97cbf;
  font-weight: 600;
  padding: 8px;
`;

export const GradientButton = styled.button`
  background-image: linear-gradient(261deg, #7e007d, #e3322c, #ffc001);
  border-radius: 4px;
  border: none;
  padding: 8px 16px;
`;

export interface ColourOption {
  readonly value: string;
  readonly label: string;
  readonly color: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}
