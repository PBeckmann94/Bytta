import React from 'react'
import { Box, Stack, Button, Link } from '@chakra-ui/react'
import { MenuItem } from './Header'
import ThemeToggleButton from './ThemeToggleButton'
const AccountAndTheme = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
      flexBasis={{ base: '100%', md: 'auto' }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={['center', 'space-between', 'flex-end', 'flex-end']}
        direction={['column', 'row', 'row', 'row']}
        pt={[4, 4, 0, 0]}
      >
        <Link to="/signup">
          <Button
            variant="default"
            size="sm"
            rounded="md"
            _hover={{
              bg: ['primary.100', 'primary.100', 'primary.600', 'primary.600']
            }}
          >
            Create Account
          </Button>
        </Link>
        <ThemeToggleButton />
      </Stack>
    </Box>
  )
}
export default AccountAndTheme
