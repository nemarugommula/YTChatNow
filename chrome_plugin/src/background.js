chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'getActiveTabUrl') {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        var activeTab = tabs[0];
        if (activeTab) {
          var activeTabUrl = activeTab.url;
          console.log("URL of active tab: " + activeTabUrl);
          chrome.runtime.sendMessage({ action: 'activeTabUrl', url: activeTabUrl, title: activeTab.title});
        }
      });
    }
  });
  