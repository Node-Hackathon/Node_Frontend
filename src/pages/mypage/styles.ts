import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: calc(100% - 4rem);

  padding: 0rem 1.5rem;
`;

export const Text = styled.span<{
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  $marginLeft?: string;
}>`
  color: ${(props) => props.color || 'black'};
  font-size: ${(props) => props.fontSize || '16px'};
  font-weight: ${(props) => props.fontWeight || '500'};
  margin-left: ${(props) => props.$marginLeft || '10px'};
`;

export const Welcome = styled.div`
  width: 100%;
  height: fit-content;

  padding: 2rem 0rem;
`;

export const Category = styled.div`
  width: 100%;
  height: fit-content;
`;

export const List = styled.div`
  width: 100%;
  height: fit-content;

  padding: 1rem 1rem;
  margin-bottom: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: start;

  border: 1px solid #5fcf89;
  border-radius: 10px;
  white-space: nowrap;
`;

export const Quit = styled.div`
  width: 100%;
  height: fit-content;

  padding-top: 0.5rem;
  padding-bottom: 2rem;
`;
