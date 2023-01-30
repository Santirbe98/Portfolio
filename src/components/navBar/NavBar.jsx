import { IconButton } from '@chakra-ui/button';
import { HamburgerIcon } from '@chakra-ui/icons';
import React from 'react';

const NavBar = props => {
  return (
    <>
      <IconButton
        size="md"
        fontSize="lg"
        variant="ghost"
        color="current"
        marginLeft="2"
        icon={<HamburgerIcon />}
        {...props}
      />
    </>
  );
};

export default NavBar;
