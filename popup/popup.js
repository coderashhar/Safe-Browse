document.addEventListener("DOMContentLoaded", () => {
    const statusElement = document.getElementById("status");
    const whitelistButton = document.getElementById("whitelistButton");
    const viewLogsButton = document.getElementById("viewLogsButton");
  
    // Get the current tab's URL and check it
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const url = tabs[0].url;
      statusElement.textContent = "Checking the current website...";
      
      // Send the URL to the background script
      chrome.runtime.sendMessage({ action: "checkURL", url }, (response) => {
        if (response.isPhishing) {
          statusElement.textContent = "This site is flagged as phishing!";
        } else {
          statusElement.textContent = "This site is safe.";
        }
      });
    });
  
    // Whitelist the current site
    whitelistButton.addEventListener("click", () => {
      chrome.runtime.sendMessage({ action: "whitelistCurrentSite" });
    });
  
    // View logs
    viewLogsButton.addEventListener("click", () => {
      chrome.runtime.sendMessage({ action: "viewLogs" });
    });
  });