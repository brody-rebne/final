'use strict';

let $likeButtons = $('.upvote');

// callback func for upvote click
function likeMe() {
  let $counter = $(this).siblings('span');
  let count = parseInt($counter.text());
  count++
  $counter.text(count);
}
// event handler for upvote click
$likeButtons.click(likeMe);
