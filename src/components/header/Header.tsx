import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import CancelIcon from '@mui/icons-material/Cancel';
import CloseIcon from '@mui/icons-material/Close';
//import AdbIcon from '@mui/icons-material/Adb';
import styles from './Header.module.css';
import { Link, NavLink } from 'react-router-dom';
import { routeUrlList } from '../../DataMock/data';
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';

const drawerWidth = '100%';
const pages = routeUrlList;
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}
const Header = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (event: any) => {
    setAnchorElNav(null);
    // console.log(event.currentTarget)
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const drawer = (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <div className={styles.nav_mobile__close}>
          Triveni Almirah
          <span className={styles.nav_mobile__close___icon}>
            <CloseIcon onClick={handleDrawerToggle} />
          </span>
        </div>

      </Typography>
      <Divider />
      <div className={styles.nav_mobile__image__container}>
        <div className={styles.nav_mobile__image__container___item}>
          <div className={styles.nav_mobile__image__container___item__content}>
            <div className={styles.nav_mobile__image__container___item__content__title}>Item 1</div>
          </div>
        </div>
        <div className={styles.nav_mobile__image__container___item}>
          <div className={styles.nav_mobile__image__container___item__content}>
          <div className={styles.nav_mobile__image__container___item__content__title}>Item 2</div>
          </div>
        </div>
        <div className={styles.nav_mobile__image__container___item}>
          <div className={styles.nav_mobile__image__container___item__content}>
            <div className={styles.nav_mobile__image__container___item__content__title}>Item 3</div>
          </div>
        </div>
        <div className={styles.nav_mobile__image__container___item}>
          <div className={styles.nav_mobile__image__container___item__content}>
          <div className={styles.nav_mobile__image__container___item__content__title}>Item 4</div>
          </div>
        </div>
        <div className={styles.nav_mobile__image__container___item}>
          <div className={styles.nav_mobile__image__container___item__content}>
          <div className={styles.nav_mobile__image__container___item__content__title}>Item 5</div>
          </div>
        </div>
        <div className={styles.nav_mobile__image__container___item}>
          <div className={styles.nav_mobile__image__container___item__content}>
          <div className={styles.nav_mobile__image__container___item__content__title}>Item 6</div>
          </div>
        </div>
      </div>
      <List>
        {pages.map((item) => (
          <ListItem key={item.name} disablePadding onClick={handleDrawerToggle}>
            <ListItemButton sx={{ textAlign: 'start' }}>
              <NavLink to={'/' + item.url.toLowerCase()} className={styles.nav_mobile__link}>
                <ListItemText primary={item.name} />
              </NavLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const container = window !== undefined ? () => window().document.body : undefined;


  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="static" component="nav">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                //   letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Triveni Almirah
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleDrawerToggle}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                  width: drawerWidth
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.url} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                      <NavLink to={'/' + page.url.toLowerCase()}>{page.name} --- </NavLink>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>


            <Typography
              variant="h5"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                //   letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none'
              }}
            >
              Triveni Almirah
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page.url}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block', textDecoration: 'none' }}
                >
                  <NavLink to={'/' + page.url.toLowerCase()} className={styles.header_Link}>{page.name}</NavLink>
                </Button>
              ))}
            </Box>

            {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
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
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};
export default Header;
