import styled from 'styled-components';

const SearchBarContainer = styled.form`
  background-color: var(--snow);
  border-radius: 25px;
  height: 38px;
  padding: 0 0 0 20px;
  display: flex;
  position: relative;

  @media screen and (max-width: 1023px) {
    width: 200px;
    padding: 0 40px 0 20px;
  }

  svg {
    display: none;
    color: var(--gray);
    position: absolute;
    bottom: 0;
    top: 0;
    margin: auto;
    right: 20px;

    @media screen and (max-width: 1023px) {
      display: block;
    }
  }

  input {
    flex: 1 1 auto;
    font-size: 1.5rem;
  }

  button {
    @media screen and (max-width: 1023px) {
      display: none;
    }
  }
`;

export default SearchBarContainer;
