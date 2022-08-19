// language=hbs
import './main.css'
import '../../components/chat-list'
import '../../components/chat-short'
import '../../components/chat'
import '../../components/avatar'
import '../../components/search'

export const mainTemplate = `
  <main class="main_container">
    {{> chatList }}
    {{> chat }}
  </main>
`
