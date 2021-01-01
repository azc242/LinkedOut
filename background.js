// jshint esversion:6

// adds listener for when URL is updated on a tab
chrome.tabs.onUpdated.addListener(function(activeInfo, sender, sendResponse) {
  console.log(sender);
  // conditional check prevents sending multiple messages per refresh
  if (sender.title === "Feed | LinkedIn") { // fires right before DOM is completely loaded
    // if(sender.status ===  "complete") { // a bit too slow
    chrome.tabs.query({
      currentWindow: true,
      active: true
    }, function(tabs) {
      const re = new RegExp('feed', 'gi'); // looks for linkedin.com/feed with case insensitive
      const matches = tabs[0].url.match(re);
      // sends message to block feed if there was a URL match
      if (matches) {
        chrome.tabs.sendMessage(tabs[0].id, {
          action: "block_feed"
        }, function(response) {
          console.log(response);
        });
      }
    });
  }
});


// adds listener to launch new page when installed
// credits to Mohamed Mansour and GorvGoyl on StackOverFlow for this code
chrome.runtime.onInstalled.addListener((details) => {
  const currentVersion = chrome.runtime.getManifest().version;
  const previousVersion = details.previousVersion;
  const reason = details.reason;

  console.log('Previous Version: ${previousVersion }');
  console.log('Current Version: ${currentVersion }');

  switch (reason) {
    case 'install':
      console.log('New User installed the extension.');
      chrome.tabs.create({
        url: "install/install.html"}, function(tab) {
        console.log("New tab launched with http://yoursite.com/");
      });
      break;
    case 'update':
      console.log('User has updated their extension.');
      break;
    case 'chrome_update':
    case 'shared_module_update':
    default:
      console.log('Other install events within the browser');
      break;
  }
});
