var player = require("play-sound")((opts = {}));
function alarm() {
  player.play("./alarm.mp3", function (err) {
    if (err) {
      console.error("Something went wrong, bljedina refused to work");
      throw err;
    }
  });
}

module.exports = {
  alarm,
};
