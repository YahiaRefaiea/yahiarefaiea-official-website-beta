function bucketAll() {
  var list = $('.template[data-template=bucketAll] ul')
  var link = list.find('li.archived a')

  //  LISTEN
  link.hover(function() {
    list.addClass('hover')
  }, function() {
    list.removeClass('hover')
  })
}