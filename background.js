// jshint esversion:6

// document.body.addEventListener('click', handleClick, true);
// console.log("loaded");
// function handleClick() {
//   console.log("this worked");
//   window.location.reload();
// }

// chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
//     if (changeInfo.url) {
//         chrome.tabs.sendMessage(tabId, {
//             message: 'hello',
//             url: changeInfo.url
//         });
//     }
// });

// chrome.tabs.query({active: true, currentWindow: true}, function (arrayOfTabs) {
//     var code = 'window.location.reload();';
//     chrome.tabs.executeScript(arrayOfTabs[0].id, {code: code});
// });
