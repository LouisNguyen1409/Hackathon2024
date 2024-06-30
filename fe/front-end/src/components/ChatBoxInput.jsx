import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import axios from 'axios';

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  padding: '10px',
  backgroundColor: '#333', // Optional: Background for the entire component
  borderRadius: '4px', // Smooth corners for the container // Center align items
  gap: '10px', // Gap between elements
});

const InputContainer = styled('div')({
  display: 'flex',
  width: '100%',
  justifyContent: 'flex-end',
  backgroundColor: '#333', // Optional: Background for the entire component
  borderRadius: '4px', // Smooth corners for the container
  alignItems: 'flex-end', // Align items vertically at the center
});

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'transparent', // Hide the border
    },
    '&:hover fieldset': {
      borderColor: 'transparent', // Hide border on hover
    },
    '&.Mui-focused fieldset': {
      borderColor: 'transparent', // Hide border on focus
    },
  },
  '& .MuiInputBase-input::placeholder': {
    color: 'white', // Change placeholder text color
    opacity: 1, // Ensure the placeholder is always visible with the specified color
  },
  width: '100%',
  borderRadius: '18px',
  backgroundColor: 'rgba(255, 255, 255, 0)',
  border: '2px solid #7F00FF',
  boxSizing: 'border-box',
});

const StyledIconButton = styled(IconButton)({
  color: '#000', // Black arrow icon
  backgroundColor: '#FFD700', // Yellow background
  '&:hover': {
    backgroundColor: '#FFEA00', // Lighter yellow on hover
  },
});

const CharacterImage = styled('img')({
  maxWidth: '26%', // Use max width to control the size of the image
  height: '100%', // Maintain aspect ratio
  objectFit: 'cover', // Cover the size box without stretching the image
});

const MessageContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  gap: '10px',
  width: '100%',
  alignItems: 'flex-end',
  backgroundColor: '#444', // Background for message container
  borderRadius: '4px',
  maxHeight: '750px', // Limit height and enable scrolling
  overflowY: 'auto',
});

const Message = styled('div')(({ isUser }) => ({
  alignSelf: isUser ? 'flex-end' : 'flex-start',
  backgroundColor: isUser ? 'black' : '#333',
  color: isUser ? '#fff' : 'white',
  padding: '10px',
  marginLeft: isUser ? "0px" : '10px',
  marginRight: isUser ? "20px" : '0px',
  borderRadius: '18px',
  maxWidth: '100%',
  wordBreak: 'break-word',

  border: isUser ? '2px solid white' : '2px solid black',
  boxSizing: 'border-box',
}));

function ChatBoxInput() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [gender, setGender] = useState('');

  useEffect(() => {
    const storedGender = localStorage.getItem('gender');
    if (storedGender) {
      setGender(storedGender);
    }
  }, []);

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendClick = async () => {
    if (message.trim() === '') return;

    // Add user message to the chatbox
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: message, isUser: true },
    ]);

    try {
      const res = await axios.post('http://localhost:3003/chat', { message });
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: res.data.response, isUser: false },
      ]);
    } catch (error) {
      console.error('Error fetching the API', error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: 'Error: Could not fetch response', isUser: false },
      ]);
    }

    setMessage(''); // Clear the message after sending
  };

  const getImageSrc = () => {
    if (gender === 'male') {
      return '/gojo_satoru.png';
    } else if (gender === 'female') {
      return '/girl.xx';
    }
    return '/default.png'; // Default image
  };

  return (
    <Container>
      <CharacterImage src={getImageSrc()} alt="Character" />
      <MessageContainer>
        {messages.map((msg, index) => (
          <Message key={index} isUser={msg.isUser}>
            {msg.text}
          </Message>
        ))}
        <InputContainer>
        <StyledTextField
          variant="outlined"
          value={message}
          onChange={handleInputChange}
          placeholder="Start a conversation..."
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <StyledIconButton onClick={handleSendClick} aria-label="send">
                  <ArrowUpwardIcon />
                </StyledIconButton>
              </InputAdornment>
            ),
          }}
        />
      </InputContainer>
      </MessageContainer>
    </Container>
  );
}

export default ChatBoxInput;
