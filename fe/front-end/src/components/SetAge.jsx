import NextButton from './NextButton';
import SetupProgress from '../components/SetupProgress';

const Screen1 = ({ className = '' }) => {
  return (
    <div
      style={{
        width: '100%',
        position: 'relative',
        backgroundColor: '#232323',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: '43px 60px 73px',
        boxSizing: 'border-box',
        gap: '0px',
        lineHeight: 'normal',
        letterSpacing: 'normal',
      }}>
      <SetupProgress />
      <section
        style={{
          width: '955px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          padding: '25px 0px 0px',
					margin: '0px 15% 0px',
          boxSizing: 'border-box',
          maxWidth: '100%',
          textAlign: 'left',
          fontSize: '64px',
          color: '#fff',
          fontFamily: 'Syne',
        }}
        className={className}>
        <div
          style={{
            alignSelf: 'stretch',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            gap: '27px',
            maxWidth: '100%',
          }}>
          <div
            style={{
              alignSelf: 'stretch',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '46px',
              maxWidth: '100%',
            }}>
            <div
              style={{
                flex: '1',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                padding: '0px 0px 62px',
                boxSizing: 'border-box',
                minWidth: '396px',
                minHeight: '268px',
                maxWidth: '100%',
              }}>
              <div
                style={{
                  alignSelf: 'stretch',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  gap: '56px',
                }}>
                <h1
                  style={{
                    margin: '0',
                    position: 'relative',
                    fontSize: 'inherit',
                    fontWeight: '700',
                    fontFamily: 'inherit',
                  }}>
                  <span>{`What’s your `}</span>
                  <span style={{ color: '#ffcc01' }}>age?</span>
                </h1>
                <div
                  style={{
                    alignSelf: 'stretch',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    padding: '0px 20px 0px 50px',
                    textAlign: 'center',
                    fontSize: '32px',
                    color: '#232323',
                    fontFamily: 'Inter',
                  }}>
                  <NextButton />
                </div>
              </div>
            </div>
            <div
              style={{
                width: '299px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                position: 'relative',
                minWidth: '299px',
                textAlign: 'center',
                fontSize: '32px',
                color: '#4a4a4a',
                fontFamily: 'Inter',
              }}>
              <img
                style={{
                  height: '638px',
                  flex: '1',
                  position: 'relative',
                  maxWidth: '100%',
                  overflow: 'hidden',
                  zIndex: '2',
                }}
                loading='lazy'
                alt=''
                src='/frame-1.svg'
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Screen1;
