import * as React from 'react';
import styled from 'styled-components';

export const Appearance = () => {
  const [showDonut, setShowDonut] = React.useState<boolean>(false);
  return (
    <StyledAppearance>
      <button onClick={() => setShowDonut(!showDonut)}>
        {showDonut ? 'Hide Donut' : 'Show Donut'}
      </button>
      {showDonut && (
        <span aria-label='a delicious donut' role='img' data-testid='donut'>
          🍩
        </span>
      )}
    </StyledAppearance>
  );
};

const StyledAppearance = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 250px;
  margin: 0 auto;

  button {
    padding: 10px 20px;
    border: 2px #011627 solid;
    border-radius: 8px;
    width: 185px;
    background-color: #f3aad9;
    color: #011627;
    transition: all 0.05s linear;
    outline: 0;
  }

  span {
    font-size: 36px;
  }
`;
