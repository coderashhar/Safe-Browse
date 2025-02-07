const BACKEND_URL = "http://127.0.0.1:5000/predict";

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "checkURL") {
    const { url } = message;

    // Validate URL
    if (!url || !url.startsWith("http")) {
      console.error("Invalid URL:", url);
      sendResponse({ isPhishing: false });
      return;
    }

    // Send URL to backend for analysis
    fetch(BACKEND_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        sendResponse({ isPhishing: data.isPhishing });
      })
      .catch((error) => {
        console.error("Error contacting backend:", error);
        sendResponse({ isPhishing: false });
      });

    return true; // Keep the messaging channel open for async responses
  } else if (message.action === "whitelistCurrentSite") {
    chrome.storage.local.get("whitelist", ({ whitelist }) => {
      whitelist = whitelist || [];
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const url = new URL(tabs[0].url).hostname;
        if (!whitelist.includes(url)) {
          whitelist.push(url);
          chrome.storage.local.set({ whitelist });
          console.log(`Added ${url} to whitelist.`);
        }
      });
    });
  } else if (message.action === "viewLogs") {
    // Open logs page from the logs folder
    chrome.tabs.create({ url: chrome.runtime.getURL("logs/logs.html") });
  }
});