function resizeImage() {
    var photo = document.getElementById("firstImage");
    var photos = document.querySelectorAll(".portrait-img");
    var height = photo.offsetHeight;
    photos.forEach(photo => {
      $(photo).height(height);
    });
    return;
}

$(".main-blogs").on("click", function (e) {
  $(".main-container").addClass("show");
  $(".main-container").scrollTop(0);
});

$(".main-blog").click(function () {
  var source = $(this).find("source").attr("src");
  var title = $(this).find(".main-blog__title").text();
  var person = $(this).find(".main-blog__author").text();
  var img = $(this).find(".author-img").attr("src");
  var image= $(this).find(".main-blog__img-source").attr("data-src");
  /*$(".video-stream video").stop();
  $(".video-stream source").attr("src", source);
  $(".video-stream video").load();*/
  console.log(image);
  $(".picture-stream").css("background-image",image);
  $(".video-p-title").text(title);
  $(".video-p-name").text(person);
  $(".video-detail .author-img").attr("src", img);
  
});

$(document).ready(function() {
  window.addEventListener("load", event => {
    resizeImage()
  });
});
  