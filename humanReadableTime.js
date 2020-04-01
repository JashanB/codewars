// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

// describe('examples', function() {
//   it('should format correctly', function() {
//     Test.assertEquals(humanReadable(0), '00:00:00', 'humanReadable(0)');
//     Test.assertEquals(humanReadable(5), '00:00:05', 'humanReadable(5)');
//     Test.assertEquals(humanReadable(60), '00:01:00', 'humanReadable(60)');
//     Test.assertEquals(humanReadable(86399), '23:59:59', 'humanReadable(86399)');
//     Test.assertEquals(humanReadable(359999), '99:59:59', 'humanReadable(359999)');
//   });
// });

function humanReadable(secs) {
  let roundedHours = false;
  let roundedMinutes = false;
  let hours = 0;
  let hrString = "";
  let minutes = 0;
  let minString = "";
  let seconds = 0;
  let secString = "";
  if (secs >= 3600) {
    let goesInto = Math.round(secs / 3600);
    hours += goesInto;
    let hourNotRound = (secs / 3600).toString().split('');
    let hourIndex = hourNotRound.indexOf(".")
    if ((secs / 3600) < goesInto && hourNotRound[hourIndex + 1] == 9) {
      roundedHours = true;
    }
    let remaining = secs - (goesInto * 3600);
    if (remaining >= 60) {
      goesInto = Math.round(remaining / 60);
      minutes += goesInto;
      remaining = secs - (goesInto * 3600);
      if (remaining > 0) {
        seconds += remaining;
      }
      let minNotRound = (remaining / 60).toString().split('');
      let index = minNotRound.indexOf(".")
      if ((remaining /60) < goesInto && minNotRound[index + 1] == 9) {
        roundedMinutes = true;
      }
    } else {
      if (remaining > 0) {
        seconds += remaining;
      }
    }
  } else if (secs >= 60) {
    let goesInto = Math.round(secs / 60);
    minutes += goesInto;
    let remaining = secs - (goesInto * 3600);
    if (remaining > 0) {
      seconds += remaining;
    }
    let minNotRound = (secs / 60).toString().split('');
    let index = minNotRound.indexOf(".")
    if ((secs / 60) < goesInto && minNotRound[index + 1] == 9) {
      roundedMinutes = true;
    }
  } else {
    seconds += secs
  }
  if (roundedHours) {
    hours -= 1;
    minutes = 59;
    seconds = 59;
  }
  if (roundedMinutes) {
    minutes -= 1;
    seconds = 59;
  }
  if (hours < 10) {
    hrString = "0" + hours.toString();
  } else {
    hrString = hours.toString();
  }
  if (minutes < 10) {
    minString = "0" + minutes.toString();
  } else {
    minString = minutes.toString();
  }
  if ( seconds < 10) {
    secString = "0" + seconds.toString();
  } else {
    secString = seconds.toString();
  }
  return hrString + ":" + minString + ":" + secString
}
