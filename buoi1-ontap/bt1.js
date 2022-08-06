const n = 100;
let square = 'So chinh phuong:';
let prime = 'So nguyen to:';

const findSquareNumber = (number) => {
  const sqrt = Math.sqrt(number); // 1.355666.
  if (sqrt === parseInt(sqrt)) return true;
  return false;
}

const findPrimeNumber = (number) => {
  if (number <= 2) return false;
  const _amongNumber = number - 1; //
  for (var i = 2; i <= _amongNumber; i++) {
    if (number % i === 0) return false;
  }
  return true;
}


for (var i = 0; i < n; i++) {
  if (findSquareNumber(i)) square += i + ' '

  if (findPrimeNumber(i)) prime += i + ' '

}
console.log(square)
console.log(prime)
