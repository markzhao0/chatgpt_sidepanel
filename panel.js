document.addEventListener("DOMContentLoaded", () => {
  const iframe = document.querySelector("iframe");
  const loading = document.getElementById("loading");
  const feedbackLink = document.getElementById("feedback-link");
  const exporterLink = document.getElementById("exporter-link");
  const thanks = document.getElementById("thanks");

  if (feedbackLink) {
    feedbackLink.textContent = chrome.i18n.getMessage("feedback");
  }

  if (exporterLink) {
    exporterLink.textContent = chrome.i18n.getMessage("try_exporter");
  }

  if (thanks) {
    thanks.textContent = chrome.i18n.getMessage("thanks");
  }

  if (iframe && loading) {
    iframe.onload = () => {
      loading.style.display = "none";
    };
  }
});
