document.getElementById("toggle").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: toggleOnlineReader
    });

    chrome.scripting.insertCSS({
      target: { tabId: tabs[0].id },
      files: ['style.css']
    });
  });
});

function toggleOnlineReader() {

  if (document.body.classList.contains("online-reader")) {
    document.body.classList.remove("online-reader");
    chrome.storage.local.set({ onlineReader: "off" }); 
  } else {
    document.body.classList.add("online-reader");
    chrome.storage.local.set({ onlineReader: "on" });   
  }
}
