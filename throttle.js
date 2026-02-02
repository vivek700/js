function handleResize(e) {
  console.log(`resize happend on event: ${e}`);
}

function throttle(func, delay) {
  const throttleTimeout = null;
  return function () {
    if (!throttleTimeout) {
      func.apply(this, arguments);
      throttleTimeout = setTimeout(() => {
        throttleTimeout = null;
      }, delay);
    }
  };
}

const thorttledHandleResize = throttle(handleResize, 1000);

window.addEventListener("resize", handleResize);
