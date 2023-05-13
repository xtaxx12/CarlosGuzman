// Select the element that contains the video
let video = document.querySelector("#video");

// Check if the navigator.mediaDevices.getUserMedia method is available in the browser
if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
  .then(function (stream) {
    video.srcObject = stream;
  })
  .catch(function (err0r) {
    console.log("Algo salio mal");
  });
}
const stars = document.querySelectorAll('.stars i');

stars.forEach((star, index1) => {
  star.addEventListener('click', () => {
    stars.forEach((star, index2) => {
      index1 >= index2 ? star.classList.add('active') : star.classList.remove('active');
    });
  });
});