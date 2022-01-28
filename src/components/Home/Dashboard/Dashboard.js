import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AddBoxIcon from '@mui/icons-material/AddBox';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import './Dashboard.css'
import MakeAdmin from './MakeAdmin/MakeAdmin';
import AddBlog from './AddBlog/AddBlog';
import Addoffer from './Addoffer/Addoffer';

const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
       <div div className='dash-nav text-start'> 
      
           <>
           <Link to='/'> <li> <HomeIcon /> Home</li> </Link>
            <Link to={`${url}`}><li><AssignmentIcon/> Dashboard</li></Link>
            <Link to={`${url}/addBlog`}><li><AddBoxIcon/> Add Experience</li></Link>
            <Link to={`${url}/makeAdmin`}><li><GroupAddIcon/> Make Admin</li></Link>
           </>
           <Divider />
           <>
           <Link to='/'> <li> <HomeIcon /> Home</li> </Link>
            <Link to={`${url}`}><li><AssignmentIcon/> Dashboard</li></Link>
            <Link to={`${url}/addBlog`}><li><AddBoxIcon/> Add Experience</li></Link>
            <Link to={`${url}/addOffer`}><li><AddBoxIcon/> Add Offer</li></Link>
            <Link to={`${url}/makeAdmin`}><li><GroupAddIcon/> Make Admin</li></Link>
           </>
       </div>
      </List>
      <Divider />
    
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch>
        <Route exact path={`${path}`}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/makeAdmin`}>
        <MakeAdmin/>
        </Route>
        <Route path={`${path}/addBlog`}>
        <AddBlog/>
        </Route>
        <Route path={`${path}/addOffer`}>
        <Addoffer/>
        </Route>
      </Switch>
       
       
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
export default Dashboard;