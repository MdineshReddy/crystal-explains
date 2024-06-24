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
    const frameworkLinkStatus = sessionStorage.getItem("framework-ul-container");
    if (frameworkLinkStatus == undefined || frameworkLinkStatus == null) {
      sessionStorage.setItem("framework-ul-container", "inactive");
    } else {
      if (frameworkLinkStatus == "active") {
        activateArticles(
          "framework-ul-container",
          "framework-display",
          "framework-ul",
          "framework-icon",
          "framework-icon-active",
          "0"
        );
      }
    }
  
    const centralLinksStatus = sessionStorage.getItem(
      "central-government-ul-container"
    );
    if (centralLinksStatus == undefined || centralLinksStatus == null) {
      sessionStorage.setItem("central-government-ul-container", "inactive");
    } else {
      if (centralLinksStatus == "active") {
        activateArticles(
          "central-government-ul-container",
          "central-government-display",
          "central-government-ul",
          "central-government-icon",
          "central-government-active",
          "0"
        );
      }
    }
  
    const stateLinksStatus = sessionStorage.getItem(
      "state-government-ul-container"
    );
    if (stateLinksStatus == undefined || stateLinksStatus == null) {
      sessionStorage.setItem("state-government-ul-container", "inactive");
    } else {
      if (stateLinksStatus == "active") {
        activateArticles(
          "state-government-ul-container",
          "state-government-display",
          "state-government-ul",
          "state-government-icon",
          "state-government-active",
          "0"
        );
      }
    }
  
    const localLinksStatus = sessionStorage.getItem(
      "local-government-ul-container"
    );
    if (localLinksStatus == undefined || localLinksStatus == null) {
      sessionStorage.setItem("local-government-ul-container", "inactive");
    } else {
      if (localLinksStatus == "active") {
        activateArticles(
          "local-government-ul-container",
          "local-government-display",
          "local-government-ul",
          "local-government-icon",
          "local-government-active",
          "0"
        );
      }
    }
  
    const constLinksStatus = sessionStorage.getItem(
      "const-nonconst-ul-container"
    );
    if (constLinksStatus == undefined || localLinksStatus == null) {
      sessionStorage.setItem("const-nonconst-ul-container", "inactive");
    } else {
      if (constLinksStatus == "active") {
        activateArticles(
          "const-nonconst-ul-container",
          "const-nonconst-display",
          "const-nonconst-ul",
          "const-nonconst-icon",
          "const-nonconst-active",
          "0"
        );
      }
    }
  
    const miscallaneousLinksStatus = sessionStorage.getItem(
      "miscallaneous-ul-container"
    );
    if (
      miscallaneousLinksStatus == undefined ||
      miscallaneousLinksStatus == null
    ) {
      sessionStorage.setItem("miscallaneous-ul-container", "inactive");
    } else {
      if (miscallaneousLinksStatus == "active") {
        activateArticles(
          "miscallaneous-ul-container",
          "miscallaneous-display",
          "miscallaneous-ul",
          "miscallaneous-icon",
          "miscallaneous-active",
          "0"
        );
      }
    }
  
    if (window.innerWidth < 800) {
      document.getElementsByClassName("article")[0].scrollIntoView();
    }
  });
  