import AsyncStorage_Import from '@react-native-async-storage/async-storage';

class AsyncStorage {
    async getItem(key, defaultValue, autoSet) {
        const def = defaultValue;
        try {
            let value = await AsyncStorage_Import.getItem(key);
            if (value === null && def !== undefined && autoSet === true) {
                await this.setItem(key, def);
                value = await AsyncStorage_Import.getItem(key);
            }
            const parsedValue = value === null ? undefined : JSON.parse(value);
            return (parsedValue === undefined ? def : parsedValue);
        }
        catch (e) {
            return def;
        }
    }
    async setItem(key, value) {
        await AsyncStorage_Import.setItem(key, JSON.stringify(value));
    }
    async hasItem(key) {
        return !!(await this.getItem(key));
    }
    async removeItem(key) {
        await AsyncStorage_Import.removeItem(key);
    }
}

export { AsyncStorage };
