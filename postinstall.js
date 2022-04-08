var player = require("play-sound")((opts = {}));

(function postinstall() {
  player.play("./alarm.mp3", function (err) {
    if (err) {
      console.error("Something went wrong, bljedina refused to work");
      throw err;
    }
  });
})();
