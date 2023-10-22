document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("video");

  faceapi.nets.ssdMobilenetvl.loadFromUri("*/models");
  faceapi.nets.faceLanmarkNet.loadFromUri("*/models");
  faceapi.nets.faceRecognitionNet.loadFromUri("*/models");

  function startWebcam() {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        video.srcObject = stream;
      })
      .catch((error) => {
        console.error(error);
      });
  }
  startWebcam();
});
