// Getting header links
let headerSelector = document.querySelector('header')
let headerLinksSelector = headerSelector.querySelectorAll('a')

let bodySelector = document.querySelector('body')
let bodyLinkSelectors = bodySelector.querySelectorAll('a')

// headerLinks.forEach(element => console.log(element.href))
// headerLinks.forEach(element => console.log(element.innerText))

// headerLinks.forEach(element => element.addEventListener("click", function() { console.log('click') })
// Prevent from clicking on links

// Saving links and text in an array with paiting or object
let headerLinks = []
let bodyLinks = []
function getHeaderLinks() {
  // let counter = 0
  headerLinksSelector.forEach(function (element, index) {
      console.table(index, element.innerText, element.href)
      headerLinks[index] = { text: element.innerText, href: element.href}
  })
}
function getBodyLinks() {
  // let counter = 0
  bodyLinkSelectors.forEach(function (element, index) {
      console.table(index, element.innerText, element.href)
      bodyLinks[index] = { text: element.innerText, href: element.href}
  })
}


// let links = headerLinks.forEach(element => console.log(element.href))

// make list object with key value pair 

// "navigation" in id could be also sign of header

