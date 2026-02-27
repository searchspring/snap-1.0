import { mergeParams } from './mergeParams';

describe('param merger', () => {
	it('merges params but keeps them as is when there is no need to merge them into an array', () => {
		const params = mergeParams({ foo: 'bar' }, { bar: 'baz' });

		expect(params).toEqual({ foo: 'bar', bar: 'baz' });
	});

	it('merges duplicates', () => {
		const params = mergeParams({ foo: ['baz', 'fromfoo'] }, { foo: 'bar' });

		expect(params).toEqual({ foo: ['bar', 'baz', 'fromfoo'] });
	});

	it('merges duplicates', () => {
		const params = mergeParams({ foo: ['baz', 'fromfoo'] }, { foo: 'baz' });

		expect(params).toEqual({ foo: ['baz', 'fromfoo'] });
	});

	it('merges duplicates with different order', () => {
		const params = mergeParams({ foo: 'bar' }, { foo: ['baz', 'fromfoo'] });

		expect(params).toEqual({ foo: ['bar', 'baz', 'fromfoo'] });
	});
});
