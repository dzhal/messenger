import Block from './block';
import EventBus from './event-bus';
import { isEqual, set } from './helpers';
import { Indexed, TProps } from './types';

enum StoreEvents {
  UPDATED = 'UPDATED',
}

export class Store extends EventBus {
  private state: Indexed = {
    user: {
      first_name: 'dzhal',
      second_name: 'amninov',
      login: 'login123',
    },
  };

  public set(keypath: string, data: unknown) {
    set(this.state, keypath, data);
    this.emit(StoreEvents.UPDATED, this.getState());
  }

  public getState() {
    return this.state;
  }
}

const store = new Store();

export function withStore(mapStateToProps: (state: Indexed) => Indexed) {
  return function wrap(Component: typeof Block) {
    let previousState: Indexed;

    return class WithStore extends Component {
      constructor(props: TProps) {
        previousState = mapStateToProps(store.getState());

        super({ ...props, ...previousState });

        store.on(StoreEvents.UPDATED, () => {
          const stateProps = mapStateToProps(store.getState());

          if (isEqual(previousState, stateProps)) {
            return;
          }

          previousState = stateProps;

          this.setProps({ ...stateProps });
        });
      }
    };
  };
}

export default store;
