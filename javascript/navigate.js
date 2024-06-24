function navigate(msg) {
  switch (msg) {
    case "indian_history":
      window.open("./indian_history/pre_history.html", "_self");
      break;
    case "world_history":
      window.open("./world_history/american_revolution.html", "_self");
      break;
    case "indian_constitution":
      window.open("./constitution/historical_background.html", "_self");
      break;
    case "physical_geography":
      window.open("./physical_geography/introduction.html", "_self");
      break;
    case "indian_geography":
      window.open("./indian_geography/india_size_location.html", "_self");
      break;
    case "indian_economy":
      window.open(
        "./economics_indian_economy/introduction_to_economics_economy.html",
        "_self"
      );
      break;

    default:
      alert(msg + " is still in development");
  }
}
