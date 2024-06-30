import LoginField from '../LoginPage/LoginField';
import Logo from '../LoginPage/Logo';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import "@fontsource/syne"; // Defaults to weight 400
import "@fontsource/syne/800.css"; // Specify weight

const Register = () => {
  const navigate = useNavigate();
  return (
    <Box
      style={{
        width: '100%',
        position: 'relative',
        backgroundColor: '#232323',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        gap: '10rem',
        lineHeight: 'normal',
        letterSpacing: 'normal',
      }}>
      <Button sx={{ top: '3rem', left: '3rem', position: 'relative' }} onClick={() => navigate('/')}>
        <img
          style={{
            width: '63px',
            height: '63px',
            overflow: 'hidden',
            flexShrink: '0',
          }}
          src='/arrow-leftcircle.svg'
        />
      </Button>
      <section
        style={{
          alignSelf: 'stretch',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'center',
          maxWidth: '100%',
          textAlign: 'center',
          fontSize: '98px',
          color: '#ffcc01',
          fontFamily: 'Syne',
        }}>
        <Box
          style={{
            width: '908px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            gap: '18px',
            maxWidth: '100%',
          }}>
          <h1
            style={{
              margin: '0',
              alignSelf: 'stretch',
              height: '118px',
              position: 'relative',
              fontSize: 'inherit',
              fontWeight: '800',
              fontFamily: 'inherit',
              display: 'inline-block',
            }}>
            <span>IDO</span>
            <span style={{ color: '#fff' }}>MOVES</span>
          </h1>
          <LoginField password='FALSE' type='Sign up' />
          <Logo />
        </Box>
      </section>
    </Box>
  );
};

export default Register;
