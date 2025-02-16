let headersLog = [];

browser.webRequest.onBeforeSendHeaders.addListener(
  (details) => {
    if (details.frameId === 0) { // Top-level navigation only
      let logEntry = {
        url: details.url,
        method: details.method,
        timeStamp: details.timeStamp,
        headers: details.requestHeaders
      };
      headersLog.push(logEntry);
    }
  },
  { urls: ["<all_urls>"] },
  ["requestHeaders"]
);

function downloadLog() {
  let blob = new Blob([JSON.stringify(headersLog, null, 2)], { type: "application/json" });
  let url = URL.createObjectURL(blob);

  browser.downloads.download({
    url: url,
    filename: "headers_log.json",
    saveAs: true
  });

  headersLog = []; // Clear log after download
}

// Listen for messages from popup
browser.runtime.onMessage.addListener((message) => {
  if (message.action === "download") {
    downloadLog();
  }
});