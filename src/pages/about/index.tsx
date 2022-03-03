import React from "react";

import { Button } from "antd";
import { useNavigate } from "react-router-dom";

import Test from "../../components/test";

const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      About
      <Button onClick={() => navigate("/")}>to index </Button>
      <Test tag="tag" />
    </div>
  );
};

export default About;
