export default function isPrimeNumber(number: number): boolean {
    const squareRoot = Math.sqrt(number);

    if (number <= 1) return false;
    if (number === 2) return true;
    if (number % 2 === 0) return false;

    for (let i = 2; i <= squareRoot; i++) {
        if (number % i === 0) return false;
    }

    return true;
}