import { describe, expect, it, vi } from 'vitest';
import {
	findLongestWord,
	charCount,
	mergeSortedArrays,
	groupBy,
	debounce,
	flattenArray
} from './premade-functions.js';

describe('findLongestWord', () => {
	it('should recieve a string and return the longest word', () => {
		// TODO
		// expect(...)
		expect(findLongestWord('Next generation testing framework')).toBe(
			'generation'
		);
	});
});

// Lav selv tests for de andre functions...

//charCount function

describe('charCount', () => {
	it('should receive a string and return an object with characters as keys and their number as values', () => {
		expect(charCount('generation')).toStrictEqual({
			a: 1,
			e: 2,
			g: 1,
			i: 1,
			n: 2,
			o: 1,
			r: 1,
			t: 1
		});
	});
});

// mergeSortedArrays function

describe('mergeSortedArrays', () => {
	it('should receive two sorted arrays and return a single sorted array', () => {
		expect(mergeSortedArrays([1, 2, 3], [4, 5, 6])).toStrictEqual([
			1, 2, 3, 4, 5, 6
		]);
	});
});

// flattenArray function

describe(flattenArray, () => {
	it('should receive a nested array and return a flat array', () => {
		expect(flattenArray([1, 2, 3, [4, 5, 6]])).toStrictEqual([
			1, 2, 3, 4, 5, 6
		]);
	});
});

// groupBy function

describe(groupBy, () => {
	const people = [{ name: 'alice', age: 34 }];
	it('Should receive an array of objects and a property name, and return an object grouped by the property', () => {
		expect(groupBy(people, 'age')).toStrictEqual({
			34: [{ name: 'alice', age: 34 }]
		});
	});
});

// debounce function

vi.useFakeTimers();

function testFuction() {
    console.log('testy McTest test');
}

describe(debounce, () => {
	it('should receive a function and a delay and return a debounced version of the function', () => {

        

	});
});
