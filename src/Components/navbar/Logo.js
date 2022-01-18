import Link from 'react'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import logo from '../../lib/trade.png'
const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  img {
    transition: 200ms ease;
  }
  &:hover img {
    transform: rotate(20deg);
  }
`
const Logo = () => {
  const footPrintImg = `/images/scienceLogo${useColorModeValue(
    '',
    '-dark'
  )}.png`

  return (
    <LogoBox>
      <img src={logo} width={60} height={60} alt="logo" />
    </LogoBox>
  )
}
export default Logo
