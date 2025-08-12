import isEvenNumber from '../utils/isEvenNumber';
import checkResponse from '../utils/checkResponse';
import isPrimeNumber from '../utils/isPrimeNumber';
import allDivisorsOf from '../utils/allDivisorsOf';
import isPerfectNumber from '../utils/isPerfectNumber';
import { useState } from 'react';

interface NumberInfoProps {
    number: number
}

export default function NumberInfo({ number }: NumberInfoProps) {
    const [isDetailsOpen, setIsDetailsOpen] = useState<boolean>(false);
    const isNumberEven: string = checkResponse(isEvenNumber(number));
    const isNumberPrime: string = checkResponse(isPrimeNumber(number));
    const squareRoot: number = Math.sqrt(number);
    const cubeRoot: number = Math.cbrt(number);
    const allDivisors: number[] | string = allDivisorsOf(number);
    const isNumberPerfect = checkResponse(isPerfectNumber(number));
    const divisors: string = typeof allDivisors === 'object' ? allDivisors.slice(0).join(', ') : 'none';
    const sumOfDivisors: number | string = typeof allDivisors === 'object'
    ? allDivisors.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    : 'none';

    return (
        <div className='number-info'>
            <div>{`Is Even: ${isNumberEven}`}</div>
            <div>{`Square Root: ${squareRoot}`}</div>
            <div>{`Cube Root: ${cubeRoot}`}</div>
            <div>{`Is Prime Number: ${isNumberPrime}`}</div>
            <div>{`Sum of Divisors: ${sumOfDivisors}`}</div>
            <div>{`Is Perfect: ${isNumberPerfect}`}</div>
            <div>
                Divisors:
                <details open={isDetailsOpen} onToggle={() => setIsDetailsOpen(previous => !previous)}>
                    <summary>{isDetailsOpen === true ? 'Hide' : 'Show'} Divisors</summary>
                    {divisors}
                </details>
            </div>
        </div>
    );
}