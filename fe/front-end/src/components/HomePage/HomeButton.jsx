/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LoginButton from '../LoginPage/LoginButton';
import { useNavigate } from 'react-router-dom';

const HomeButton = ({ className = '' }) => {
  const navigate = useNavigate();
  return (
    <Box
      style={{
        alignSelf: 'stretch',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '0px 20px 24px',
        boxSizing: 'border-box',
        maxWidth: '100%',
        textAlign: 'center',
        fontSize: '21px',
        color: 'rgba(255, 255, 255, 0.4)',
        fontFamily: 'Inter',
      }}
      className={className}>
      <Box
        style={{
          width: '332px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          gap: '33px',
          maxWidth: '100%',
        }}>
        <Box
          style={{
            alignSelf: 'stretch',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            gap: '8px',
          }}>
          <Box
            sx={{
              alignSelf: 'stretch',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              margin: '4px 52px 9px',
              position: 'relative',
            }}>
            <Box
              sx={{
                width: '100%',
                position: 'relative',
              }}>
              <Button
                label='Username'
                placeholder='Username'
                style={{
                  width: '100%',
                  height: '36px',
                  borderRadius: '18px',
                  border: '2px solid #FFCC01',
                  backgroundColor: '#232323',
                  color: '#FFCC01',
                  boxSizing: 'border-box',
                  padding: '0 12px',
                  fontWeight: '500',
                }}
                onClick={() => navigate('/register')}>
                SIGN UP
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              alignSelf: 'stretch',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              margin: '4px 52px 9px',
              position: 'relative',
            }}>
            <Box
              sx={{
                width: '100%',
                position: 'relative',
              }}>
              <Button
                type='password'
                placeholder='Password'
                style={{
                  width: '100%',
                  height: '36px',
                  borderRadius: '18px',
                  border: '2px solid #FFFFFF',
                  backgroundColor: '#232323',
                  color: '#FFFFFF',
                  boxSizing: 'border-box',
                  padding: '0 12px',
                  fontWeight: '500',
                }}
                onClick={() => navigate('/login')}>
                LOG IN
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeButton;
