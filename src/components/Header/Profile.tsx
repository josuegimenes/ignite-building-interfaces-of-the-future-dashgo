import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
        <Text>Josué Gimenes</Text>
        <Text color="gray.300" fontSize="small">
            josuegalvares@gmail.com
        </Text>
      </Box>
      )}

      <Avatar size="md" name="Josué Gimenes" src="https://github.com/josuegimenes.png" />
    </Flex>
  );
}