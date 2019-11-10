chrome.runtime.onInstalled.addListener(() => {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        // conditions: [
        //   new chrome.declarativeContent.PageStateMatcher({
        //     pageUrl: { hostEquals: 'developer.chrome.com' }
        //   })
        // ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
      }
    ])
  })
})

// chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
//   chrome.declarativeContent.onPageChanged.addRules([
//     {
//       conditions: [
//         new chrome.declarativeContent.PageStateMatcher({
//           pageUrl: { hostEquals: 'developer.chrome.com' }
//         })
//       ],
//       actions: [new chrome.declarativeContent.ShowPageAction()]
//     }
//   ])
// })
console.log('background loaded!')
