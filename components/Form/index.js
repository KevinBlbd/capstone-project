import styled from "styled-components";
import { StyledButton } from "../StyledButton.js";
import { StyledDropdown, StyledDropdownOption } from "../StyledButton";
import { formStyle } from "../StyleMain.js";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input``;

const Label = styled.label`
  font-weight: bold;
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
      <formStyle htmlFor="image-url">IMAGE URL</formStyle>
      <Input
        id="image-url"
        name="image"
        type="text"
        defaultValue={defaultData?.image}
        required
      />
      <formStyle htmlFor="name">ARTIST</formStyle>
      <Input
        id="artist name"
        name="artistName"
        type="text"
        defaultValue={defaultData?.artistName}
        required
      />
      <formStyle htmlFor="location">LOCATION</formStyle>
      <Input
        id="location"
        name="location"
        type="text"
        defaultValue={defaultData?.location}
        required
      />

      <formStyle htmlFor="type">TYPE</formStyle>
      <StyledDropdown id="type" name="type">
        <StyledDropdownOption value="graffiti">Graffiti</StyledDropdownOption>
        <StyledDropdownOption value="collage">Collage</StyledDropdownOption>
        <StyledDropdownOption value="tag">Tag</StyledDropdownOption>
        <StyledDropdownOption value="stencil">Stencil</StyledDropdownOption>
      </StyledDropdown>

      <StyledButton type="submit">ADD</StyledButton>
      <StyledButton onClick={onClick}>CANCEL</StyledButton>
    </FormContainer>
  );
}
