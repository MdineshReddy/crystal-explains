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
    const geomorphologyLinksStatus = sessionStorage.getItem(
      "geomorphology-ul-container"
    );
    if (
      geomorphologyLinksStatus == undefined ||
      geomorphologyLinksStatus == null
    ) {
      sessionStorage.setItem("geomorphology-ul-container", "inactive");
    } else {
      if (geomorphologyLinksStatus == "active") {
        activateArticles(
          "geomorphology-ul-container",
          "geomorphology-display",
          "geomorphology-ul",
          "geomorphology-icon",
          "geomorphology-active",
          "0"
        );
      }
    }
  
    const climatologyLinksStatus = sessionStorage.getItem(
      "climatology-ul-container"
    );
    if (climatologyLinksStatus == undefined || climatologyLinksStatus == null) {
      sessionStorage.setItem("climatology-ul-container", "inactive");
    } else {
      if (climatologyLinksStatus == "active") {
        activateArticles(
          "climatology-ul-container",
          "climatology-display",
          "climatology-ul",
          "climatology-icon",
          "climatology-icon-active",
          "0"
        );
      }
    }
  
    const oceanographyLinksStatus = sessionStorage.getItem(
      "oceanography-ul-container"
    );
    if (oceanographyLinksStatus == undefined || oceanographyLinksStatus == null) {
      sessionStorage.setItem("oceanography-ul-container", "inactive");
    } else {
      if (oceanographyLinksStatus == "active") {
        activateArticles(
          "oceanography-ul-container",
          "oceanography-display",
          "oceanography-ul",
          "oceanography-icon",
          "oceanography-icon-active",
          "0"
        );
      }
    }
  
    const biogeographyLinksStatus = sessionStorage.getItem(
      "biogeography-ul-container"
    );
    if (biogeographyLinksStatus == undefined || biogeographyLinksStatus == null) {
      sessionStorage.setItem("biogeography-ul-container", "inactive");
    } else {
      if (biogeographyLinksStatus == "active") {
        activateArticles(
          "biogeography-ul-container",
          "biogeography-display",
          "biogeography-ul",
          "biogeography-icon",
          "biogeography-icon-active",
          "0"
        );
      }
    }
  
    if (window.innerWidth < 800) {
      document.getElementsByClassName("article")[0].scrollIntoView();
    }
  });
  