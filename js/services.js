angular.module('starter.services', [])



.factory('ToDo', function()
{
  var data = 
      {
      detail: 
          [
      {title: "book hotel", added: new Date()}
      , {title: "pick up dry cleaning ", added: new Date()}
      , {title: "record tv", added: new Date()}
          ]
      };
  
  function addToDo(title) 
    {
    data.details.push({title: title, added: new Date()});
    }
  
  return{
    data: data
    , addToDo: addToDo
  };
});
