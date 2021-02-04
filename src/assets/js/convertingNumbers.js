export function convertingNumbers (number) {
  switch (true) {
    case (number >= 1e+33):
    {
      const numberZeros = +String(number).replace(/^.+\+/, '')
      const powerOfTen = Math.trunc((numberZeros) / 3) * 3
      return {
        number: number / (1 * 10 ** powerOfTen),
        powerOfTen: powerOfTen
      }
    }
    case (number >= 1e+32):
      return { number: (number / 1e+30), powerOfTen: 30 }
    case (number >= 1e+29):
      return { number: (number / 1e+27), powerOfTen: 27 }
    case (number >= 1e+26):
      return { number: (number / 1e+24), powerOfTen: 24 }
    case (number >= 1e+23):
      return { number: (number / 1e+21), powerOfTen: 21 }
    case (number >= 1e+20):
      return { number: (number / 1e+18), powerOfTen: 18 }
    case (number >= 1e+17):
      return { number: (number / 1e+15), powerOfTen: 15 }
    case (number >= 1e+14):
      return { number: (number / 1e+12), powerOfTen: 12 }
    case (number >= 1e+11):
      return { number: (number / 1e+9), powerOfTen: 9 }
    case (number >= 100000000):
      return { number: (number / 1000000), powerOfTen: 6 }
    case (number >= 100000):
      return { number: (number / 1000), powerOfTen: 3 }
    default:
      return { number: (number), powerOfTen: 0 }
  }
}
