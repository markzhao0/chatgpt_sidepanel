chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true });

chrome.declarativeNetRequest.updateDynamicRules({
  removeRuleIds: [1],
  addRules: [
    {
      id: 1,
      priority: 1,
      action: {
        type: "modifyHeaders",
        responseHeaders: [
          {
            header: "content-security-policy",
            operation: "remove",
          },
          {
            header: "x-frame-options",
            operation: "remove",
          },
          {
            header: "frame-options",
            operation: "remove",
          },
          {
            header: "frame-ancestors",
            operation: "remove",
          },
          {
            header: "X-Content-Type-Options",
            operation: "remove",
          },
          {
            header: "access-control-allow-origin",
            operation: "set",
            value: "*",
          },
        ],
      },
      condition: {
        urlFilter: "||chatgpt.com",
        resourceTypes: ["main_frame", "sub_frame"],
      },
    },
  ],
});

chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === "install") {
    console.log("Extension installed");
  }
});

chrome.runtime.setUninstallURL("https://forms.gle/wHDu8HKqaiKiaDY37");
