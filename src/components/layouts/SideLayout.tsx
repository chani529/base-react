import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SideLayout = () => {
  return (
    <div className="sidebar">
      <$Div>
        <Link to="/iss" className="btn btn-primary">
          이슈
        </Link>
      </$Div>
      <$Div>
        <Link to="/test1" className="btn btn-primary">
          TEST
        </Link>
      </$Div>
      <$Div>
        <Link to="/test2" className="btn btn-primary">
          TEST2
        </Link>
      </$Div>
    </div>
  );
};

export default SideLayout;

const $Div = styled.div`
  margin-left: 10px;
  margin-top: 10px;
`;
