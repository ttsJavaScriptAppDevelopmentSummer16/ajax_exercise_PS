$(document).ready(function(){

  //Get all posts

  $('button#allPosts').on('click', function(event){
    idValue = 'ul#' + $(this).attr('id');
    $(idValue).toggle();
  })

  var allPosts = $.get('https://jsonplaceholder.typicode.com/posts',
  function(data){
    button = $('button#allPosts');
    // newUl.html('This is Working');
    data.forEach(function(post){
      // console.log(post)
      var newUl = $('<ul></ul>').attr('id', button.attr('id'));
      button.before(newUl);

      $.each(post, function(key,value){
        liHtml = key + ' : ' + value;
        var newLi = $('<li id="item"></li>').html(liHtml);
        newUl.append(newLi)
      })
      newUl.hide();
    })
  })

  //Get post with id of 10
  $('button#postId10').on('click', function(event){
    idValue = 'ul#' + $(this).attr('id');
    $(idValue).toggle();
  })

  var postId10 = $.get('https://jsonplaceholder.typicode.com/posts',{"id": 10},
  function(data){
    button = $('button#postId10');
    // newUl.html('This is Working');
    data.forEach(function(post){
      // console.log(post)
      var newUl = $('<ul></ul>').attr('id', button.attr('id'));
      button.before(newUl);

      $.each(post, function(key,value){
        liHtml = key + ' : ' + value;
        var newLi = $('<li id="item"></li>').html(liHtml);
        newUl.append(newLi)
      })
      newUl.hide();
    })
  })

  //Get the comments from post with id of 12
  $('button#postCommentsId12').on('click', function(event){
    idValue = 'ul#' + $(this).attr('id');
    $(idValue).toggle();
  })

  var postCommentsId12 = $.get('https://jsonplaceholder.typicode.com/comments',{"postId": 12},
  function(data){
    button = $('button#postCommentsId12');
    data.forEach(function(comment){
      var newUl = $('<ul></ul>').attr('id', button.attr('id'));
      // newUl.html('This is Working');
      button.before(newUl);
      // console.log(comment)
      $.each(comment, function(key, value){
        liHtml = key + ': ' + value;
        var newLi = $('<li id="item"></li>').html(liHtml);
        newUl.append(newLi)
      })
      newUl.hide();
    })
  })

  //Get all the posts from user with id of 2
  $('button#userId2Posts').on('click', function(event){
    idValue = 'ul#' + $(this).attr('id');
    $(idValue).toggle();
  })

  var userId2Posts = $.get('https://jsonplaceholder.typicode.com/posts',{"userId": 2},
  function(data){
    button = $('button#userId2Posts');
    data.forEach(function(post){
      var newUl = $('<ul></ul>').attr('id', button.attr('id'));
      // newUl.html('This is Working');
      button.before(newUl);
      // console.log(comment)
      $.each(post, function(key,value){
        liHtml = key + ' : ' + value;
        var newLi = $('<li id="item"></li>').html(liHtml);
        newUl.append(newLi)
      })
      newUl.hide();
    })
  })

  //Create a new post and log the id generated for it by the server
  $('button#newPost').on('click', function(event){
    idValue = 'ul#' + $(this).attr('id');
    $(idValue).toggle();
  })

  var newPost = $.post('https://jsonplaceholder.typicode.com/posts', {
    "userId": 10,
    "title": "Priyam wrote this",
    "body": "This is Priyam's message"
  },
  function(response){
    button = $('button#newPost');
    var newUl = $('<ul></ul>').attr('id', button.attr('id'));
    // newUl.html('This is Working');
    button.before(newUl);
    liHtml = "This is the new post id: " + response.id;
    var newLi = $('<li id="item"></li>').html(liHtml);
    newUl.append(newLi)
    newUl.hide();
  })

  //Replace the post with id of 12 and render the responseJSON
  $('button#replacePostId12').on('click', function(event){
    idValue = 'ul#' + $(this).attr('id');
    $(idValue).toggle();
  })

  var replacePostId12 = $.ajax({
    method: 'PUT',
    url: 'http://jsonplaceholder.typicode.com/posts/12',
    data: {"userId": 2, "body": "This is Priyam's update for the body"},
    complete: function(response){
      button = $('button#replacePostId12')
      var newUl = $('<ul></ul>').attr('id', button.attr('id'));
      button.before(newUl);
      $.each(response.responseJSON, function(key, value){
        liHtml = key + ': ' + value;
        var newLi = $('<li id="item"></li>').html(liHtml);
        newUl.append(newLi)
      })
      newUl.hide();
    }
  })

  //Update the title of post with id of 12 and render responseJSON
  $('button#updatePostId12').on('click', function(event){
    idValue = 'ul#' + $(this).attr('id');
    $(idValue).toggle();
  })

  var updatePostId12 = $.ajax({
    method: 'PUT',
    url: 'http://jsonplaceholder.typicode.com/posts/12',
    data: {"userId": 2, "title": "This is Priyam's update for the title"},
    complete: function(response){
      button = $('button#updatePostId12')
      var newUl = $('<ul></ul>').attr('id', button.attr('id'));
      button.before(newUl);
      $.each(response.responseJSON, function(key, value){
        liHtml = key + ': ' + value;
        var newLi = $('<li id="item"></li>').html(liHtml);
        newUl.append(newLi)
      })
      newUl.hide();
    }
  })

  //Delete the post with id of 12 and render a success message
  $('button#deletePostId12').on('click', function(event){
    idValue = 'ul#' + $(this).attr('id');
    $(idValue).toggle();
  })

  var deletePostId12 = $.ajax({
    method: 'DELETE',
    url: 'http://jsonplaceholder.typicode.com/posts/12',
    complete: function(response){
      button = $('button#deletePostId12')
      var newUl = $('<ul></ul>').attr('id', button.attr('id'));
      button.before(newUl);
      var newLi = $('<li id="item"></li>').html('Post succesfully deleted');
      newUl.append(newLi)
      newUl.hide();
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
