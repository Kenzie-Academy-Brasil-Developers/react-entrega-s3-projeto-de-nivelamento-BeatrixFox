import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: lightcyan;
  color: black;
`;
export const SectionProducts = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: lightgreen;
  color: black;
  background: rgb(249, 144, 243);
  background: linear-gradient(
    347deg,
    rgba(249, 144, 243, 1) 0%,
    rgba(14, 214, 202, 1) 47%,
    rgba(0, 255, 111, 1) 100%
  );
`;

export const ItemList = styled.div`
  border: 2px solid lightslategray;
  border-radius: 10px;
  margin: 5px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-content: space-around;
  width: 300px;
  height: 320px;

  h5 {
    height: 100px;
    margin: 10px auto;
  }
  p {
    margin: 10px auto;
    height: 300px;
    font-size: 15px;
    padding: 5px;
  }
  span {
    padding-top: 5px;
    border-top: 2px solid lightslategray;
  }
`;
