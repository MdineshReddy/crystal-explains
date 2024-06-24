function activateArticles(
    containerName,
    toggleClass,
    linksUl,
    iconName,
    iconToggleClass,
    type
  ) {
    const container = document.getElementsByClassName(containerName)[0];
    const icon = document.getElementsByClassName(iconName)[0];
    container.classList.toggle(toggleClass);
  
    const linksheigt = document
      .getElementsByClassName(linksUl)[0]
      .getBoundingClientRect().height;
  
    if (type === "0") {
      container.style.transitionDuration = "0s";
      icon.style.transitionDuration = "0s";
    } else {
      container.style.transitionDuration = "0.5s";
      icon.style.transitionDuration = "0.5s";
    }
  
    if (container.classList.contains(toggleClass)) {
      sessionStorage.setItem(containerName, "active");
      container.style.height = `${linksheigt}px`;
      icon.style.transform = "rotate(180deg)";
    } else {
      sessionStorage.setItem(containerName, "inactive");
      container.style.height = "0px";
      icon.style.transform = "rotate(0deg)";
    }
  }
  
  //on load
  
  window.addEventListener("load", () => {
    const ancientLinksStatus = sessionStorage.getItem(
      "ancient-india-ul-container"
    );
    if (ancientLinksStatus == undefined || ancientLinksStatus == null) {
      sessionStorage.setItem("ancient-india-ul-container", "inactive");
    } else {
      if (ancientLinksStatus == "active") {
        activateArticles(
          "ancient-india-ul-container",
          "ancient-display",
          "ancient-india-ul",
          "ancient-india-icon",
          "ancient-icon-active",
          "0"
        );
      }
    }
  
    const medievalLinksStatus = sessionStorage.getItem(
      "medieval-india-ul-container"
    );
    if (medievalLinksStatus == undefined || medievalLinksStatus == null) {
      sessionStorage.setItem("medieval-india-ul-container", "inactive");
    } else {
      if (medievalLinksStatus == "active") {
        activateArticles(
          "medieval-india-ul-container",
          "medieval-display",
          "medieval-india-ul",
          "medieval-india-icon",
          "medieval-icon-active",
          "0"
        );
      }
    }
  
    const modernLinksStatus = sessionStorage.getItem("modern-india-ul-container");
    if (modernLinksStatus == undefined || modernLinksStatus == null) {
      sessionStorage.setItem("modern-india-ul-container", "inactive");
    } else {
      if (modernLinksStatus == "active") {
        activateArticles(
          "modern-india-ul-container",
          "modern-display",
          "modern-india-ul",
          "modern-india-icon",
          "modern-icon-active",
          "0"
        );
      }
    }
  
    if (window.innerWidth < 800) {
      document.getElementsByClassName("article")[0].scrollIntoView();
    }
  });
  