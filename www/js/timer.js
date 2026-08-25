let timer = null;
let seconds = 30 * 60;
let workedSeconds = 0;

function updateTimer() {
  const minute = Math.floor(seconds / 60);
  const second = seconds % 60;

  $("#focusTimer").text(
    String(minute).padStart(2, "0") + ":" + String(second).padStart(2, "0"),
  );
}

async function saveFocusTime() {
  const user = getCurrentUser();

  if (!user || workedSeconds <= 0) return;

  user.focusTime = (user.focusTime || 0) + workedSeconds;

  localStorage.setItem("user", JSON.stringify(user));

  await put("/api/profile", {
    id: user.id,
    username: user.username,
    email: user.email,
    picture: user.picture,
    focusTime: user.focusTime,
  });

  workedSeconds = 0;
}

$("#startTimer").on("click", function () {
  if (timer) return;

  timer = setInterval(async function () {
    seconds--;

    if ($("#Pomodoro").hasClass("active")) {
      workedSeconds++;
    }

    updateTimer();

    if (seconds <= 0) {
      clearInterval(timer);
      timer = null;

      const audio = new Audio(
        "https://actions.google.com/sounds/v1/alarms/beep_short.ogg",
      );

      audio.play();

      let mesaj = "Pomodoro tamamlandı!";

      if ($("#Kisa").hasClass("active")) {
        mesaj = "Kısa mola tamamlandı!";
      } else if ($("#Uzun").hasClass("active")) {
        mesaj = "Uzun mola tamamlandı!";
      }

      try {
        await saveFocusTime();
      } catch (err) {
        console.error(err);
      }

      addNotification("Focus Time", mesaj);

      alert(mesaj);
    }
  }, 1000);
});

$("#pauseTimer").on("click", function () {
  clearInterval(timer);
  timer = null;
});

$(".timerMode").on("click", function () {
  $(".timerMode").removeClass("active");
  $(this).addClass("active");
});

$("#resetTimer").on("click", function () {
  clearInterval(timer);
  timer = null;

  workedSeconds = 0;

  if ($("#Pomodoro").hasClass("active")) {
    seconds = 30 * 60;
  } else if ($("#Kisa").hasClass("active")) {
    seconds = 5 * 60;
  } else if ($("#Uzun").hasClass("active")) {
    seconds = 10 * 60;
  }

  updateTimer();
});

$("#Pomodoro").on("click", function () {
  clearInterval(timer);
  timer = null;

  workedSeconds = 0;
  seconds = 30 * 60;

  updateTimer();
});

$("#Kisa").on("click", function () {
  clearInterval(timer);
  timer = null;

  workedSeconds = 0;
  seconds = 5 * 60;

  updateTimer();
});

$("#Uzun").on("click", function () {
  clearInterval(timer);
  timer = null;

  workedSeconds = 0;
  seconds = 10 * 60;

  updateTimer();
});

$("#less").on("click", function () {
  if (seconds !== 0) {
    clearInterval(timer);
    timer = null;

    workedSeconds = 0;
    seconds -= 60;

    updateTimer();
  } else {
    alert("Sayaç doldu tekrar yeniden başlatın.");
  }
});

$("#plus").on("click", function () {
  if (seconds !== 60 * 60) {
    clearInterval(timer);
    timer = null;

    workedSeconds = 0;
    seconds += 60;

    updateTimer();
  } else {
    alert("Sayaç doldu tekrar yeniden başlatın.");
  }
});

updateTimer();
