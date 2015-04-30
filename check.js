if(window.getSelection().type == "Range"){
  var movie = window.getSelection().toString();
  var url = 'https://www.yify-torrent.org/search/'+movie+'/'
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", url, false);
  xmlHttp.send(null);
  var status = xmlHttp.status;
  if (status == 404)
    alert("Film not found!");
  else
    window.open(url);
} else {
  alert("Nothing selected.")
}
