const x = y => {
  // to replicate the bug, delete this line + the marker does not go away
  const z = 0
  return y + 1
}
