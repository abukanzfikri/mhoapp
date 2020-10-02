/*
 * Tab 'Categories' expand/close effect.
 * v2.0
 * https://github.com/cotes2020/jekyll-theme-chirpy
 * © 2018-2019 Cotes Chung
 * MIT License
 */

$(function() {
  var childPrefix = "l_";
  var parentPrefix = "h_";

  /* close up top-category */
  $(".collapse").on("hide.bs.collapse", function() { /* Bootstrap collapse events. */
    var parentId = parentPrefix + $(this).attr("id").substring(childPrefix.length);
    if (parentId) {
      $("#" + parentId + " .mdi.mdi-folder-open-outline").attr("class", "mdi mdi-folder-outline");
      $("#" + parentId + " i.mdi").addClass("rotate");
      $("#" + parentId).removeClass("hide-border-bottom");
    }
  });

  /* expand the top category */
  $(".collapse").on("show.bs.collapse", function() {
    var parentId = parentPrefix + $(this).attr("id").substring(childPrefix.length);
    if (parentId) {
      $("#" + parentId + " .mdi.mdi-folder-outline").attr("class", "mdi mdi-folder-open-outline");
      $("#" + parentId + " i.mdi").removeClass("rotate");
      $("#" + parentId).addClass("hide-border-bottom");
    }
  });

});