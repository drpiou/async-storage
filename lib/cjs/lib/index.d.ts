export default class AsyncStorage<S extends Record<string, unknown>> {
    getItem<K extends keyof S, D extends S[K] | undefined>(key: K, defaultValue?: D, autoSet?: boolean): Promise<D extends undefined ? S[K] | undefined : S[K]>;
    setItem<K extends keyof S>(key: K, value: S[K]): Promise<void>;
    hasItem(key: keyof S): Promise<boolean>;
    removeItem(key: keyof S): Promise<void>;
}
