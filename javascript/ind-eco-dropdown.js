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
    const indianEconomyLinksStatus = sessionStorage.getItem(
      "indian-economy-ul-container"
    );
    if (
      indianEconomyLinksStatus == undefined ||
      indianEconomyLinksStatus == null
    ) {
      sessionStorage.setItem("indian-economy-ul-container", "inactive");
    } else {
      if (indianEconomyLinksStatus == "active") {
        activateArticles(
          "indian-economy-ul-container",
          "indian-economy-display",
          "indian-economy-ul",
          "indian-economy-icon",
          "indian-economy-icon-active",
          "0"
        );
      }
    }
  
    // const bankingLinksStatus = sessionStorage.getItem("banking-ul-container");
    // if (bankingLinksStatus == undefined || bankingLinksStatus == null) {
    //   sessionStorage.setItem("banking-ul-container", "inactive");
    // } else {
    //   if (bankingLinksStatus == "active") {
    //     activateArticles(
    //       "banking-ul-container",
    //       "banking-display",
    //       "banking-ul",
    //       "banking-icon",
    //       "banking-icon-active",
    //       "0"
    //     );
    //   }
    // }
  
    const economicsLinksStatus = sessionStorage.getItem("economics-ul-container");
    if (economicsLinksStatus == undefined || economicsLinksStatus == null) {
      sessionStorage.setItem("economics-ul-container", "inactive");
    } else {
      if (economicsLinksStatus == "active") {
        activateArticles(
          "economics-ul-container",
          "economics-display",
          "economics-ul",
          "economics-icon",
          "economics-icon-active",
          "0"
        );
      }
    }
  
    if (window.innerWidth < 800) {
      document.getElementsByClassName("article")[0].scrollIntoView();
    }
  });
  