function sum(a: number, b: number): number {
  return a + b;
}
console.log(sum(2, 3));

function isPalindrome(str: string): boolean;
{
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}
console.log(inPalindrome("radar"));
console.log(isPalindrome("hello"));
