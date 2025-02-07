// Sends the current page URL to the background script for checking
chrome.runtime.sendMessage({ action: "checkURL", url: window.location.href });