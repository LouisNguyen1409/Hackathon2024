import SetupName from './SetupName';
import SetupProgress from './SetupProgress';

const Setup = () => {
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
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        boxSizing: 'border-box',
        gap: '175px',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        padding: '43px 60px 73px',
      }}>
      <SetupProgress pre_page='' page='setup' page_num_str='0' />
      <SetupName />
    </div>
  );
};

export default Setup;
