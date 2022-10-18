
export const handleAddForms = ({ e, setFormField }) => {
  e.preventDefault();
  setFormField((prev) => [...prev, ""]);
};

export const removeForm = ({ e, index, formField, setFormField }) => {
  e.preventDefault();
  if (formField.length === 1) return;

  let findForm2remove =
    formField.length > 0 && formField.filter((fields, idx) => idx !== index);
  setFormField(() => findForm2remove);
};

export const handleChange = ({
  e: { target },
  index,
  formField,
  setFormField,
}) => {
  let findFied2Updated = formField.map((value, idx) => {
    if (index === idx) {
      value = target.value;
    }
    return value;
  });

  setFormField(() => findFied2Updated);
};