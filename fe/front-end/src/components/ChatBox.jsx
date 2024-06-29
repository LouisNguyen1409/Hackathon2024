import React from 'react'
import ChatBoxInput from './ChatBoxInput'
// import SetupProgress from './RegisterProgress/SetupProgress';
const ChatBox = () => {
	return (
		<div style={{
			width: '100%',
			height: '100%',
			overflow: 'hidden',

		  }}>
      		<ChatBoxInput />
		</div>

	)
}

export default ChatBox