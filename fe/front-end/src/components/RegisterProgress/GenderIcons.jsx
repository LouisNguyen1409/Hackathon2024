/* eslint-disable react/prop-types */
import { useMemo } from 'react';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const getStyleValue = (key, value) => {
  if (value === undefined || value === '') return;
  return { [key]: value };
};

const GenderIcons = ({ className = '', ionMaleOutline1, male, propGap, page_num_str }) => {
  const navigate = useNavigate();
  const genderIconsStyle = useMemo(() => {
    return {
      ...getStyleValue('gap', propGap),
    };
  }, [propGap]);
  const page_num = parseInt(page_num_str);
  const handleGenderClick = (gender) => {
    localStorage.setItem('gender', gender);
    const page_num = parseInt(page_num_str);
    navigate(`/setup/${page_num}`);
  };
  return (
    <Button
      onClick={() => handleGenderClick(male.toLowerCase())}
      style={{
        width: '390px',
        borderRadius: '18px',
        backgroundColor: 'rgba(255, 255, 255, 0)',
        border: '2px solid #ffcc01',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: '46px 56px 48px',
        gap: '21px',
        maxWidth: '100%',
        textAlign: 'center',
        fontSize: '32px',
        color: '#fff',
        fontFamily: 'Inter',
        ...genderIconsStyle,
      }}
      className={className}>
      <Box
        style={{
          width: '390px',
          height: '407px',
          position: 'relative',
          borderRadius: '18px',
          backgroundColor: 'rgba(255, 255, 255, 0)',
          border: '2px solid #ffcc01',
          boxSizing: 'border-box',
          display: 'none',
          maxWidth: '100%',
        }}
      />
      <Box
        style={{
          alignSelf: 'stretch',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          padding: '0px 17px 0px 11px',
        }}>
        <img
          style={{
            height: '246px',
            width: '246px',
            position: 'relative',
            overflow: 'hidden',
            flexShrink: '0',
            zIndex: '1',
          }}
          loading='lazy'
          alt=''
          src={ionMaleOutline1}
        />
      </Box>
      <Box style={{ alignSelf: 'stretch', position: 'relative', zIndex: '1' }}>{male}</Box>
    </Button>
  );
};

export default GenderIcons;
