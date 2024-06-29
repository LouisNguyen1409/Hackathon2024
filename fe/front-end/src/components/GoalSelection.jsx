/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Accordion, AccordionSummary, AccordionDetails, Icon, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import NextButton from './NextButton';

const GoalSelection = ({ className = '' }) => {
  return (
    <div
      style={{
        alignSelf: 'stretch',
        height: '523px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        gap: '20px',
        textAlign: 'left',
        fontSize: '25px',
        color: '#e4e2dd',
        fontFamily: 'Inter',
      }}
      className={className}>
      <div
        style={{
          alignSelf: 'stretch',
          flex: '1',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          padding: '20px 45px',
          position: 'relative',
        }}>
        <Button
          style={{
            height: '100%',
            width: '100%',
            position: 'absolute',
            margin: '0',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
            borderRadius: '18px',
            background: 'linear-gradient(91.75deg, rgba(82, 95, 142, 0.05) 72.17%, rgba(52, 168, 83, 0.15) 90.67%)',
          }}
        />
        <div
          style={{
            height: '30px',
            width: '177px',
            position: 'relative',
            display: 'inline-block',
            zIndex: '1',
          }}>
          Lose Weight
        </div>
      </div>
      <div
        style={{
          alignSelf: 'stretch',
          flex: '1',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          padding: '20px 45px',
          position: 'relative',
        }}>
        <Button
          style={{
            height: '100%',
            width: '100%',
            position: 'absolute',
            margin: '0',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
            borderRadius: '18px',
            background: 'linear-gradient(91.75deg, rgba(82, 95, 142, 0.05) 72.17%, rgba(52, 168, 83, 0.15) 90.67%)',
          }}
        />
        <div
          style={{
            height: '30px',
            width: '177px',
            position: 'relative',
            display: 'inline-block',
            zIndex: '1',
          }}>
          Gain Weight
        </div>
      </div>
      <div
        style={{
          alignSelf: 'stretch',
          flex: '1',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          padding: '20px 45px',
          position: 'relative',
        }}>
        <Button
          style={{
            height: '100%',
            width: '100%',
            position: 'absolute',
            margin: '0',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
            borderRadius: '18px',
            background: 'linear-gradient(91.75deg, rgba(82, 95, 142, 0.05) 72.17%, rgba(52, 168, 83, 0.15) 90.67%)',
          }}
        />
        <div
          style={{
            height: '30px',
            width: '180px',
            position: 'relative',
            display: 'inline-block',
            zIndex: '1',
          }}>
          Gain Muscle
        </div>
      </div>
      <div
        style={{
          alignSelf: 'stretch',
          flex: '1',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          padding: '20px 45px',
          position: 'relative',
        }}>
        <Button
          style={{
            height: '100%',
            width: '100%',
            position: 'absolute',
            margin: '0',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
            borderRadius: '18px',
            background: 'linear-gradient(91.75deg, rgba(82, 95, 142, 0.05) 72.17%, rgba(52, 168, 83, 0.15) 90.67%)',
          }}
        />
        <div
          style={{
            height: '30px',
            width: '180px',
            position: 'relative',
            display: 'inline-block',
            zIndex: '1',
          }}>
          Modify My Diet
        </div>
      </div>
      <div
        style={{
          alignSelf: 'stretch',
          flex: '1',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          padding: '20px 45px',
          position: 'relative',
        }}>
        <Button
          style={{
            height: '100%',
            width: '100%',
            position: 'absolute',
            margin: '0',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
            borderRadius: '18px',
            background: 'linear-gradient(91.75deg, rgba(82, 95, 142, 0.05) 72.17%, rgba(52, 168, 83, 0.15) 90.67%)',
          }}
        />
        <div
          style={{
            height: '30px',
            width: '177px',
            position: 'relative',
            display: 'inline-block',
            zIndex: '1',
          }}>
          Manage Stress
        </div>
      </div>

      <NextButton />
    </div>
  );
};

export default GoalSelection;
