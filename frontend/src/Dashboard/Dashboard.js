import React from "react";
import { styled } from "@mui/system";
import SideButton from "./SideButton";

const MainContainer = styled("div")({
  width: "100%",
  height: "100%",
  backgroundColor: "#36393f",
});

const Dashboard = () => {
  return (
    <MainContainer>
      <SideButton />
      <style>{'body { background-color: #5865F2; }'}</style>
    </MainContainer>
    
  );
};

export default Dashboard;
