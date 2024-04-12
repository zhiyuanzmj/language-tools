import type { VueCodeInformation } from '../types';

export function disableAllFeatures(override?: Partial<VueCodeInformation>): VueCodeInformation {
	return {
		verification: false,
		completion: false,
		semantic: false,
		navigation: false,
		structure: false,
		format: false,
		...override,
	};
}

export function enableAllFeatures(override?: Partial<VueCodeInformation>): VueCodeInformation {
	return {
		verification: true,
		completion: true,
		semantic: true,
		navigation: true,
		structure: true,
		format: true,
		...override,
	};
}

export function mergeFeatureSettings(base: VueCodeInformation, ...others: Partial<VueCodeInformation>[]): VueCodeInformation {
	const result: VueCodeInformation = { ...base };
	for (const info of others) {
		for (const key in info) {
			const value = info[key as keyof VueCodeInformation];
			if (value) {
				result[key as keyof VueCodeInformation] = value as any;
			}
		}
	}
	return result;
}
