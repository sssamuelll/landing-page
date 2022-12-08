function resizeImage() {
  var photo = document.getElementById("firstImage");
  var photos = document.querySelectorAll(".portrait-img");
  var height = photo.offsetHeight;
  if (height>0) {
    photos.forEach(photo => {
      $(photo).height(height);
     });  
  } else {
    resizeImage();
  }
}

$(document).ready(function() {

  resizeImage();

});


/* lightbox gallery */
$(document).on("click", '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});

$(document).on("click", '#galleryFullscreen', function(event) {
  var x = document.getElementById("windowPanel");
  var y = document.getElementById("window");
  var z = document.getElementById("ampliarPath");
  var w = document.getElementById("reducirPath");
  var photo = document.getElementById("firstImage");

  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.gridTemplateColumns = "1fr 8fr 22fr";
    z.style.display = "block"
    w.style.display = "none"
    resizeImage();
  } else {
    x.style.display = "none";
    y.style.gridTemplateColumns = "0fr auto";
    w.style.display = "block"
    z.style.display = "none"
    resizeImage();
  }
});


/*rigth click*/
feather.replace()
document.onclick = hideMenu;


function hideMenu() {
  document.getElementById(
    "contextMenu").style.display = "none"
}

$(".gallery-item").contextmenu(function(e) {
  e.preventDefault();

  if (document.getElementById(
      "contextMenu").style.display == "block")
    hideMenu();
  else {
    var menu = document
      .getElementById("contextMenu")
    menu.style.display = 'block';
    menu.style.left = e.pageX + "px";
    menu.style.top = e.pageY + "px";
  }
})

const fileTempl = document.getElementById("file-template"),
  imageTempl = document.getElementById("image-template"),
  empty = document.getElementById("empty");

// use to store pre selected files
let FILES = {};

// check if file is of type image and prepend the initialied
// template to the target element
function addFile(target, file) {
  const isImage = file.type.match("image.*"),
    objectURL = URL.createObjectURL(file);

  const clone = isImage ?
    imageTempl.content.cloneNode(true) :
    fileTempl.content.cloneNode(true);

  clone.querySelector("h1").textContent = file.name;
  clone.querySelector("li").id = objectURL;
  clone.querySelector(".delete").dataset.target = objectURL;
  clone.querySelector(".size").textContent =
    file.size > 1024 ?
    file.size > 1048576 ?
    Math.round(file.size / 1048576) + "mb" :
    Math.round(file.size / 1024) + "kb" :
    file.size + "b";

  isImage &&
    Object.assign(clone.querySelector("img"), {
      src: objectURL,
      alt: file.name
    });

  empty.classList.add("hidden");
  target.prepend(clone);
  console.log(objectURL)
  FILES[objectURL] = file;
}

const gallery = document.getElementById("gallery"),
  overlay = document.getElementById("overlay");

// click the hidden input of type file if the visible button is clicked
// and capture the selected files
const hidden = document.getElementById("hidden-input");
document.getElementById("button").onclick = () => hidden.click();
hidden.onchange = (e) => {
  for (const file of e.target.files) {
    addFile(gallery, file);
  }
};

// use to check if a file is being dragged
const hasFiles = ({
    dataTransfer: {
      types = []
    }
  }) =>
  types.indexOf("Files") > -1;

// use to track dragenter and dragleave events.
// this is to know if the outermost parent is dragged over
// without issues due to drag events on its children
let counter = 0;

// reset counter and append file to gallery when file is dropped
function dropHandler(ev) {
  ev.preventDefault();
  for (const file of ev.dataTransfer.files) {
    addFile(gallery, file);
    overlay.classList.remove("draggedover");
    counter = 0;
  }
}

// only react to actual files being dragged
function dragEnterHandler(e) {
  e.preventDefault();
  if (!hasFiles(e)) {
    return;
  }
  ++counter && overlay.classList.add("draggedover");
}

function dragLeaveHandler(e) {
  1 > --counter && overlay.classList.remove("draggedover");
}

function dragOverHandler(e) {
  if (hasFiles(e)) {
    e.preventDefault();
  }
}

// event delegation to caputre delete events
// from the waste buckets in the file preview cards
gallery.onclick = ({
  target
}) => {
  if (target.classList.contains("delete")) {
    const ou = target.dataset.target;
    document.getElementById(ou).remove(ou);
    gallery.children.length === 1 && empty.classList.remove("hidden");
    delete FILES[ou];
  }
};

// print all selected files
document.getElementById("submit").onclick = () => {

  alert(`Submitted Files:\n${JSON.stringify(FILES)}`);
  console.log(FILES);
};

// clear entire selection
document.getElementById("cancel").onclick = () => {
  while (gallery.children.length > 0) {
    gallery.lastChild.remove();
  }
  FILES = {};
  empty.classList.remove("hidden");
  gallery.append(empty);
};



