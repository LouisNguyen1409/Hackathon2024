import React from 'react';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NextButton = ({ page_num_str, next_page }) => {
  const navigate = useNavigate();
  const handleClick = () => {
      if (page_num_str === "chohuy") {
        navigate(`/${next_page}`);
      } else {
        navigate(`/setup/${page_num}`);
      }
  }
  const page_num = parseInt(page_num_str);
  return (
    <Box
      style={{
        width: '768px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '0px 20px',
        boxSizing: 'border-box',
        maxWidth: '100%',
        textAlign: 'center',
        fontSize: '32px',
        color: '#232323',
        fontFamily: 'Inter',
      }}>
      <Box
        style={{
          width: '270px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          padding: '2px 47px 33px',
          boxSizing: 'border-box',
          position: 'relative',
        }}>
        <Button
          onClick={() => handleClick()}
          style={{
            height: '200%',
            width: '100%',
            position: 'absolute',
            margin: '0',
            top: '0px',
            padding: '0',
            right: '0px',
            bottom: '0px',
            left: '0px',
            borderRadius: '47px',
            backgroundColor: '#ffcc01',
          }}>
          <b
            style={{
              flex: '1',
              position: 'relative',
              zIndex: '1',
              margin: '10% 0 10% 0',
              fontWeight: 'bold',
              color: 'black',
            }}>
            Next
          </b>
        </Button>
      </Box>
    </Box>
  );
};

export default NextButton;