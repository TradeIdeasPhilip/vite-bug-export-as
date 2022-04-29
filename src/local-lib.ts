export function goodStuff() {
  console.log("Running good stuff!")
}

export { goodStuff as reallyGoodStuff};

// This file seems to work as expected.
// I can import goodStuff or reallyGoodStuff.
// Either one will send the expected message to the log.