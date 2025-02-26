import { useState } from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  max-width: 600px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 15px;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.background};
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.primary};
  }
`;

interface SearchBarProps {
  onSearch: (ingredients: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [input, setInput] = useState("");

  return (
    <SearchContainer>
      <Input
        id="ingredient-search" // ID kopplat till label
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="What do I have..."
        aria-label="Enter ingredients"
      />
      <Button onClick={() => onSearch(input)}>Search</Button>
    </SearchContainer>
  );
};

export default SearchBar;
