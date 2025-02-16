document.addEventListener("DOMContentLoaded", () => {
  let downloadButton = document.getElementById("download");
  if (downloadButton) {
    downloadButton.addEventListener("click", () => {
      browser.runtime.sendMessage({ action: "download" });
    });
  } else {
    console.error("Download button not found!");
  }
});