import styled from "styled-components";
import { StyledButton } from "../StyledButton.js";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input``;

const Label = styled.label`
  font-weight: ;
`;

export default function Form({ formName, defaultData, onAddPiece, onClick }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onAddPiece(data);
  }
  return (
    <FormContainer aria-labelledby={formName} onSubmit={handleSubmit}>
      <Label htmlFor="image-url">IMAGE URL</Label>
      <Input
        id="image-url"
        name="image"
        type="text"
        defaultValue={defaultData?.image}
        required
      />
      <Label htmlFor="name">ARTIST</Label>
      <Input
        id="artist name"
        name="artistName"
        type="text"
        defaultValue={defaultData?.artistName}
        required
      />
      <Label htmlFor="location">LOCATION</Label>
      <Input
        id="location"
        name="location"
        type="text"
        defaultValue={defaultData?.location}
        required
      />

      <Label htmlFor="type">TYPE</Label>
      <Input
        name="type"
        id="type"
        type="text"
        defaultValue={defaultData?.type}
        required
      />
      <StyledButton type="submit">Add</StyledButton>
      <StyledButton onClick={onClick}>Cancel</StyledButton>
    </FormContainer>
  );
}
