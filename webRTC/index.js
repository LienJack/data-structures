navigator.mediaDevices.enumerateDevices()
  .then(gotDevices)
  .catch(handleError)

function gotDevices(deviceInfo) {
  deviceInfo.forEach(devInfo => {
    // console.log(devInfo)
  })
}
function handleError(e) {

}
var constraints = {
  video : true,
  audio : true
}
var promise = navigator.mediaDevices.getUserMedia(constraints);
const videoplay = document.querySelector('video#player')
promise
  .then(stream => {
    videoplay.srcObject = stream
  })
  .catch(err => {
    console.log(err)
  })