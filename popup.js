document.addEventListener("DOMContentLoaded", function () {
  const changeButton = document.getElementById("changeButton");
  const tabTitleDisplay = document.getElementById("tabTitle");

  changeButton.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true },
      function (tabs) {
      const currentTab = tabs[0];
      const tabTitle = currentTab.title;
      tabTitleDisplay.textContent = tabTitle;
    });
  });
});
