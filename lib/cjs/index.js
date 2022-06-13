'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var AsyncStorage_Import = require('@react-native-async-storage/async-storage');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var AsyncStorage_Import__default = /*#__PURE__*/_interopDefaultLegacy(AsyncStorage_Import);

class AsyncStorage {
    async getItem(key, defaultValue, autoSet) {
        const def = defaultValue;
        try {
            let value = await AsyncStorage_Import__default["default"].getItem(key);
            if (value === null && def !== undefined && autoSet === true) {
                await this.setItem(key, def);
                value = await AsyncStorage_Import__default["default"].getItem(key);
            }
            const parsedValue = value === null ? undefined : JSON.parse(value);
            return (parsedValue === undefined ? def : parsedValue);
        }
        catch (e) {
            return def;
        }
    }
    async setItem(key, value) {
        await AsyncStorage_Import__default["default"].setItem(key, JSON.stringify(value));
    }
    async hasItem(key) {
        return !!(await this.getItem(key));
    }
    async removeItem(key) {
        await AsyncStorage_Import__default["default"].removeItem(key);
    }
}

exports.AsyncStorage = AsyncStorage;
