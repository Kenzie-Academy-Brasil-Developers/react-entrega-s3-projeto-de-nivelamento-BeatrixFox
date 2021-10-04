import styled from "styled-components";

export const Container = styled.div`
  color: darkblue;
  background: rgb(238, 174, 202);
  background: linear-gradient(
    90deg,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
  margin: 0 auto;
  header {
    display: flex;
    text-align: left;
    flex-direction: column;
    justify-content: center;
    p {
      padding: 5px;
    }
  }
  @media (min-width: 768px) {
    header {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
    }
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  input {
    margin: 1px 20px;
    height: 40px;
    border: 5px solid lightgray;
    border-radius: 10px;
    ::placeholder {
      color: darkblue;
      font-size: 20px;
    }
  }
  button {
    margin: 0 20px 20px;
    height: 60px;
    border: 5px solid lightgray;
    border-radius: 10px;
    color: white;
    font-size: 25px;
    background: rgb(0, 10, 10);
    background: linear-gradient(
      90deg,
      rgba(0, 10, 10, 1) 0%,
      rgba(19, 69, 143, 1) 50%,
      rgba(125, 185, 89, 1) 100%
    );
    padding: 5px 0;
  }

  @media (min-width: 768px) {
    width: 600px;
  }
`;
