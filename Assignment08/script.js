$(document).ready(function() {
  var imageRotationInterval = 3000;
  var textRotationInterval = 5000;
  var currentIndex = 0;
  var images = $(".image");
  var quotes = $(".quote");
  var shape = $("#shape");

  function rotateImages() {
    images.eq(currentIndex).fadeOut(1000, function() {
      currentIndex = (currentIndex + 1) % images.length;
      images.eq(currentIndex).fadeIn(1000).addClass("active");
    }).removeClass("active");
  }

  function rotateText() {
    var currentQuote = quotes.filter(".active");
    var nextQuote = currentQuote.next(".quote");
    if (nextQuote.length === 0) {
      nextQuote = quotes.first();
    }

    currentQuote.fadeOut(1000, function() {
      nextQuote.fadeIn(1000).addClass("active");
    }).removeClass("active");
  }

  function moveShape() {
    var containerWidth = $(window).width();
    var containerHeight = $(window).height();
    var shapeWidth = shape.width();
    var shapeHeight = shape.height();

    var initialLeft = Math.random() * (containerWidth - shapeWidth);
    var initialTop = Math.random() * (containerHeight - shapeHeight);

    var directionX = Math.random() > 0.5 ? 1 : -1;
    var directionY = Math.random() > 0.5 ? 1 : -1;

    shape.css({ left: initialLeft, top: initialTop }).fadeIn(500).animate({
      left: initialLeft + directionX * 100,
      top: initialTop + directionY * 100,
    }, 3000, function() {
      shape.fadeOut(500, function() {
        setTimeout(moveShape, 1000);
      });
    });
  }

  setInterval(rotateImages, imageRotationInterval);

  setInterval(rotateText, textRotationInterval);

  moveShape();
});
