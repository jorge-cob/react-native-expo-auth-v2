export type ObjectLiteral = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

export type Maybe<T> = T | null | undefined;

export type MapProperties<T> = Record<string, T>;

export type NamedEntity<K = string> = {
  id: K;
  name?: string;
};
