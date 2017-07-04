(function() {
  var node = document.getElementById("timer"),
    accumulator = 0,
    timeoutID;

  node.innerHTML = `<span id="acc"></span>`;
  node.addEventListener("click", function() {
    console.log("clicked");
  });

  function tick() { node.innerHTML = `<span id="acc">${accumulator++}</span>`; }

  this.Timer = function() {
    this.start = function() {
      if (timeoutID) clearInterval(timeoutID);

      node.innerHTML = `<span id="acc">${accumulator}</span>`;
      timeoutID = setInterval(tick, 1000);
      tick();
    }

    this.stop = function() {
      if (timeoutID) clearInterval(timeoutID);
      // node.innerHTML = `<span id="acc"></span>`;
      accumulator = 0;
    }

    this.clear = function() {
      if (timeoutID) clearInterval(timeoutID);

      node.innerHTML = `<span id="acc"></span>`;
    }
  }
}());
