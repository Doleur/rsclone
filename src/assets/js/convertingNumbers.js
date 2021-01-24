export function convertingNumbers(number) {
  switch (true) {
    case (number >= 1e+33):
      let numberZeros = +String(number).replace(/^.+\+/, '')
      let exponentOfTen = Math.trunc((numberZeros) / 3) * 3
      return {
        number: (number / (1 * 10 ** exponentOfTen)).toFixed(3),
        exponent: exponentOfTen
      };
    case (number >= 1e+32):
      return { number: (number / 1e+30).toFixed(3), exponent: 30 };
    case (number >= 1e+29):
      return { number: (number / 1e+27).toFixed(3), exponent: 27 };
    case (number >= 1e+26):
      return { number: (number / 1e+24).toFixed(3), exponent: 24 };
    case (number >= 1e+23):
      return { number: (number / 1e+21).toFixed(3), exponent: 21 };
    case (number >= 1e+20):
      return { number: (number / 1e+18).toFixed(3), exponent: 18 };
    case (number >= 1e+117):
      return { number: (number / 1e+15).toFixed(3), exponent: 15 };
    case (number >= 1e+14):
      return { number: (number / 1e+12).toFixed(3), exponent: 12 };
    case (number >= 1e+11):
      return { number: (number / 1e+9).toFixed(3), exponent: 9 };
    case (number >= 100000000):
      return { number: (number / 100000000).toFixed(3), exponent: 6 };
    case (number >= 100000):
      return { number: (number / 1000).toFixed(3), exponent: 3 };
    default:
      return { number: (number).toFixed(3), exponent: 0 };
  }
}
