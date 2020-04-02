// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

// Test.assertEquals(domainName("http://google.com"), "google");
// Test.assertEquals(domainName("http://google.co.jp"), "google");
// Test.assertEquals(domainName("www.xakep.ru"), "xakep");
// Test.assertEquals(domainName("https://youtube.com"), "youtube");

function domainName(url) {
  const urlArray = url.split('');
  let startIndex;
  let endIndex;
  const findEnd = function(array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === ".") {
        return i;
      }
    }
  };
  if (url.includes("www.")) {
    for (let i = 0; i < urlArray.length; i++) {
      if (urlArray[i - 1] === '.' && urlArray[i - 2] === 'w' && urlArray[i - 3] === 'w' && urlArray[i - 4] === 'w') {
        startIndex = i;
      }
      const slicedArray = urlArray.slice(startIndex);
      endIndex = findEnd(slicedArray) + startIndex;
    }
  } else {
    for (let i = 0; i < urlArray.length; i++) {
      if (urlArray[i] !== "/" && urlArray[i - 1] === "/" && urlArray[i - 2] === "/") {
        startIndex = i;
      }
    }
    endIndex = findEnd(urlArray);
  }
  return urlArray.slice(startIndex, endIndex).join('');
};

