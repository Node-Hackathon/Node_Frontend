enum EventType {
  USER_LOGIN = 'user_login',
  USER_LOGOUT = 'user_logout',
}

interface EventListener {
  onEvent(eventType: EventType, payload: any): void;
}

class EventManager {
  private listeners: EventListener[] = [];

  public addListener(listener: EventListener) {
    this.listeners.push(listener);
  }

  public removeListener(listener: EventListener) {
    const index = this.listeners.indexOf(listener);
    if (index > -1) {
      this.listeners.splice(index, 1);
    }
  }

  public triggerEvent(eventType: EventType, payload: any) {
    this.listeners.forEach((listener) => {
      listener.onEvent(eventType, payload);
    });
  }
}

export {}; // 이 부분을 추가합니다.
