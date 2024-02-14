/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Container from "../GlobalComponents/Container";
import Icon from "../GlobalComponents/Icon";
import GymProgramCard from "./GymProgramCard";
import GymSubtitle from "./GymSubtitle";
import GymTitle from "./GymTitle";

const GymProgram = () => (
  <div css={styles} className="gymProgram">
    <GymTitle />
    <Icon />
    <GymSubtitle />
    <Container>
      <GymProgramCard
        title="Basic Fitness"
        desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />
      <GymProgramCard
        title="Advanced Muscle Course"
        desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />
      <GymProgramCard
        title="New Gym Training"
        desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />
      <GymProgramCard
        title="Yoga Training"
        desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />
      <GymProgramCard
        title="Basic Muscle Course"
        desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />
      <GymProgramCard
        title="Body Building Course"
        desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />
    </Container>
  </div>
);

const styles = css`
  width: 100%;
  min-height: 100vh;
  text-align: center;
  padding: 120px 0;
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 40px 0;
  }
  @media (max-width: 700px) {
    .container {
      flex-direction: column;
      justify-content: flex-start;
    }
  }
  @media (min-width: 701px) and (max-width: 1100px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
  }
`;

export default GymProgram;
