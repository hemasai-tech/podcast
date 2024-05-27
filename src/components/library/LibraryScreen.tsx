import React from 'react'
import { Box, Text, UtilityThemeProvider } from 'react-native-design-utility'

const LibraryScreen = () => {
  return (
    <UtilityThemeProvider>
      <Box f={1} center>
        <Text>
          LibraryScreen
        </Text>
      </Box>
    </UtilityThemeProvider>
  )
}

export default LibraryScreen