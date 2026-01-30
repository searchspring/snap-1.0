import { sprintf } from './sprintf';

describe('sprintf', () => {
	it('should substitute strings', () => {
		expect(sprintf('Hello %s!', 'World')).toBe('Hello World!');
		expect(sprintf('%s %s', 'Hello', 'World')).toBe('Hello World');
	});

	it('should display percent sign', () => {
		expect(sprintf('100%%')).toBe('100%');
	});

	it('should substitute numbers', () => {
		expect(sprintf('%d', 123)).toBe('123');
		expect(sprintf('%d', -123)).toBe('-123');
		expect(sprintf('%+d', 123)).toBe('+123');
		expect(sprintf('%+d', -123)).toBe('-123');
	});

	it('should format binary', () => {
		expect(sprintf('%b', 2)).toBe('10');
		expect(sprintf('%b', 10)).toBe('1010');
	});

	it('should format characters', () => {
		expect(sprintf('%c', 65)).toBe('A');
	});

	it('should format scientific notation', () => {
		expect(sprintf('%e', 100)).toBe('1e+2');
		expect(sprintf('%.2e', 100)).toBe('1.00e+2');
	});

	it('should format floats', () => {
		expect(sprintf('%.2f', 1.23456)).toBe('1.23');
		expect(sprintf('%.2f', 1.2)).toBe('1.20');
		expect(sprintf('%f', 1.2)).toBe('1.2'); // Implementation detail: default handling
	});

	it('should format octal', () => {
		expect(sprintf('%o', 8)).toBe('10');
	});

	it('should format unsigned', () => {
		expect(sprintf('%u', -123)).toBe('123');
	});

	it('should format hex', () => {
		expect(sprintf('%x', 255)).toBe('ff');
		expect(sprintf('%X', 255)).toBe('FF');
	});

	it('should handle padding', () => {
		expect(sprintf('%05d', 123)).toBe('00123');
		expect(sprintf("%'a5d", 123)).toBe('aa123');
		expect(sprintf('%-5d', 123)).toBe('123  ');
	});

	it('should handle argument swapping', () => {
		expect(sprintf('%2$s %1$s', 'World', 'Hello')).toBe('Hello World');
	});

	it('should handle precision on strings', () => {
		expect(sprintf('%.3s', 'abcdef')).toBe('abc');
	});

	it('should error on too few arguments', () => {
		expect(() => sprintf('%s')).toThrow('Too few arguments.');
	});

	it('should error on invalid type', () => {
		expect(() => sprintf('%d', 'string')).toThrow('Expecting number but found string');
	});

	it('should handle complex combinations', () => {
		// Note: The implementation places the sign after the zero-padding, which is non-standard but tested here for regression.
		expect(sprintf('%+010d', 123)).toBe('000000+123');
	});
});
