import avatar from './avatar.jpg'
import './index.scss'

var img = new Image()
img.src = avatar
img.classList.add('avatar')

var dom = document.getElementById('root')
dom.append(img)