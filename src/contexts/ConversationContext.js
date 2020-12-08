import React, { useState } from 'react';

export const ConversationContext = React.createContext();

const ConversationContextProvider = () => {
  const [ conversation, setConversation ] = useState(
    {
      duckyId: null,
      convDate: null,
      convDescription: null,
      convSolution: null,
      convTags: null,
      convAutoKeywords: null,
      convLinks: null,
      convCodeSnippet: null,
      convMood: null
    }
  );

}

export default ConversationContextProvider;