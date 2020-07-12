import * as React from "react"
import styled from "@emotion/styled"
import { keyframes } from "@emotion/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const bounce = keyframes`
  0% {
    border: 1px solid #A662C0;
    transform: scale(1);
  }
  50% {
    border: 1px solid #A662C0;
    transform: scale(1.1);
  }  
  100% {
    border: 1px solid #A662C0;
    transform: scale(1);
  }

`
const Button = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50px;
  background: #a662c1;
  padding: 10px;
  text-align: center;
  border: none;
  cursor: pointer;
  color: #fff;
  font-size: 30px;
  outline: none;
  animation: ${bounce} 1s ease infinite;
  &:before {
    content: "";
    stroke: black;
    width: 100px;
    bakcground: black;
    height: 100px;
  }
`

type Props = {
  onOpen: () => void
  icon: [any, any]
}

export const CircleButton: React.FC<Props> = ({ onOpen, icon }) => {
  return (
    <Button onClick={onOpen}>
      <FontAwesomeIcon icon={icon} />
    </Button>
  )
}
