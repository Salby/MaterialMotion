$(document).ready(function() {
  $(".fab").click(function() {
    if ($(".fab").hasClass("fabInactive")) {
        $(".fab").removeClass("fabInactive").addClass("fabActive");
    } else {
        $(".fab").addClass("fabActive");
    }
    $(".fabLayer").addClass("fabLayerActive");
    $("meta[name='theme-color']").attr('content', '#ff5252');
  });
  $(".fabClose").click(function() {
    $(".fab").removeClass("fabActive").addClass("fabInactive");
    $(".fabLayer").removeClass("fabLayerActive");
    $("meta[name='theme-color']").attr('content', '#009688')
  });
});
