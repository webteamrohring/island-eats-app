import React, {createContext, FC, ReactNode} from 'react';
import {ChatContextType} from '@interfaces';
import api from 'src/api';
import {
  ChatItemProps,
  MessageItemProps,
} from '@components/ListItems/interfaces';

const ChatContext = createContext<ChatContextType>({});

export const ChatProvider: FC<{children: ReactNode}> = ({children}) => {
  const getConversations = async (
    page = 1,
    limit = 10,
    search: string | undefined,
  ): Promise<ChatItemProps[] | null> => {
    let url = `conversations?page=${page}&limit=${limit}`;

    if (search) {
      url += `&search=${search}`;
    }

    return await api.get(url).json();
  };

  const getConversationMessages = async (
    id: string,
    page = 1,
    limit = 10,
  ): Promise<MessageItemProps[] | null> => {
    const url = `conversations/${id}/messages?page=${page}&limit=${limit}`;
    return await api.get(url).json();
  };

  return (
    <ChatContext.Provider
      value={{
        getConversations,
        getConversationMessages,
      }}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatContext;
