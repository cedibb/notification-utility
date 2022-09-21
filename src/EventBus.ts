/* eslint-disable @typescript-eslint/no-dynamic-delete */

interface Registry {
  off: () => void;
}

interface Callable {
  [key: string]: Function;
}

interface Subscriber {
  [key: string]: Callable;
}

interface IEventBus {
  emit: <T>(event: string, arg?: T) => void;
  on: (event: string, callback: Function) => Registry;
}

export default class EventBus implements IEventBus {
  private static instance?: EventBus;
  private subscribers: Subscriber = {};
  private static nextId = 0;

  public emit<T>(event: string, arg?: T): void {
    const subscriber = this.subscribers[event];

    if (subscriber === undefined) {
      return;
    }

    Object.keys(subscriber).forEach((key) => subscriber[key](arg));
  }

  public on(event: string, callback: Function): Registry {
    const id = this.getNextId();
    if (!(event in this.subscribers)) this.subscribers[event] = {};

    this.subscribers[event][id] = callback;

    return {
      off: () => {
        delete this.subscribers[event][id];
        if (Object.keys(this.subscribers[event]).length === 0)
          delete this.subscribers[event];
      }
    };
  }

  private getNextId(): number {
    return EventBus.nextId++;
  }

  public static get currentInstance(): EventBus {
    if (this.instance === undefined) {
      this.instance = new EventBus();
    }

    return this.instance;
  }
}
