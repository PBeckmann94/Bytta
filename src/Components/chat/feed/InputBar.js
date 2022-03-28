import { Input, Box } from '@chakra-ui/react'
import { useState } from 'react'

function InputBar() {
  const [value, setValue] = useState('')
  const handleChange = event => setValue(event.target.value)
  const handleEnter = event => {
    if (event.key === 'Enter' && value !== '') {
      console.log('Melding i useState: ' + value)
      setValue('')
    }
    // burde sikkert sjekke etter kun mellomrom og.
    // mangler kun brukere for a teste chat skikkelig
  }

  return (
    <Box justifySelf="end" textAlign="end">
      <Input
        placeholder="Enter a message"
        onChange={handleChange}
        value={value}
        onKeyPress={handleEnter}
      />
    </Box>
  )
}
export default InputBar
