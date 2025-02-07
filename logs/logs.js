document.addEventListener("DOMContentLoaded", () => {
    // Access logs stored in chrome.storage.local
    chrome.storage.local.get("log", ({ log }) => {
      const logTable = document.getElementById("log-table");
      log = log || []; // Ensure logs exist
  
      // Populate the table with log entries
      log.forEach(entry => {
        const row = document.createElement("tr");
  
        const urlCell = document.createElement("td");
        urlCell.textContent = entry.url;
  
        const timestampCell = document.createElement("td");
        timestampCell.textContent = new Date(entry.timestamp).toLocaleString();
  
        row.appendChild(urlCell);
        row.appendChild(timestampCell);
        logTable.appendChild(row);
      });
    });
  });