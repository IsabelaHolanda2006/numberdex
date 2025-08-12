import allDivisorsOf from './allDivisorsOf';

export default function isPerfectNumber(number: number): boolean {
    const allDivisors = allDivisorsOf(number);
    const subNumber = typeof allDivisors === 'object'
    && allDivisors.reduce((accumulator, currentValue) => accumulator + currentValue, 0) - number;
    const isPerfectNumber = subNumber === number ? true : false;
    
    return isPerfectNumber;
}