import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';

const NavDrawer = ({ open, close }) => {
  const router = useRouter();

  return (
    <Drawer anchor="left" open={open} onClose={close}>
      <Box sx={{ width: 250 }} role="presentation" onClick={close} onKeyDown={close}>
        <List>
          <ListItem button onClick={() => router.push('/')}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>

            <ListItemText primary="Home" />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

NavDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};

export default NavDrawer;
