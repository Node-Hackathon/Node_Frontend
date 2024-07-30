import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem 1rem;
`;

export const Text = styled.span<{
  color?: string;
  fontSize?: string;
  fontWeight?: string;
}>`
  color: ${(props) => props.color || 'black'};
  font-size: ${(props) => props.fontSize || '16px'};
  font-weight: ${(props) => props.fontWeight || '400'};
`;

export const Profile = styled.div`
  position: relative;

  width: fit-content;
  height: fit-content;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;

export const AddProfile = styled.svg`
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const Name = styled.div`
  width: 100%;
  height: fit-content;

  margin-top: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;

export const Info = styled.div`
  width: 100%;
  height: fit-content;

  margin-top: 30px;
  padding: 1rem 2rem;

  border-top: 0.5px solid gray;
`;

export const Table = styled.table`
  width: 100%;
  height: fit-content;

  text-align: left;

  border-collapse: collapse;
`;

export const TableRow = styled.tr`
  width: 100%;
  height: fit-content;
`;

export const TableCell = styled.td<{ width?: string; color?: string }>`
  width: ${(props) => props.width || '30%'};
  height: fit-content;

  padding: 0.7rem 0rem;

  color: ${(props) => props.color || '#9B9B9B'};
  font-size: 15px;
  font-weight: 600;
`;

export const EditBtn = styled.div`
  width: 90%;
  height: fit-content;

  text-align: center;
  color: white;

  margin: 0 auto;
  padding: 1rem 0rem;
  border-radius: 8px;

  background-color: #5fcf89;
`;
