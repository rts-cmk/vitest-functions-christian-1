import {
	afterAll,
	afterEach,
	beforeEach,
	describe,
	expect,
	it,
	vi
} from 'vitest';
import {
	findLongestWord,
	charCount,
	mergeSortedArrays,
	groupBy,
	debounce,
	flattenArray
} from './premade-functions.js';

describe('findLongestWord', () => {
	it('should receive a string and return the longest word', () => {
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

	//Tester på om det overhovedet er et object
	it('should retrun an object', () => {
		expect(charCount('Hello World')).toBeTypeOf('object');
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
	//Tester på om det overhovedet er et array
	it('should retrun an object', () => {
		expect(flattenArray([1, 2, 3, [4], 5])).toBeTypeOf('object');
	});

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

const mock = vi.fn(() => console.log('executed'));

describe('delayed execution', () => {
	beforeEach(() => {
		vi.useFakeTimers();
	});
	afterEach(() => {
		vi.restoreAllMocks();
	});

	it('should receive a function and a delay, and return a debounced version og the function', () => {
		debounce(mock, 50000);

		vi.advanceTimersByTime(2);
		expect(mock).not.toHaveBeenCalled(); //vi forventer ikke at den er blevet kaldt før tiden er gået
	});
});

//Davids løsning:

describe('delayed execution', () => {
	let mock;
	let debounced;

	beforeEach(() => {
		vi.useFakeTimers()
		mock = vi.fn(() => '2 sekunder efter')
		debounced = debounce(mock, 2000)
	})

	afterEach(() => {
		vi.useRealTimers();
		vi.clearAllMocks();
	})

	it('should receive a function and a delay, and return a debounced version og the function', () => {
		debounce(mock, 50000);
		expect(mock).not.toHaveBeenCalled();
	})
	
});
