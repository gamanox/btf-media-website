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

      proyecto_entries = _.chain(pagelist.structured.proyecto)
        .filter(o => {
          return typeof o === "object";
        })
        .value(); // filter pages only

      for (page_id in proyecto_entries) {
        var page = proyecto_entries[page_id];
        console.log(page.name);
        console.log(page_id);
        if (page.hidden) {
          // proyecto_entries.splice(page_id, 1);
          delete proyecto_entries[page_id];
        } else {
          function get_content(page) {
            get_content_promises.push(
              enduro.api.flat.load(page.fullpath).then(content => {
                page.proyecto_entry = content;
              })
            );
          }

          get_content(page);
        }
      }
      console.log(proyecto_entries);

      return Promise.all(get_content_promises);
    })
    .then(() => {
      // pass proyecto entries as context for the template
      return options.fn(proyecto_entries);
    });
});
