const socket = io('http://localhost:3000');

document.addEventListener('DOMContentLoaded', function () {
  chrome.runtime.sendMessage({ action: 'getActiveTabUrl' });
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'activeTabUrl') {
    var activeTabUrl = request.url;
    const regex = /^https?:\/\/(?:www\.)?youtube\.com\/watch\?v=([^&]+)/;
    const match = activeTabUrl.match(regex);
    if (match) {
      const videoId = match[1]+''; 
      document.getElementById('chat-room-id').innerText=request.title;
      const url = 'http://localhost:3000/api/chats/'+videoId;
      const chatsList = document.getElementById('chats');
      fetch(url)
        .then(response=>response.json())
        .then(data => {
          if (data.chats.length === 0) {
            chatsList.innerHTML = '<li>No chats yet.</li>';
          } else {
            chatsList.innerHTML = '';
            const chats = data.chats.map(item => `<li>${item}</li>`);
            chatsList.innerHTML = chats.join('');
          }

          socket.emit('join', videoId);

          socket.on('chat message', (msg) => {
            if(msg.videoId == videoId)chatsList.innerHTML += `<li>${msg.value}</li>`;
          });

          socket.on('joined', (vid) => {
            if(vid== videoId)chatsList.innerHTML += `<li>${"-------------user joined-------------"}</li>`;
          });


          document.getElementById('chat-form').addEventListener('submit', (event) => {
            event.preventDefault();
            const input = document.getElementById('chat-input');
            const value = input.value;
            input.value = '';
            socket.emit('chat message', { videoId, value });
          });

        })
        .catch(error => {
          chatsList.innerHTML = `<li class="error">Error: ${error.message}</li>`;

        });
    } else {
      alert("YouTube video ID not found in URL");
    }
  }
});

// popup.js

// Send message to content script to get video title
// chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
//   chrome.tabs.sendMessage(tabs[0].id, { action: 'getVideoTitle' }, function(response) {
//       if (response && response.title) {
//           document.getElementById('chat-room-id').textContent = response.title;
//       } else {
//           document.getElementById('chat-room-id').textContent = 'Video title not found';
//       }
//   });
// });
