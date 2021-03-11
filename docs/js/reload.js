function _redirect(url){
  // if url does not exist redirect to the page itself
  if (!url) url = window.location

  window.location = url;
}

function _checkLydia(){
  let lydia = sessionStorage.getItem("lydia");
  // the value is stored as String so the comparison needs to be between Strings
  return (lydia == "true");
}

function _setLydia(){
  sessionStorage.setItem("lydia", true);
}

function reload(){
  // if lydia is not defined, set it and reload the page
  if (!_checkLydia()) {
    _setLydia();
    _redirect();
  }
}
