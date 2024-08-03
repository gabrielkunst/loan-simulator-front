export function isValidCPF(cpf: string): boolean {
  const formattedCPF = cpf.replace(/[^\d]/g, '')

  if (formattedCPF.length !== 11 || !!formattedCPF.match(/(\d)\1{10}/)) {
    return false
  }

  const digits = formattedCPF.split('').map((el) => +el)

  function getVerifyingDigit(arr: number[]): number {
    const reducer = (sum: number, digit: number, index: number) =>
      sum + digit * (arr.length + 1 - index)
    const reduced = arr.reduce(reducer, 0)
    return ((reduced * 10) % 11) % 10
  }

  return (
    getVerifyingDigit(digits.slice(0, 9)) === digits[9] &&
    getVerifyingDigit(digits.slice(0, 10)) === digits[10]
  )
}

export function isValidBirthdate(birthdate: string): boolean {
  const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/

  if (!regex.test(birthdate)) {
    return false
  }

  const [day, month, year] = birthdate.split('/').map(Number)
  const date = new Date(year, month - 1, day)

  return (
    date.getDate() === day &&
    date.getMonth() === month - 1 &&
    date.getFullYear() === year
  )
}

export function isValidLoanValue(loanValue: string): boolean {
  return !!loanValue.match(/^\d+(\.\d{1,2})?$/)
}

export function isValidMonthlyPayment(monthlyPayment: string): boolean {
  return !!monthlyPayment.match(/^\d+(\.\d{1,2})?$/)
}
