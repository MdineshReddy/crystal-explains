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
    const indGeoLinksStatus = sessionStorage.getItem("ind-geo-ul-container");
  
    if (indGeoLinksStatus == undefined || indGeoLinksStatus == null) {
      sessionStorage.setItem("indGeoLinksStatus", "inactive");
    } else if (indGeoLinksStatus == "active") {
      activateArticles(
        "ind-geo-ul-container",
        "ind-geo-display",
        "ind-geo-ul",
        "ind-geo-icon",
        "ind-geo-active",
        "0"
      );
    }
  
    if (window.innerWidth < 800) {
      document.getElementsByClassName("article")[0].scrollIntoView();
    }
  });
  