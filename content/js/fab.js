$(document).ready(function() {
  $(".fab").click(function() {
    // REMOVE CLASS .fabInactive IF IT EXISTS, THEN ADD CLASS .fabActive TO .fab
    if ($(".fab").hasClass("fabInactive")) {
        $(".fab").removeClass("fabInactive").addClass("fabActive");
    } else {
        $(".fab").addClass("fabActive");
    }
    $(".fabLayer").addClass("fabLayerActive");
    // CHANGE THEME-COLOR OF CHROME BAR AFTER 0.3 SECONDS
    setTimeout(function() {
      $("meta[name='theme-color']").attr('content', '#FF5722');
    }, 300);
  });
  $(".fabClose").click(function() {
    // REMOVE CLASS .fabActive REPLACE WITH CLASS .fabInactive
    $(".fab").removeClass("fabActive").addClass("fabInactive");
    $(".fabLayer").removeClass("fabLayerActive");
    // CHANGE THEME-COLOR OF CHROME BAR AFTER 0.1 SECONDS
    setTimeout(function() {
      $("meta[name='theme-color']").attr('content', '#607D8B')
    }, 200);
  });
});
