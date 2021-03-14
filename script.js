const modal = document.getElementById("imgModal");
const imgages = document.querySelectorAll(".gallery_img");
const modalImg = document.querySelector(".modal-content");

function getImages() {
  imgages.forEach((src, index) => {
    src.src = `/images/${index + 1}.jpg`;
  });
}

getImages();

imgages.forEach((image) => {
  image.onclick = function () {
    // console.log(this.src);
    modal.style.display = "block";
    modalImg.src = this.src;
  };
});

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
