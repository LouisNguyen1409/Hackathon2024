import GoalSelection from '../components/GoalSelection';
import SetupProgress from '../components/SetupProgress';

const SetGoal = () => {
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
        gap: '60px',
        lineHeight: 'normal',
        letterSpacing: 'normal',
      }}>
      <SetupProgress />
      <section
        style={{
          width: '1255px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'center',
          maxWidth: '100%',
          textAlign: 'left',
          fontSize: '64px',
          color: '#fff',
          fontFamily: 'Syne',
        }}>
        <div
          style={{
            width: '715px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            gap: '37px',
            maxWidth: '100%',
          }}>
          <div
            style={{
              alignSelf: 'stretch',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              gap: '12px',
              maxWidth: '100%',
            }}>
            <h1
              style={{
                margin: '0',
                width: '589px',
                position: 'relative',
                fontSize: 'inherit',
                fontWeight: '700',
                fontFamily: 'inherit',
                display: 'inline-block',
                maxWidth: '100%',
              }}>
              <span>{`Tell us: what’s your `}</span>
              <span style={{ color: '#ffcc01' }}>goal?</span>
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
              Select up to 3 goals that are your top priorities, so we can create a personalised workout plan for you and you only.
            </div>
          </div>
          <GoalSelection />
        </div>
      </section>
    </div>
  );
};

export default SetGoal;
