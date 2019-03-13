import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedin, faTwitch, faTwitter } from '@fortawesome/free-brands-svg-icons'

library.add(faGithub, faLinkedin, faTwitch, faTwitter)

export default function (Vue) {
  Vue.component('font-awesome', FontAwesomeIcon)
}