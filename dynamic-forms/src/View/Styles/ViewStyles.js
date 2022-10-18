import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-color);
`;
export const Heading = styled.div`
  width: 40%;
  height: 3em;
  min-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  h2 {
    color: #ffffff;
    text-transform: capitalize;
    font-size: 2rem;
  }
`;
export const Form = styled.form`
  background-color: var(--secondary-color);
  width: 40%;
  min-width: 300px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  padding-top: 1rem;
  filter: drop-shadow(0 0 5px #000);
  max-width: 50%;
`;
export const FieldsWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
`;
export const Input = styled.input`
  flex-grow: 1;
  height: 3em;
  outline: none;
  border: none;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 0.2rem;
`;
export const IconWrapper = styled.div`
  width: 100%;
  min-height: 2em;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  span {
    margin-right: 1rem;
    cursor: pointer;
    .minus {
      color: #ff0000;
    }
    i {
      font-size: 1.5em;
      color: var(--primary-color);
    }
  }
`;