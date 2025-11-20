export enum InteractionState {
  IDLE = 'IDLE',
  LISTENING = 'LISTENING',
  THINKING = 'THINKING',
  RESPONDING = 'RESPONDING',
  ERROR = 'ERROR'
}

export interface OracleResponse {
  prophecy: string;
  visualTheme: string;
}

export interface NavItem {
  label: string;
  href: string;
}
