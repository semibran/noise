const width = window.innerWidth
const height = window.innerHeight

let canvas = document.createElement("canvas")
let context = canvas.getContext("2d")
canvas.width = width
canvas.height = height
document.body.appendChild(canvas)

let time = 0
let images = new Array(30)
  .fill()
  .map(_ => {
    let image = context.createImageData(width, height)
    let length = image.width * image.height * 4
    for (let i = 0; i < length; i += 4) {
      let value = Math.floor(Math.random() * 256)
      image.data[i + 0] = value
      image.data[i + 1] = value
      image.data[i + 2] = value
      image.data[i + 3] = 255
    }
    return image
  })

context.putImageData(images[0], 0, 0)
requestAnimationFrame(loop)

function loop() {
  let index = ++time % images.length
  let image = images[index]
  context.putImageData(image, 0, 0)
  requestAnimationFrame(loop)
}
