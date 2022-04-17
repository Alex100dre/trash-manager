import styled from 'styled-components';
import { Routes, Route } from "react-router-dom";
import TrashState from "../views/trash-state/trash-state";
import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography
} from "@mui/material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MenuIcon from '@mui/icons-material/Menu';
import {useState} from "react";

const StyledApp = styled.div`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
`;

const Content = styled.div`
  padding-top: 30px;
`

export function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  }

  return (
    <StyledApp>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Trash Manager
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Content>
        <Drawer
          anchor="right"
          open={isDrawerOpen}
          onClose={toggleDrawer}
        >
          <List>
            <ListItem>
              <ListItemIcon><CalendarMonthIcon/></ListItemIcon>
              <ListItemText>Planning</ListItemText>
            </ListItem>
          </List>
        </Drawer>
        <Routes>
          <Route path="/" element={<TrashState />} />
        </Routes>
      </Content>
    </StyledApp>
  );
}

export default App;
