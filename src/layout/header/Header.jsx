import React from 'react'
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
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { createTheme, ThemeProvider, CssBaseline,Stack } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import FitbitIcon from '@mui/icons-material/Fitbit';let id=window.sessionStorage.getItem("userId")
const pages = [{name:'Home',link:""},{name:'Products',link:""},{name:'Brands',link:"/brands"},{name:'About us',link:"/about"},{name:'Contact',link:""}];
const settings = [{name:'Login',link:"/login"},{name:'Profile',link:`/profile/${id}`},{name:'Dashboard',link:""},{name:'Logout',link:"/logout"}];
const Header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
    //remove the underline of link tag
    const StyledLink = styled(Link)(({ theme }) => ({
      textDecoration: 'none',
      color: theme.palette.info.main, // or any other color
      color:'black',
      '&:hover':{color:'#00b5b7'}
      
    }));
    // Create a theme with custom typography
const theme = createTheme({
  typography: {
    // fontFamily: 'Nunito Sans,Roboto, Arial, sans-serif,',  // Specify the font family
  },
});
 
let isLogged=window.sessionStorage.getItem("isLogged")
let proImg=window.sessionStorage.getItem("proImg")
let firstName=window.sessionStorage.getItem("firstName")
let userId=window.sessionStorage.getItem("userId")

// let userData=window.sessionStorage.getItem("token")
// let parseData=JSON.parse(userData)
// console.log("Data",parseData , parseData.fname)

  return (
    <AppBar position="static" 
    sx={{background:'white',color:'black',borderBottomLeftRadius:16,borderBottomRightRadius:16}}
    >
    <Container maxWidth="xl" sx={{bgcolor:'#F3F8FF'}}>
      <Toolbar disableGutters>
      <FitbitIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> 
       
        <Typography
          variant="h6"
          noWrap
          component="a"
          // href="#app-bar-with-responsive-menu"
           sx={{
            mr: 6,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.2rem',
            color: 'black',
            textDecoration: 'none',
          }}
        >
 <Link to='/'>
          Fitnova
          </Link>
        </Typography>
        
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color='#1c1c28'
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
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            {pages.map((page) => (
              <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                <StyledLink to={page.link}><Typography sx={{ textAlign: 'center',textTransform:'none' }}>{page.name}</Typography></StyledLink>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <FitbitIcon sx={{ display: { xs: 'flex', md: 'none' }}} />
        <Typography
          variant="h5"
          noWrap
          component="a"
          // href="#app-bar-with-responsive-menu"
          Link="/"
          sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color:'black',
            textDecoration: 'none',
          }}
        >
        <Link to="/">
        Fitnova
        </Link>
        </Typography>
        
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
            <StyledLink to={page.link} sx={{textDecoration:'none',mx:2}}>
 <ThemeProvider theme={theme}>
 <CssBaseline />
            <Typography
               key={page.name}
              onClick={handleCloseNavMenu}
              sx={{'&:hover':{color:'#00b5b7'}, color: 'black', display:'block',textDecoration:'none',fontSize:'18px',fontWeight:400,textTransform:'none'}}
            >
              {page.name}
            </Typography>
            </ThemeProvider>
            </StyledLink>
          ))}
        </Box>
{isLogged==="true"?
        <Box sx={{ flexGrow: 0 }}>
          <Stack sx={{display:'inline-block', paddingRight:1,color:'#133E87',fontWeight:"medium"}}>Hi,{firstName} </Stack>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src={proImg} />
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
              <MenuItem key={setting.name} onClick={handleCloseUserMenu}>
              <StyledLink to={setting.link}><>{setting.name}</></StyledLink>
              </MenuItem>
            ))}
          </Menu>
        </Box>:<Tooltip title="Login" arrow='down'><Link to='/login'><Button endIcon={<LoginIcon/>} sx={{textTransform:'capitalize',fontSize:'18px',fontWeight:'semi  bold', '&:hover':{color:'green'}}}>Login</Button></Link></Tooltip>
}
      </Toolbar>
    </Container>
  </AppBar>
  )
}

export default Header