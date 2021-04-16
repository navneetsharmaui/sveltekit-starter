module.exports = {
	transform: {
		'^.+\\.svelte$': [
			'svelte-jester',
			{
				preprocess: './svelte.config.cjs',
			},
		],
		'^.+\\.ts$': 'ts-jest',
	},
	moduleFileExtensions: ['js', 'ts', 'svelte'],
	setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect', '<rootDir>/jest-setup.ts'],
};
