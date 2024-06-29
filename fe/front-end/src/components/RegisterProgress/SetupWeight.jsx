import WeightInput from './WeightInput';
import SetupProgress from './SetupProgress';

const SetupWeight = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        backgroundColor: '#232323',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        padding: '43px 60px 80px',
        boxSizing: 'border-box',
        gap: '100px',
        lineHeight: 'normal',
        letterSpacing: 'normal',
      }}>
      <SetupProgress pre_page='setup' page='setup' page_num_str='5' />
      <WeightInput />
    </div>
  );
};

export default SetupWeight;
