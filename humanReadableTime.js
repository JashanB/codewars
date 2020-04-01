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
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  for (let i = 0; i < secs; i += 1) {
    seconds += 1;
    if (seconds > 59) {
      seconds = 0;
      minutes += 1;
    }
    if (minutes > 59) {
      hours += 1;
      minutes = 0;
    }
  }
  const place0 = function (num) {
    let result = "";
    if (num < 10) {
      result = "0" + num.toString();
    } else {
      result = num.toString();
    }
    return result
  }
  console.log(hours)
  console.log(minutes)
  console.log(seconds)
  return place0(hours) + ":" + place0(minutes) + ":" + place0(seconds);
}