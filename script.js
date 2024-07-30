document.querySelector('.langchange').addEventListener('click', function() {
    if (document.documentElement.lang === 'en') {
      window.location.href = 'index-hin.html';
    } else {
      window.location.href = 'index.html';
    }
  });