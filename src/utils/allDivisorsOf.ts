export default function allDivisorsOf(number: number): number[] | string {
    const divisors: number[] = [];

    if (number === 0) {
        return 'None';
    }

    for (let i = 1; i <= number; i++) {
        if (number % i === 0) divisors.push(i);
    }

    return divisors;
}