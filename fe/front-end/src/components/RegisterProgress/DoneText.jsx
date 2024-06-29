/* eslint-disable react/prop-types */
import { Box } from '@mui/material';
import { linearProgressClasses } from '@mui/material/LinearProgress';
import LinearProgress from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

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

const DoneText = ({ className = '' }) => {
  return (
    <section
      style={{
        alignSelf: 'stretch',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        maxWidth: '100%',
        padding: '43px 60px 73px',
        textAlign: 'center',
        fontSize: '64px',
        color: '#fff',
        fontFamily: 'Syne',
      }}
      className={className}>
      <div
        style={{
          width: '846px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          gap: '25px',
          maxWidth: '100%',
        }}>
        <h1
          style={{
            margin: '0',
            alignSelf: 'stretch',
            position: 'relative',
            fontSize: 'inherit',
            fontWeight: '700',
            fontFamily: 'inherit',
          }}>
          <span>{`Almost `}</span>
          <span style={{ color: '#ffcc01' }}>done!</span>
        </h1>
        <div
          style={{
            alignSelf: 'stretch',
            position: 'relative',
            fontSize: '21px',
            fontWeight: '600',
            fontFamily: 'Inter',
            color: '#5f5f5f',
          }}>
          Just a moment, we’re creating a personalised plan for you!
        </div>
        <Box sx={{ width: '100%' }}>
          <BorderLinearProgress variant='determinate' value={100} />
        </Box>
      </div>
    </section>
  );
};

export default DoneText;
