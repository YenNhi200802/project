let images = [
  {
    url: "https://cdn.vjshop.vn/tin-tuc/concept-chup-anh-cuoi/concept-chup-anh-cuoi-dep-nhat.jpg",
    caption: "Chúng ta sẽ về chung một nhà",
    info: "Ảnh cưới",
  },
  {
    url: "https://kenh14cdn.com/2019/5/31/photo-1-1559273235918772972227-15592813981001741901649-15592814273891061329346.png",
    caption: "Thanh xuân Tháng năm để dành",
    info: "Kỷ yếu",
  },
  {
    url: "https://mayanhhoangto.com/wp-content/uploads/2022/05/chup-anh.jpg",
    caption: "Phong cách thơ mộng, mềm mại, nữ tính",
    info: "Nàng thơ",
  },
  {
    url: "https://mayanhhoangto.com/wp-content/uploads/2022/05/vay-cong-chua.jpg",
    caption: "Thiếu nữ trong sáng trong bộ váy công chúa",
    info: "Nàng thơ",
  },
  {
    url: "https://mayanhhoangto.com/wp-content/uploads/2023/12/nhung-y-tuong-concept-chup-anh-sinh-nhat-ma-ban-phai-thu.jpg",
    caption: "Black Queen cho một cô gái yêu thích sự sang trọng và quý phái",
    info: "Sinh nhật",
  },
  {
    url: "https://mayanhhoangto.com/wp-content/uploads/2023/12/concept-chup-anh-sinh-nhat-beauty-queen.jpg",
    caption:
      "Chụp ảnh Beauty Queen này sẽ là một ý tưởng thú vị để thử trong dịp sinh nhật của mình",
    info: "Sinh nhật",
  },
  {
    url: "https://images2.thanhnien.vn/zoom/700_438/528068263637045248/2024/1/17/concept-chup-anh-tet-gaonau-2-17054650719451057190165-114-0-947-1333-crop-17054660565931047058204.jpg",
    caption:
      "Thời điểm cuối năm mọi người cùng rủ nhau chụp ảnh Tết với áo dài",
    info: "Chụp ảnh Tết",
  },
  {
    url: "https://htmediagroup.vn/wp-content/uploads/2021/10/Anh-profile-14-1170x781.jpg",
    caption: "Xây dựng thương hiệu cá nhân",
    info: "Chân dung",
  },
];
const mainView = document.getElementById("main-view");
const caption = document.getElementById("caption");
const info = document.getElementById("info");

const thumbnails = document.getElementById("thumbnails");

for (let i = 0; i < images.length; i++) {
  let image = images[i];
  let img = document.createElement("img");
  img.src = images[i].url;
  img.setAttribute("width", 170);
  img.setAttribute("data-index", i);
  img.addEventListener("click", changeImage);
  thumbnails.appendChild(img);
}

function initGallery() {
  loadImage(0);
}

function slideImage() {
  let currentIndex = parseInt(mainView.getAttribute("data-index"));
  currentIndex = currentIndex + 1 == images.length ? 1 : currentIndex + 1;
  loadImage(currentIndex);
  setTimeout(slideImage, 3000);
}

function changeImage(event) {
  let target = event.currentTarget;
  let index = target.getAttribute("data-index");
  loadImage(index);
}

function loadImage(index) {
  let image = images[index];
  mainView.src = image.url;
  mainView.setAttribute("data-index", index);
  mainView.setAttribute("id", "image-" + index);
  mainView.style.opacity = 1;
  caption.textContent = image.caption;
  info.textContent = image.info;
}

function fullScreenImage() {
  toggleFullscreen(mainView);
}

function toggleFullscreen(el) {
  if (
    document.fullscreenElement ||
    document.mozFullScreenElement ||
    document.webkitFullscreenElement ||
    document.msFullscreenElement
  ) {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  } else {
    if (document.documentElement.requestFullscreen) {
      el.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      el.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      el.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      el.msRequestFullscreen();
    }
  }
}

initGallery();
setTimeout(slideImage, 3000);
