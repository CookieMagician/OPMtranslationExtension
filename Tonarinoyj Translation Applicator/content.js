var element = document.getElementsByClassName("image-container")[0];

let positions = element.getElementsByTagName('p');


var length = positions.length;


var chapterCode = location.href.replace("https://tonarinoyj.jp/episode/", "");;


chrome.storage.sync.get(['currentHost'], function(result) {


  var host = result.currentHost;

  console.log(host);

  for (var i = 0; i < length; i++) {
    if (positions[i].hasChildNodes()) {
      var childImg = positions[i].childNodes[0];
      childImg.style = "position: absolute; z-index: -1;"

      var newImg = new Image();
      newImg.src = host + chapterCode + "/"+i+".png";
      newImg.style = "z-index: 1;";
      newImg.className = "page-image js-page-image";
      positions[i].appendChild(newImg);

    } else {
      var newImg = new Image();
      newImg.src = host + chapterCode + "/"+i+".png";
      newImg.style = "position: absolute; z-index: 1;";
      newImg.className = "page-image js-page-image";
      positions[i].appendChild(newImg);
    }

  }
});
