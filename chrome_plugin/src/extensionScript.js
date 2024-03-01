import useStore from './hooks/store';
import io from 'socket.io-client';

const { setError, setTitle, setVideoId,addChat } = useStore();
export const socket = io('http://localhost:3000');


export const listerners = (function () {
  document.addEventListener('DOMContentLoaded', function () {
    chrome.runtime.sendMessage({ action: 'getActiveTabUrl' });
  });
  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'activeTabUrl') {
      var activeTabUrl = request.url;
      const regex = /^https?:\/\/(?:www\.)?youtube\.com\/watch\?v=([^&]+)/;
      const match = activeTabUrl.match(regex);
      if (match) {
        setError('');
        const videoId = match[1] + '';
        setVideoId(videoId);
        setTitle('Chat Room - ' + request.title);
        const url = 'http://localhost:3000/api/chats/' + videoId;
        fetch(url)
          .then(response => response.json())
          .then(data => {
            if (data.chats.length === 0) {
            } else {
              addChat(data.chats);
            }
            socket.emit('join', videoId);//send user joined message to server
            socket.on('chat message', (msg) => {
              if (msg.videoId == videoId)addChat([...chats, msg]);
            });
            socket.on('joined', (vid) => {
              // if (vid == videoId) chatsList.innerHTML += '<li class="text-center text-gray-500 text-opacity-70">user joined</li>';
            });
          })
          .catch(error => {
            setError('Error fetching chats');
          });
      } else {
        setError('YouTube video ID not found in URL');
      }
    }
  });
})();