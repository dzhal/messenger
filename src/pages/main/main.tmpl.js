// language=hbs
import './main.css'
import { chatList } from '../../components/chat-list'
import { chatShort } from '../../components/chat-short'
import { chat } from '../../components/chat'
import { avatar } from '../../components/avatar'
import { search } from '../../components/search'

export const mainTemplate = `
  <main class="main_container">
    {{> chatList }}
    {{> chat }}
  </main>
`
