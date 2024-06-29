import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const InputContainer = styled('div')({
    display: 'flex',
    width: '100%',
    padding: '10px',
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
        }
    },
    '& .MuiInputBase-input::placeholder': {
        color: '#808080', // Change placeholder text color
        opacity: 1 // Ensure the placeholder is always visible with the specified color
    },
    width: '72%', 
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

function ChatBoxInput() {
    const [message, setMessage] = useState('');

    const handleInputChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSendClick = () => {
        console.log('Send:', message); // Log or send the message
        setMessage(''); // Clear the message after sending
    };

    return (
        <InputContainer>
            <CharacterImage src="/gojo_satoru.png" alt="Character" />
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
    );
}

export default ChatBoxInput;