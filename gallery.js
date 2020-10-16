let fs = require('fs');
let imageFileNames = fs.readdirSync('site/images');

// This code is just here to demonstrate how fs.readdirSync works


var htmlToWrite = "";

var header = "<!DOCTYPE html><html><head><title>Cool Static Gallery Web Page </title><link rel='stylesheet' href='css/main.css'></head><body><header id='page-header'><h1>Amazing Photo Gallery</h1></header>"
var pBlock = "<p>Coming soon™.</p>"
var imageGalleryDiv = "<div id = 'gallery'><div id = 'photoColumn'>"

htmlToWrite = header+pBlock+imageGalleryDiv;

for(let i = 0; i < imageFileNames.length; i++){
  //generate img tag
  topDiv = "<div class = 'container'>";
  imgTag = "<img class = 'image' src =  'images/" + imageFileNames[i] + "'" + "/>";
  bottomDiv = "<div class='overlay'><div class='text'>Very Nice Gypsy</div></div></div>"

  //concatenate to final ht
  var newLine = topDiv + imgTag + bottomDiv;
  htmlToWrite += newLine; /* or iageHTML*/
}

//html footer and closing tags

var footer = "</div></body></html>"

htmlToWrite += footer;

try {
  //write generate html to index.html
  const data = fs.writeFileSync('/Users/liamspringer/Desktop/project-js-static-photo-gallery/site/index.html', htmlToWrite)
} catch (err) {
  console.error(err)
}
