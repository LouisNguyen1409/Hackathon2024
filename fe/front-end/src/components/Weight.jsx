// import React, { useState } from 'react';

// function Weight() {
//   const [weight, setWeight] = useState('');
//   const [goal, setGoal] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (!weight || !goal) {
//       alert('Please enter both your current weight and your goal weight.');
//       return;
//     }
//     console.log('Submitted Weight:', weight, 'Goal:', goal);
//     // Proceed with any further actions, like saving data or navigating to another page
//   };

//   return (
//     <div style={styles.container}>
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <label style={styles.label}>
//           What's your weight?
//           <input
//             type="number"
//             value={weight}
//             onChange={(e) => setWeight(e.target.value)}
//             style={styles.input}
//             min="0"
//           />
//         <span style={styles.unit}>kg</span>
//         </label>
//         <label style={styles.label}>
//           What's your weight goal?
//           <input
//             type="number"
//             value={goal}
//             onChange={(e) => setGoal(e.target.value)}
//             style={styles.input}
//             min="0"
//           />
//            <span style={styles.unit}>kg</span>
//         </label>
//         <button type="submit" style={styles.button}>Next</button>
//       </form>
//       <button style={styles.nextbutton}>Next</button>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh',
//     backgroundColor: '#232323',
//     color: '#FFD700',
//     fontFamily: 'Arial, sans-serif',
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     width: '100%',
//   },
//   label: {
//     margin: '20px',
//   },
//   input: {
//     width: '30px',
//     padding: '10px',
//     margin: '10px',
//     border: '2px solid #FFD700',
//     borderRadius: '5px',
//     color: '#FFFFFF',
//     backgroundColor: '#232323',
//     fontWeight: 'bold',
//   },
//   button: {
//     backgroundColor: '#232323',
//     border: 'none',
//     borderRadius: '5px',
//     padding: '10px 20px',
//     color: '#232323',
//     cursor: 'pointer',
//     fontWeight: 'bold',
//   },
//   nextbutton: {
//     marginTop: '20px',
//     backgroundColor: '#FFD700',
//     border: '2px solid #FFD700',
//     borderRadius: '5px',
//     padding: '10px 20px',
//     color: '#232323',
//     cursor: 'pointer',
//     fontWeight: 'bold',
//   },
//   unit: {
//     marginLeft: '10px', // Space between the input and the "kg" label
//     color: '#FFFFFF',
//     fontSize: '16px',
//   }
// };

// export default Weight;


import React, { useState } from 'react';

function Weight() {
  const [weight, setWeight] = useState('');
  const [goal, setGoal] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!weight || !goal) {
      alert('Please enter both your current weight and your goal weight.');
      return;
    }
    console.log('Submitted Weight:', weight, 'Goal:', goal);
    // Proceed with any further actions, like saving data or navigating to another page
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>weight?</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            style={styles.input}
            min="0"
          />
          <span style={styles.unit}>kg</span>
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>weight goal?</label>
          <input
            type="number"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            style={styles.input}
            min="0"
          />
          <span style={styles.unit}>kg</span>
        </div>
        <button type="submit" style={styles.button}>Next</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#232323',
    color: '#FFD700',
    fontFamily: 'Arial, sans-serif',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  inputGroup: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
  },
  label: {
    minWidth: '180px',
    textAlign: 'left',
    marginRight: '750px',
    
  },
  input: {
    width: '30px',
    padding: '10px',
    border: '2px solid #FFD700',
    borderRadius: '5px',
    backgroundColor: '#232323',
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  unit: {
    marginLeft: '10px',
    color: '#FFFFFF',
    fontSize: '16px',
  },
  button: {
    backgroundColor: '#FFD700',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    color: '#232323',
    cursor: 'pointer',
    fontWeight: 'bold',
  }
};

export default Weight;
