import HeightInput from './HeightInput';
import SetupProgress from './SetupProgress';

const SetupHeight = () => {
  return (
    <div
      style={{
        width: '100%',
        position: 'relative',
        backgroundColor: '#232323',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        padding: '43px 60px 73px',
        boxSizing: 'border-box',
        gap: '225px',
        lineHeight: 'normal',
        letterSpacing: 'normal',
      }}>
      <SetupProgress pre_page='setup' page='setup' page_num_str='3'/>
      <HeightInput />
    </div>
  );
};

export default SetupHeight;
