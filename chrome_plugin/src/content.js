// content_script.js

// Function to fetch video title
function getYouTubeVideoTitle() {
    const titleElement = document.querySelector('div#title yt-formatted-string');
    console.log('titleElement', titleElement);
    if (titleElement) {
        console.log('titleElement.textContent', titleElement.textContent);
        return titleElement.textContent.trim();
    } else {
        return 'Video title not found';
    }
 }
 
 // Message listener to receive request from extension popup
 chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log(" message received from popup.js",message);
    if (message.action === 'getVideoTitle') {
        const videoTitle = getYouTubeVideoTitle();
        sendResponse({ title: videoTitle });
    }
 });
 