function customInterval(fn, interval) {
  const id = Date.now();

  if (!window.intervals) window.intervals = [];

  window.intervals.push(id);

  if (!window.clearCustomInterval) {
    window.clearCustomInterval = id => {
      const indexOfCurrentInterval = window.intervals.indexOf(id);
      window.intervals.splice(indexOfCurrentInterval, 1);
    }
  }

  function run() {
    setTimeout(() => {
      if (window.intervals.includes(id)) {
        fn();
        run();
      }
    }, interval);
  }

  run();

  return id;
}
