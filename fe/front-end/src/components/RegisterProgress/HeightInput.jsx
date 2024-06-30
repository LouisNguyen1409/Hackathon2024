/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import NextButton from '../NextButton';
import React from 'react';
import "@fontsource/syne"; // Defaults to weight 400
import "@fontsource/syne/700.css"; // Specify weight

const HeightInput = ({ className = '' }) => {
  const [height, setHeight] = React.useState(0);
  return (
    <section
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        maxWidth: '100%',
        textAlign: 'left',
        fontSize: '64px',
        color: '#fff',
        fontFamily: 'Syne',
      }}
      className={className}>
      <div
        style={{
          width: '700px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          gap: '80px',
          maxWidth: '100%',
        }}>
        <div
          style={{
            alignSelf: 'stretch',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            gap: '41px',
            maxWidth: '100%',
          }}>
          <h1
            style={{
              margin: '0  70px',
              position: 'relative',
              fontSize: 'inherit',
              fontWeight: '700',
              fontFamily: 'inherit',
            }}>
            <span>{`What’s your `}</span>
            <span style={{ color: '#ffcc01' }}>height?</span>
          </h1>
          <div
            style={{
              alignSelf: 'stretch',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0px 20px 0px 155px',
              boxSizing: 'border-box',
              maxWidth: '100%',
              textAlign: 'center',
              fontSize: '32px',
              color: 'rgba(255, 255, 255, 0.3)',
              fontFamily: 'Inter',
            }}>
            <div
              style={{
                width: '389px',
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: '15px',
                maxWidth: '100%',
                marginLeft: '120px',
              }}>
              <div
                style={{
                  height: '66px',
                  width: '130px',
                  position: 'relative',
                }}>
                <input
                  style={{
                    position: 'absolute',
                    top: '3px',
                    left: '0px',
                    borderRadius: '18px',
                    backgroundColor: 'rgba(255, 255, 255, 0)',
                    border: '2px solid #ffcc01',
                    boxSizing: 'border-box',
                    width: '108px',
                    height: '54px',
                    color: 'white',
                    padding: '0 12px',
                  }}
                  placeholder='0'
                  onChange={() => {
                    setHeight();
                  }}
                />
              </div>
              <div>
                <span
                  style={{
                    fontSize: '32px',
                    color: 'rgba(255, 255, 255, 0.3)',
                    fontFamily: 'Inter',
                  }}>
                  cm
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            width: '650px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'center',
            padding: '0px 140px 0px 170px',
            boxSizing: 'border-box',
            maxWidth: '100%',
            textAlign: 'center',
            fontSize: '32px',
            color: '#232323',
            fontFamily: 'Inter',
          }}>
          <NextButton page_num_str='4' />
        </div>
      </div>
    </section>
  );
};

export default HeightInput;
