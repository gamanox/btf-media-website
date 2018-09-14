var _ = require("lodash");
var Promise = require("bluebird");

enduro.templating_engine.registerHelper("proyecto", function(options) {
  // will store all the proyecto entries
  var proyecto_entries;

  // get_cms_list will return a structured list of all pages in a project
  return enduro.api.pagelist_generator
    .get_cms_list()
    .then(pagelist => {
      // will store the promises from reading all the proyecto entries
      var get_content_promises = [];

      proyecto_entries = _.chain(pagelist.structured.proyectos)
        .filter(o => {
          return typeof o === "object";
        })
        .value(); // filter pages only

      // goes through all the proyecto entries and loads their content
      proyecto_entries.shift();
      for (page_id in proyecto_entries) {
        var page = proyecto_entries[page_id];

        function get_content(page) {
          get_content_promises.push(
            enduro.api.flat.load(page.fullpath).then(content => {
              page.proyecto = content;
            })
          );
        }

        get_content(page);
      }

      return Promise.all(get_content_promises);
    })
    .then(() => {
      // pass proyecto entries as context for the template
      return options.fn(proyecto_entries);
    });
});
