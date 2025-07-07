import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

function Navbar() {
  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar>
          <HomeIcon sx={{ mr: 2 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Property Management
          </Typography>
          <Button color="inherit" component={RouterLink} to="/">
            Home
          </Button>
          <Button color="inherit" component={RouterLink} to="/properties">
            Properties
          </Button>
          <Button color="inherit" component={RouterLink} to="/add-property">
            Add Property
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar; 