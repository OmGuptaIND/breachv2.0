import { useState } from "react";
import styled from "styled-components";
import Carousal from "./Carousal/Carousal";

export default function HeroPage() {
  const [current, setCurrent] = useState(0);

  return (
    <Container>
      <Carousal />
    </Container>
  );
}
const Container = styled.div`
  z-index: -1;
`;
