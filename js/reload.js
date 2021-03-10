function redirect(url){
  // if url does not exist redirect to the page itself
  if (!url) url = window.location

  window.location = url;
}
