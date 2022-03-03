import React from "react";

import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      About
      <Button onClick={() => navigate("/")}>to index </Button>
    </div>
  );
};

export default About;
