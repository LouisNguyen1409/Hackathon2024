/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Box, Button } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import { linearProgressClasses } from '@mui/material/LinearProgress';
import { useNavigate } from 'react-router-dom';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));

const SetupProgress = ({ className = '', page, page_num_str, pre_page }) => {
  const navigate = useNavigate();
  let page_num = parseInt(page_num_str);
  return (
    <header
      style={{
        alignSelf: 'stretch',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        maxWidth: '100%',
        gap: '20px',
        textAlign: 'center',
        fontSize: '32px',
        color: '#4a4a4a',
        fontFamily: 'Inter',
      }}
      className={className}>
      {page_num !== 0 ? (
        <Button onClick={() => navigate(`/${pre_page}/${page_num - 1}`)}>
          <img
            style={{
              height: '63px',
              width: '63px',
              position: 'relative',
              overflow: 'hidden',
              flexShrink: '0',
            }}
            src='/arrow-leftcircle.svg'
          />
        </Button>
      ) : (
        <div
          style={{
            height: '63px',
            width: '63px',
            position: 'relative',
            overflow: 'hidden',
            flexShrink: '0',
          }}></div>
      )}
      <Box
        style={{
          width: '1008px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          gap: '41px',
          maxWidth: '100%',
        }}>
        <Box
          style={{
            flex: '1',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            padding: '25px 0px 0px',
            boxSizing: 'border-box',
            maxWidth: '100%',
          }}>
          <Box sx={{ width: '100%' }}>
            <BorderLinearProgress variant='determinate' value={(page_num / 6) * 100} />
          </Box>
        </Box>
        <Box
          style={{
            width: '270px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            padding: '15px 18px 20px 24px',
            boxSizing: 'border-box',
            position: 'relative',
          }}
          autoFocus={true}>
          <label style={{ cursor: 'pointer' }}>
            <b style={{ marginLeft: '6%', flex: '1', position: 'relative', whiteSpace: 'nowrap' }}>Skip for now</b>
            <Button
              onClick={() => navigate(`/${page}/${page_num + 1}`)}
              style={{
                height: '100%',
                width: '100%',
                position: 'absolute',
                margin: '0',
                top: '0px',
                right: '0px',
                bottom: '0px',
                left: '0px',
                borderRadius: '35.5px',
                border: '2px dashed #4a4a4a',
                boxSizing: 'border-box',
                zIndex: '1',
              }}
            />
          </label>
          <input style={{ display: 'none' }} type='file' />
        </Box>
      </Box>
    </header>
  );
};

export default SetupProgress;
