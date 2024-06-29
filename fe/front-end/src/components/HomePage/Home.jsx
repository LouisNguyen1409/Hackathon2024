import { Box } from '@mui/material';
import HomeButton from './HomeButton';
import Typography from '@mui/material/Typography';

const Login = () => {
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
        gap: '18rem',
        lineHeight: 'normal',
        letterSpacing: 'normal',
      }}>
      <div
        style={{
          width: '63px',
          height: '63px',
          position: 'relative',
          overflow: 'hidden',
          flexShrink: '0',
        }}
        loading='lazy'
        alt=''
      />
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
          <Typography
            variant='h1'
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
          </Typography>
          <HomeButton />
        </Box>
      </section>
    </Box>
  );
};

export default Login;
