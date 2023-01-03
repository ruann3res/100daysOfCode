function findNemo(string) {
  const find = string.split(" ").findIndex((nemo) => nemo === "Nemo");

  if (find < 0) {
    throw Error("I can't find nemo :(");
  }
  return `I found Nemo at ${find + 1}!`;
}
module.exports = { findNemo };
