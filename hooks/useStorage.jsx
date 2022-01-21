export default function useStorage() {
	const isBrowser = () => typeof window !== 'undefined'
	const storageType = type =>
		`${type === 'local' ? 'local' : 'session'}Storage`

	const getItem = (key, type = 'local') => {
		return isBrowser() ? window[storageType(type)][key] : false
	}

	const setItem = (key, value, type = 'local') => {
		if (isBrowser()) {
			window[storageType(type)].setItem(key, value)
			return true
		} else {
			return false
		}
	}

	const removeItem = (key, type = 'local') => {
		return isBrowser() ? window[storageType(type)].removeItem(key) : ''
	}

	return {
		getItem,
		setItem,
		removeItem
	}
}
