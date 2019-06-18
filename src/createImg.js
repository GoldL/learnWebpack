import avatar from './avatar.jpg'

function createImg() {
  var img = new Image()
  img.src = avatar
  img.classList.add('avatar')

  var dom = document.getElementById('root')
  dom.append(img)
}

export default createImg