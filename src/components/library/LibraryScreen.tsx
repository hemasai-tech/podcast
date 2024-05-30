import React from 'react';
import { Box, Text } from 'react-native-design-utility';

import { DBContext } from '../../contexts/DBContext';

const LibraryScreen = () => {
  const dbContext = React.useContext(DBContext);

  return (
    <Box f={1}>
      {dbContext.podcasts.map((podcast) => (
        <Box key={podcast.feedUrl} bg="white" mb="md" p="sm" m={10}>
          <Text>{podcast.name}</Text>
        </Box>
      ))}
    </Box>
  );
};

export default LibraryScreen;