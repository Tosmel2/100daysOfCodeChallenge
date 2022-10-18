import React, { useState } from "react";
import {
  Container,
  FieldsWrapper,
  Form,
  Heading,
  IconWrapper,
  Input,
} from "./Styles/ViewStyles";
import { handleAddForms, handleChange, removeForm } from "./Util/handlers";

const Main = () => {
  const [formField, setFormField] = useState([""]);

  return (
    <Container>
      <Heading>
        <h2>dynamic Forms</h2>
      </Heading>
      <Form>
        {formField.length > 0 &&
          formField.map((val, index) => (
            <FieldsWrapper key={index}>
              <Input
                name="name"
                placeholder={`Enter menu name ${index + 1}`}
                value={val}
                onChange={(e) =>
                  handleChange({ e, index, formField, setFormField })
                }
              />
              <IconWrapper>
                <span
                  onClick={(e) =>
                    removeForm({ e, index, setFormField, formField })
                  }
                >
                  <i className="fas fa-minus-circle minus"></i>
                </span>

                <span onClick={(e) => handleAddForms({ e, setFormField })}>
                  <i className="fas fa-plus-circle"></i>
                </span>
              </IconWrapper>
            </FieldsWrapper>
          ))}
      </Form>
    </Container>
  );
};

export default Main;