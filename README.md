# `@drpiou/async-storage`

![GitHub](https://img.shields.io/github/license/drpiou/async-storage)
![GitHub package.json version](https://img.shields.io/github/package-json/v/drpiou/async-storage)
![Jest tests](https://img.shields.io/badge/stage-experimental-important)

The `@drpiou/async-storage` package wraps the `@react-native-async-storage/async-storage` package.

> - type AsyncStorage.
> - written in TypeScript.

<!--ts-->

- [Compatibility](compatibility)
- [Installation](#installation)
- [Example](#example)
- [Documentation](#documentation)

<!--te-->

## Compatibility

- React (17.0.2+)
- React Native (0.64.0+)
- Expo (43+)

## Installation

```shell
yarn add @drpiou/async-storage
```

### Peer Dependencies

React and React Native project:

```shell
yarn add @react-native-async-storage/async-storage@~1.17.3
```

Expo project:

```shell
expo install @react-native-async-storage/async-storage
```

## Example

```typescript
import { AsyncStorage } from '@drpiou/async-storage';

type StorageItemValueMap = {
  lang_code: string;
  theme: string;
};

const storage = new AsyncStorage<StorageItemValueMap>();
```

## Documentation

```typescript
class AsyncStorage<S extends Record<string, unknown>> {
  getItem: <K extends keyof S, D extends S[K] | undefined>(
    key: K,
    defaultValue?: D,
    autoSet?: boolean,
  ) => Promise<D extends undefined ? S[K] | undefined : S[K]>;

  setItem: <K extends keyof S>(key: K, value: S[K]) => Promise<void>;

  hasItem: (key: keyof S) => Promise<boolean>;
  
  removeItem: (key: keyof S) => Promise<void>
}
```
