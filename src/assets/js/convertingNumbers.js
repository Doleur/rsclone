export function convertingNumbers(number) {
  switch (true) {
    case (number >= 1e+33):
      let numberZeros = +String(number).replace(/^.+\+/, '')
      let exponentOfTen = Math.trunc((numberZeros) / 3) * 3
      return {
        number: (number / (1 * 10 ** exponentOfTen)).toFixed(3),
        exponent: exponentOfTen
      };
    case (number >= 1e+30):
      return { number: (number / 1e+30).toFixed(3), exponent: 30 };
    case (number >= 1e+27):
      return { number: (number / 1e+27).toFixed(3), exponent: 27 };
    case (number >= 1e+24):
      return { number: (number / 1e+24).toFixed(3), exponent: 24 };
    case (number >= 1e+21):
      return { number: (number / 1e+21).toFixed(3), exponent: 21 };
    case (number >= 1e+18):
      return { number: (number / 1e+18).toFixed(3), exponent: 18 };
    case (number >= 1e+15):
      return { number: (number / 1e+15).toFixed(3), exponent: 15 };
    case (number >= 1e+12):
      return { number: (number / 1e+12).toFixed(3), exponent: 12 };
    case (number >= 1e+9):
      return { number: (number / 1e+9).toFixed(3), exponent: 9 };
    case (number >= 1000000):
      return { number: (number / 1000000).toFixed(3), exponent: 6 };
    case (number >= 1000):
      return { number: (number / 1000).toFixed(3), exponent: 3 };
    default:
      return { number: (number).toFixed(3), exponent: 0 };
  }
}
