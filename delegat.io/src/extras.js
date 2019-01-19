function roundToTwo(value) {
  return (Math.round(value * 100) / 100);
}

function roundToThree(value) {
  return (Math.round(value * 1000) / 1000);
}

export {
  roundToTwo,
  roundToThree,
}
