
import styled from "@emotion/styled";

export const Controls = styled.ul`
  display: flex;
  justify-content: center;
 
`

export const ControlsItem = styled.li`
  border-radius: 10px;
  overflow: hidden;

  :not(:last-child) {
    margin-right: 12px;
    
  }
`

export const Button = styled.button`
  background-color: #cc37a2;
  color: #f5edf3;
  padding: 8px;
  text-transform: capitalize;
  
  :hover {
    background-color: #bc47d1;
  }
`