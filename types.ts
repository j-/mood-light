export interface Unregister {
  (): void;
}

export interface MoodLightMode<TParams extends Record<string, unknown>> {
  (element: HTMLElement, params: TParams): Unregister | void;
}
