import styled from "styled-components";

export const AppConfigContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 18px;
`;
export const SelectAppContainer = styled.div`
  width: 262px;
  height: 36px;
  padding: 10px;
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 19px;
  color: #d0e0ef;
  background: linear-gradient(
    180deg,
    rgba(98, 161, 254, 0.035) 0%,
    rgba(37, 38, 45, 0.31) 100%
  );
  border: 1px solid rgba(161, 201, 238, 0.1);
  border-radius: 8px;
  cursor: pointer;
`;

export const Refetch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  background: linear-gradient(92deg, #87fcc415 0%, #28c1f515 98.77%);
  cursor: pointer;
  border-radius: 6px;
`;
