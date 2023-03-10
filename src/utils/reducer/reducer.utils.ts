export type ActionWithPayload<T, P> = {
  type: T;
  payload: P;
};

export function createAction<T extends string, P>(type: T, payload: P) {
  return { type, payload };
}
