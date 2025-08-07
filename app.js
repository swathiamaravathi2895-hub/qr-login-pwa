function redirect() {
  const url = document.getElementById("urlInput").value.trim();
  if (!url) {
    alert("Please enter a URL");
    return;
  }
  window.location.href = url;
}
