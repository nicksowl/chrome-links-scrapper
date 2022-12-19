console.log('linksCrawler.js loaded')

// // Getting header links
// let headerSelector = document.querySelector('header')
// let headerLinksSelector = headerSelector.querySelectorAll('a')

// let bodySelector = document.querySelector('body')
// let bodyLinkSelectors = bodySelector.querySelectorAll('a')

// // Saving links and text in an array with paiting or object
// let headerLinks = []
// let bodyLinks = []

// function getHeaderLinks() {
//   headerLinksSelector.forEach(function (element, index) {
//       console.table(index, element.innerText, element.href)
//       headerLinks[index] = { text: element.innerText, href: element.href}
//   })
// }
// function getBodyLinks() {
//   bodyLinkSelectors.forEach(function (element, index) {
//       console.table(index, element.innerText, element.href)
//       bodyLinks[index] = { text: element.innerText, href: element.href}
//   })
// }

// // getBodyLinks()

console.log('this is loaded as well')

// document.addEventListener('DOMContentLoaded', function () {
//     let checkPageButton = document.getElementById('clickIt');

//     console.log(checkPageButton)

//     // checkPageButton.addEventListener('click', function () {
//     //     chrome.tabs.getSelected(null, function (tab) {
//     //         alert('this is the tab: ' + tab.url);
//     //     });
//     // }, false);

//     // chrome.tabs.getSelected(null, function(tab) {
//     //     // Send a request to the content script.
//     //     chrome.tabs.sendRequest(tab.id, {action: "getDOM"}, function(response) {
//     //       console.log(response.dom);
//     //     });
//     //   });

//     chrome.tabs.getSelected(null, function(tab) {
//         var url = tab.url;
//         console.log(url)
//       });

// }, false);



  async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
  }

  console.log(getCurrentTab())
