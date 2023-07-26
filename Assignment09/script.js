$(document).ready(function() {
  $.ajax({
    url: 'books.json',
    dataType: 'json',
    success: function(data) {
      displayBooks(data);
      $('#bookDisplay').highlightBooks();
    },
    error: function() {
      alert('Failed to load the dataset.');
    }
  });
});

function displayBooks(books) {
  var $bookDisplay = $('#bookDisplay');
  var bookList = '<ul>';

  books.forEach(function(book) {
    bookList += '<li><b>Title:</b> ' + book.title + '</li>';
    bookList += '<li><b>Author:</b> ' + book.author + '</li>';
    bookList += '<li><b>Genre:</b> ' + book.genre + '</li>';
    bookList += '<br>';
  });

  bookList += '</ul>';
  $bookDisplay.html(bookList);
}

(function($) {
  $.fn.highlightBooks = function() {
    return this.each(function() {
      $(this).find('li').addClass('highlighted-book');
    });
  };
})(jQuery);
