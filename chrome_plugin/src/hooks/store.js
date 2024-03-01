import {create} from 'zustand'

export const useStore = create((set) => ({
    title : 'Chat Room',
    videoId : '',
    chats : ['vish nu','vish nu','vish nu','vish nu','vish nu','vish nu','vish nu','vish nu','vish nu','vish nu','vish nu','vish nu','vish nu','vish nu','vish nu','vish nu'],
    error : '',
    socket:'',
    addChat : (chat) => set((state) => ({chats : [...state.chats, chat]})),
    setError : (error) => set((state) => ({error})),
    setVideoId : (videoId) => set((state) => ({videoId})),
    setTitle : (title) => set((state) => ({title})),
    setSocket : (socket) => set((state) => ({socket})),
}));