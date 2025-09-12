// Implement a JavaScript function to calculate the Fibonacci sequence up to a given number.

function fibonacci(n) {
  const sequence = [0, 1]; // start with first two numbers

  // Generate until we reach or exceed n
  for (let i = 2; ; i++) {
    const next = sequence[i - 1] + sequence[i - 2];
    if (next > n) break;  // stop when exceeding the given number
    sequence.push(next);
  }

  return sequence;
}