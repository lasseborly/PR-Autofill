chrome.tabs.onUpdated.addListener(tab => {
  console.log(tab)
  chrome.tabs.sendMessage(tab, 'inject')
})