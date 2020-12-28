// jshint esversion:6

// adds listener for when URL is updated on a tab
chrome.tabs.onUpdated.addListener(function(activeInfo, sender, sendResponse) {
  console.log(sender);
  // conditional check prevents sending multiple messages per refresh
  if(sender.title ===  "Feed | LinkedIn") { // fires right before DOM is completely loaded
  // if(sender.status ===  "complete") { // a bit too slow
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
      const re = new RegExp('feed', 'gi'); // looks for linkedin.com/feed with case insensitive
      const matches = tabs[0].url.match(re);
      // sends message to block feed if there was a URL match
      if(matches) {
        chrome.tabs.sendMessage(tabs[0].id, {action: "block_feed"}, function(response) {
          console.log(response);
        });
      }
    });
  }
});
