// actions/index.ts

// Message Types and Functions
export type TMessage = {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  txHash: string;
  fullConversation?: string;
  price?: string;
};

export const getRecentMessages = async (address?: string): Promise<TMessage[]> => {
  return [
    {
      id: '1',
      content: 'Hello',
      role: 'user',
      txHash: '0x123',
      fullConversation: '{"messages": [{"role": "user", "content": "Hello"}]}',
      price: '1000000000000000'
    }
  ];
};

export const getMessagesCount = async (): Promise<number> => {
  return 500; // Dummy implementation returning a fixed number
};

export const getMessageByTxHash = async (txHash: string, txExpiryMinutes?: number): Promise<TMessage> => {
  return {
    id: '1',
    content: 'Hello',
    role: 'user',
    txHash: txHash,
    fullConversation: '{"messages": [{"role": "user", "content": "Hello"}]}',
    price: '1000000000000000'
  };
};

// Session and Price Functions
export const getSessionWithPrice = async (address: string) => {
  return {
    sessionId: '123',
    price: '1000000000000000'
  };
};

// Game State Types and Functions
export type TGameState = {
  uniqueWallets: number;
  messagesCount: number;
  endgameTime: number;
  isGameEnded: boolean;
};

export const getGameState = async (): Promise<TGameState> => {
  return {
    uniqueWallets: 100,
    messagesCount: 500,
    endgameTime: Date.now() + 86400000, // 24 hours from now
    isGameEnded: false
  };
};

// Prize Pool Functions
export const getPrizePool = async (): Promise<number> => {
  return 1000;
};

// LLM Functions
export const verifyAndExecuteLLMPublic = async (hash: string) => {
  return {
    success: true,
    error: null
  };
};

export const submitPrompt = async (sessionId: string, hash: string, prompt: string, address: string) => {
  return true;
};

// Solana Functions
export const getSolanaBalance = async (address: string) => {
  return {
    balance: 100,
    success: true
  };
};