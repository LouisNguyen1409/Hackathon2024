/* eslint-disable react/prop-types */
import NextButton from '../NextButton';

const HeightInput = ({ className = '' }) => {
  return (
    <section
      style={{
        width: '1270px',
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
          gap: '100px',
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
              alignItems: 'flex-start',
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
                alignItems: 'flex-start',
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
                    left: '22px',
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
                />
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
            padding: '0px 20px',
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
