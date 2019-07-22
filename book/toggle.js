require(["gitbook", "jQuery"], function(gitbook, $) {

  function expand(chapter) {
    chapter.show();
    if (chapter.parent().attr('class') != 'summary'
        && chapter.parent().attr('class') != 'book-summary'
      && chapter.length != 0
       ) {
         expand(chapter.parent());
       }
  }

  gitbook.events.bind("page.change", function() {
    $chapter = $('li.chapter.active');
    $children = $chapter.children('ul.articles');
    $parent = $chapter.parent();
    $siblings = $chapter.siblings().children('ul.articles');
	$('li.chapter').children('ul.articles').hide();
	
	$('.expand').removeClass('fa-eye');
	$('.expand').removeClass('fa-eye-slash');

	//The below code can be used to display chevrons aligned to the right.  
	//Just remove the ```$('.expand').removeClass('fa-eye-slash');``` above
	/**
	$('.expand').css({'visibility': 'visible', 'float':'right'});
	$('.expand').addClass('fa-angle-up');
    $('.expand').click(function(){
      if ($(this).hasClass('fa-angle-up')){
		$(this).next('.articles').show();
		$(this).removeClass('fa-angle-up');
		$(this).addClass('fa-angle-down');
		$('.fa-angle-down').css('color', '#00bef0');
      } else {
		$(this).next('.articles').hide();
		$(this).removeClass('fa-angle-down');
		$(this).addClass('fa-angle-up');
		$('.fa-angle-up').css('color', '');
	  };
	});
	$('.fa-eye-slash.fa-angle-up').removeClass('fa-angle-up');
	$('.fa-eye-slash').addClass('fa-angle-down');
	$('.fa-eye-slash').removeClass('fa-eye-slash');
	$('.fa-angle-down').css('color', '#00bef0');
	 */


    expand($chapter);
    $('li.chapter.active').children('.expand').addClass('fa-angle-down');

    if ($children.length > 0) {
      $children.show();
	}

  });

});