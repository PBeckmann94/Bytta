import React from "react";
import { useToast, Button } from "@chakra-ui/react";

const LoginToast = () => {
  const toast = useToast();

  return (
    <Button
      onClick={() => {
        toast({
          title: 'Godkjent.',
          description: "Logget inn.",
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      }}
    >
      Logg Inn
    </Button>
  );
};

export default LoginToast;