function menu_profile () {
  var navItems = $('.admin-menu li > a');
  var navListItems = $('.admin-menu li');
  var allWells = $('.admin-content');
  var allWellsExceptFirst = $('.admin-content:not(:first)');
  allWellsExceptFirst.hide();
  navItems.click(function(e)
  {
    e.preventDefault();
    navListItems.removeClass('active');
    $(this).closest('li').addClass('active');
    allWells.hide();
    var target = $(this).attr('data-target-id');
    $('#' + target).show();
  });
};

$(document).ready(function()
{
  menu_profile();
  var button = document.querySelector('#go_to_profile');
  button.addEventListener("click", function(){
    menu_profile()
  });
});
