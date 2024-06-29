import React from 'react';

function Dashboard() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Today <span style={styles.fireIcon}>🔥3</span></h1>
        <div style={styles.progress}>
          Overall Progress: 36%
        </div>
      </header>
      <div style={styles.calories}>
        <h2>Calories</h2>
        <div>
          <p>1,503 Calories remaining</p>
          <p>Eaten: 526</p>
          <p>Burnt: 753</p>
        </div>
        <button style={styles.button}>Get Started →</button>
      </div>
    </div>
  );
}

// Add your styling here
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    color: 'white',
    backgroundColor: '#333',
    padding: '20px',
    borderRadius: '8px',
  },
  header: {
    marginBottom: '20px',
  },
  title: {
    fontSize: '24px',
  },
  fireIcon: {
    fontSize: '28px',
  },
  progress: {
    backgroundColor: '#444',
    padding: '10px',
    borderRadius: '8px',
  },
  calories: {
    backgroundColor: '#222',
    padding: '15px',
    borderRadius: '8px',
  },
  button: {
    marginTop: '10px',
    backgroundColor: 'purple',
    color: 'white',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Dashboard;
