import avatar from './avatar.jpg'
import style from './index.scss'
import createImg from './createImg'

createImg()

var img = new Image()
img.src = avatar
img.classList.add(style.avatar)

var dom = document.getElementById('root')
dom.append(img)