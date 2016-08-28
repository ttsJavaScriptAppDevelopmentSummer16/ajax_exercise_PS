$(document).ready(function(){

  //Get all posts

  $('button#allPosts').on('click', function(event){
    idValue = 'ul#' + $(this).attr('id');
    $(idValue).toggle();
  })

  var allPosts = $.get('https://jsonplaceholder.typicode.com/posts',
  function(data){
    button = $('button#allPosts');
    var newUl = $('<ul></ul>').attr('id', button.attr('id'));
    // newUl.html('This is Working');
    button.before(newUl);
    data.forEach(function(post){
      // console.log(post)
      liHtml = post.id + ' : ' + post.title;
      var newLi = $('<li id="item"></li>').html(liHtml);
      newUl.append(newLi)
    })
    newUl.hide();
  })

  //Get post with id of 10
  var postId10 = $.get('https://jsonplaceholder.typicode.com/posts',{"id": 10},
  function(data){
    console.log(data);
  })

  //Get the comments from post with id of 12
  var postCommentsId12 = $.get('https://jsonplaceholder.typicode.com/comments',{"postId": 12},
  function(data){
    console.log(data);
  })

  //Get all the posts from user with id of 2
  var userId2Posts = $.get('https://jsonplaceholder.typicode.com/posts',{"userId": 2},
  function(data){
    console.log(data);
  })

  //Create a new post and log the id generated for it by the server
  var newPost = $.post('https://jsonplaceholder.typicode.com/posts', {
    "userId": 10,
    "title": "Priyam wrote this",
    "body": "This is Priyam's message"
  }, function(response){
      console.log(response.id)
  })

  //Replace the post with id of 12 and render the responseJSON
  var replacePostId12 = $.ajax({
    method: 'PUT',
    url: 'http://jsonplaceholder.typicode.com/posts/12',
    data: {"userId": 2, "body": "This is Priyam's update for the body"},
    complete: function(response){
      console.log(response.responseJSON)
    }
  })
  //Update the title of post with id of 12 and render responseJSON
  var updatePostId12 = $.ajax({
    method: 'PUT',
    url: 'http://jsonplaceholder.typicode.com/posts/12',
    data: {"userId": 2, "title": "This is Priyam's update for the title"},
    complete: function(response){
      console.log(response.responseJSON)
    }
  })

  //Delete the post with id of 12 and render a success message
  var deletePostId12 = $.ajax({
    method: 'DELETE',
    url: 'http://jsonplaceholder.typicode.com/posts/12',
    complete: function(response){
      console.log("Message was succesfully Deleted")
    }
  })

  //Display a list of posts, and do fancy things
  var listOfPosts = $.each(allPosts.response,
  function(key, value){
    console.log(allPosts.responseJSON);
    console.log(key, value);
    console.log("id: ", value["id"], " title: ", value["title"]);
  })
})
