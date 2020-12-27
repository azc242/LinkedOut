// jshint esversion:6

// adds listener for when URL is updated on a tab
chrome.tabs.onUpdated.addListener(function(activeInfo, sender, sendResponse) {
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
      const re = new RegExp('feed', 'gi'); // looks for linkedin.com/feed with case insensitive
      const matches = tabs[0].url.match(re);
      // sends message to block feed if there was a URL match
      if(matches) {
        chrome.tabs.sendMessage(tabs[0].id, {action: "block_feed"}, function(response) {});
      } else {
        chrome.tabs.sendMessage(tabs[0].id, {action: "reg"}, function(response) {});
      }
    });
});
