import ChatAPI from '../api/chat-api';
import { WEBSOCKET_CHATS } from '../constants/constant-api';
import store from '../core/store';
import { TMessage } from '../utils/types';
import ChatController from './chat-controller';

class MessagesController {
  private _userId!: number;

  private _chatId!: string | number;

  private _token!: string;

  private _socket: WebSocket | null = null;

  private _pingIntervalFunc!: NodeJS.Timer;

  async connect(chatId: number) {
    this._closeConnection();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this._userId = store.getState().user!.id;
    this._chatId = chatId;
    this._token = await ChatAPI.getChatUsers(chatId);
    console.log(
      'URL',
      `${WEBSOCKET_CHATS}/${this._userId}/${this._chatId}/${this._token}`,
    );
    this._socket = await new WebSocket(
      `${WEBSOCKET_CHATS}/${this._userId}/${this._chatId}/${this._token}`,
    );
    this._setListeners();
    this._socket.onopen = () => this._openHandler();
    this._socket.onclose = () => this._closeHandler();
  }

  getMessages(num = 0) {
    if (this._socket) {
      this._socket.send(JSON.stringify({ content: num, type: 'get old' }));
    }
  }

  // eslint-disable-next-line consistent-return
  async sendMessage(messageText: string) {
    try {
      if (this._socket) {
        await this._socket.send(
          JSON.stringify({
            content: messageText,
            type: 'message',
          }),
        );
        ChatController.getChats();

        return true;
      }
    } catch (error) {
      return false;
    }
  }

  private _closeConnection() {
    if (this._socket) {
      clearInterval(this._pingIntervalFunc);
      this._socket.close();
      this._removeListeners();
    }
  }

  private _setListeners() {
    if (this._socket) {
      this._socket.addEventListener('message', this._messageHandler);
    }
  }

  private async _openHandler() {
    if (this._socket) {
      await this.getMessages();

      this._pingIntervalFunc = setInterval(() => {
        this._socket?.send(JSON.stringify({ type: 'ping' }));
      }, 10000);
    }
  }

  private _closeHandler(event?: any) {
    this._removeListeners();
    clearInterval(this._pingIntervalFunc);
  }

  private async _messageHandler(event: any) {
    const serverMessages: TMessage = JSON.parse(event.data);
    console.log(serverMessages);

    if (serverMessages.type !== 'pong') {
      if (Array.isArray(serverMessages)) {
        store.set('messages', serverMessages.reverse());
        console.log(store);
      } else {
        const stateMessages = store.getState()?.messages as TMessage[];
        stateMessages?.push(serverMessages);

        // const chatsUpdated = await ChatController.getChats();

        store.set('messages', stateMessages);
        // store.set('chats', chatsUpdated);
        console.log(store);
      }
    }
  }

  private _removeListeners() {
    if (this._socket) {
      this._socket.removeEventListener('message', this._messageHandler);
    }
  }
}

export default new MessagesController();
