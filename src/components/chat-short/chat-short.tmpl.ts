// language=hbs
import './chat-short.css'

export default `
    <div class="chatShort">
      {{> avatar }}
      <div class="chatShort_chatInfo">
        <div class="chatShort_chatName">
            {{ name }}
        </div>
        <div class="chatShort_content">
            {{ text }}
        </div>
        <time class="chatShort_time">
            {{ time }}
        </time>
        <div class="chatShort_count">
            {{ count }}
        </div>
      </div>
    </div>
`
