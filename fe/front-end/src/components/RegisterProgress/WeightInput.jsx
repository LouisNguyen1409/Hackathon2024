/* eslint-disable react/prop-types */
import NextButton from '../NextButton';

const WeightInput = ({ className = '' }) => {
  return (
    <section>
      <div
        style={{
          width: '1270px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          maxWidth: '100%',
          fontSize: '64px',
          color: '#fff',
          fontFamily: 'Syne',
          position: 'relative',
          marginBottom: '3rem',
        }}
        className={className}>
        <div
          style={{
            width: '700px',
            maxWidth: '100%',
            fontSize: 'inherit',
            fontWeight: '600',
            fontFamily: 'inherit',
          }}>
          <span>{`What’s your `}</span>
          <br />
          <span style={{ color: '#ffcc01' }}>weight?</span>
        </div>

        <div
          style={{
            width: '1270px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
            maxWidth: '100%',
            color: '#fff',
            fontFamily: 'Syne',
            position: 'relative',
            gap: '20px',
          }}>
          <div>
            <input
              style={{
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

          <div
            style={{
              padding: '10px 0px 0px',
              boxSizing: 'border-box',
              minWidth: '159px',
              textAlign: 'left',
              color: '#fff',
              fontSize: '50px',
            }}>
            kg
          </div>
        </div>
      </div>

      <div
        style={{
          width: '1270px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          maxWidth: '100%',
          fontSize: '64px',
          color: '#fff',
          fontFamily: 'Syne',
          position: 'relative',
          marginBottom: '3rem',
        }}
        className={className}>
        <div
          style={{
            width: '700px',
            maxWidth: '100%',
            fontSize: 'inherit',
            fontWeight: '600',
            fontFamily: 'inherit',
          }}>
          <span>{`What’s your `}</span>
          <br />
          <span style={{ color: '#ffcc01' }}>weight goal?</span>
        </div>

        <div
          style={{
            width: '1270px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
            maxWidth: '100%',
            color: '#fff',
            fontFamily: 'Syne',
            position: 'relative',
            gap: '20px',
          }}>
          <div>
            <input
              style={{
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

          <div
            style={{
              padding: '10px 0px 0px',
              boxSizing: 'border-box',
              minWidth: '159px',
              textAlign: 'left',
              color: '#fff',
              fontSize: '50px',
            }}>
            kg
          </div>
        </div>
      </div>

      <div
        style={{
          display: 'flex', // Sets the display mode to flex to enable flexbox properties
          justifyContent: 'center', // Horizontally centers the child component
          alignItems: 'center', // Vertically centers the child component
        }}>
        <NextButton page_num_str='6' />
      </div>
    </section>
  );
};

export default WeightInput;
