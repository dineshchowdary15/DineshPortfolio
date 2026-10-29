/* Small, framework-free enhancements. Content and links work without JavaScript. */
"use strict";

document.documentElement.classList.add("js");

// Mobile navigation: click to toggle, Escape to close, click outside to dismiss.
const menuButton = document.querySelector("[data-menu-button]");
const navigation = document.querySelector("[data-navigation]");
const header = document.querySelector(".site-header");

if (menuButton && navigation && header) {
  menuButton.hidden = false;

  const closeMenu = () => {
    navigation.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.querySelector("[data-menu-label]").textContent = "Menu";
  };

  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.querySelector("[data-menu-label]").textContent = isOpen ? "Close" : "Menu";
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navigation.classList.contains("is-open")) {
      closeMenu();
      menuButton.focus();
    }
  });

  document.addEventListener("click", (event) => {
    if (!header.contains(event.target)) closeMenu();
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Keep menu state consistent after changing between desktop and mobile.
  window.matchMedia("(min-width: 641px)").addEventListener("change", closeMenu);
}

// Display the current copyright year.
document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

// Copy email: only show success if the browser confirms the copy succeeded.
const copyButton = document.querySelector("[data-copy-email]");
const copyStatus = document.querySelector("[data-copy-status]");

if (copyButton && copyStatus) {
  copyButton.addEventListener("click", async () => {
    const email = copyButton.dataset.copyEmail;
    try {
      if (!navigator.clipboard || !window.isSecureContext) {
        throw new Error("Clipboard unavailable");
      }
      await navigator.clipboard.writeText(email);
      copyStatus.textContent = "Email address copied.";
    } catch {
      // File previews and browsers that block clipboard access use this fallback.
      copyStatus.textContent = "Select and copy the email address above.";
      const emailLink = document.querySelector(".email-address");
      if (emailLink) {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(emailLink);
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
  });
}

// If you add a portrait and the filename is wrong, keep the monogram visible.
document.querySelectorAll("[data-portrait]").forEach((portrait) => {
  const useFallback = () => {
    if (portrait.getAttribute("src") !== "assets/profile.svg") {
      portrait.src = "assets/profile.svg";
      portrait.alt = "DG monogram for Dinesh Chowdary Guduru";
    }
  };
  portrait.addEventListener("error", useFallback);
  if (portrait.complete && portrait.naturalWidth === 0) useFallback();
});
