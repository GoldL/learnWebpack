import Header from './header'
import Content from './content'
import Sidebar from './sidebar'
import avatar from './avatar.jpg'

var img = new Image()
img.src = avatar

var dom = document.getElementById('root')
dom.append(img)

new Header()
new Content()
new Sidebar()