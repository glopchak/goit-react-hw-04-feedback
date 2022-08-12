export function countTotalFeedback() {
  const args = Array.prototype.slice.call(arguments);

  return args.reduce((acc, el) => {
    return acc + el;
  }, 0)
}
   
export function countPositiveFeedbackPercentage(total, positive) {
  return Math.floor((positive / total) * 100)
}