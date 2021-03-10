function _redirect(url){
  // if url does not exist redirect to the page itself
  if (!url) url = window.location

  window.location = url;
}

function _checkStorage(){
  let lydia = sessionStorage.getItem("lydia");
  // the value is stored as String so the comparison needs to be between Strings
  return (lydia == "true")
}
