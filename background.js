// jshint esversion:6

// chrome.tabs.onUpdated.addListener(function(activeInfo, sender, sendResponse) {
//     chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
//       const re = new RegExp('feed', 'gi');
//       const matches = tabs[0].url.match(re);
//       console.log(matches);
//       console.log(tabs[0].url);
//       if(matches) {
//         chrome.tabs.sendMessage(tabs[0].id, {action: "block_feed"}, function(response) {});
//       }
//     });
// });
