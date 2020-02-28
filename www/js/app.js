'use strict';

let $likeButtons = $('.upvote');
let $addButton = $('#add');

// callback func for upvote click
function likeMe() {
  let $counter = $(this).siblings('span');
  let count = parseInt($counter.text());
  count++;
  $counter.text(count);
  $.ajax(`http://localhost:3000/characters/${$(this).attr('name')}`, {method: 'PUT', dataType: 'JSON'});
}

let $hbarsTemp = $('#handlebars').html();

let currentPage = 1;

function getMore() {
  $.ajax(`http://localhost:3000/characters?page=${currentPage}`, {method: 'GET', dataType: 'JSON'}).then(data => {
    data.forEach(char => {
      let temp = Handlebars.compile($hbarsTemp);
      let context = {
        'name': char.name,
        'votes': char.likes,
      }
      let compiled = temp(context);
      $('.characters').append(compiled);
    })
  }).catch(err => console.error(err));
}

// event handlers
$likeButtons.click(likeMe);
$addButton.click(getMore);
