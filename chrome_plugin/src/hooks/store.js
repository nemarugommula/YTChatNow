import { error } from 'console';
import { title } from 'process';
import {create} from 'zustand'

export const useStore = create((set) => ({
    title : 'Chat Room',
    chats : [],
    addChat : (chat) => set((state) => ({chats : [...state.chats, chat]})),
    error : '',
    setError : (error) => set((state) => ({error})),
}));