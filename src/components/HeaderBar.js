import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { AppBar, styled } from '@mui/material';
import { Menu } from '@mui/icons-material';
import UserProfile from './Profile/UserProfile';

export const Header = styled(AppBar)`
z-index: 1201;
background: #fff;
height: 70px;
box-shadow: inset 0 -1px 0 0 #dadce0;
`;

const Heading = styled(Typography)`
color: #5F6368;
font-size: 24px;
margin-left: 25px;
`;

const HeaderBar = ({handleDrawer, open}) => {
    const logo = "https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png";
  return (
    <Header open={open}>
    <Toolbar>
      <IconButton
        onClick={handleDrawer}
        edge="start"
        sx={{
          marginRight: '20px',
        }}
      >
        <Menu />
        </IconButton>
        <img src={logo} alt="Logo"/>
      <Heading>
        Scribble
      </Heading>
      <UserProfile/>
    </Toolbar>
  </Header>
  )
}

export default HeaderBar