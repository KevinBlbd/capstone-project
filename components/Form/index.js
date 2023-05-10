import styled from "styled-components";
import { StyledButton } from "../StyledButton.js";

const FormContainer = styled.form`
  display: grid;
  gap: 0.5rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: inherit;
  border: 3px solid black;
  width: 100%;
  border-radius: 0.5rem;
`;

const Textarea = styled.textarea`
  font-family: inherit;
  border: 3px solid black;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

const Label = styled.label`
  font-weight: bold;
`;

export default function Form({ formName, defaultData, onAddPiece }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onAddPiece(data);
  }
  return (
    <FormContainer aria-labelledby={formName} onSubmit={handleSubmit}>
      <Label htmlFor="image-url">Image Url</Label>
      <Input
        id="image-url"
        name="image"
        type="text"
        defaultValue={defaultData?.image}
        required
      />
      <Label htmlFor="location">Location</Label>
      <Input
        id="location"
        name="location"
        type="text"
        defaultValue={defaultData?.location}
        required
      />
      <Label htmlFor="name">Artist name</Label>
      <Input
        id="artist name"
        name="name"
        type="text"
        defaultValue={defaultData?.name}
        required
      />
      <Label htmlFor="type">Type of piece</Label>
      <Input
        name="type"
        id="type"
        type="text"
        defaultValue={defaultData?.type}
        required
      />
      <StyledButton type="submit">Add</StyledButton>
    </FormContainer>
  );
}
