// Dependencies
var $ = require("/libs/jquery");
require("./libs/sidebar")

/**
 * init
 *
 * @name init
 * @function
 * @return {undefined}
 */
exports.init = function () {

    var conf = this._config;
    conf.selector = conf.selector || ".sidebar[data-side]";

    // Initialize the sidebars
    $(conf.selector).each(function () {
        var $this = $(this);
        $this.sidebar({ side: $this.attr("data-side") });
    });
};

["open", "close", "toggle"].forEach(function (c) {
    exports[c] = function (_, data) {
        $(data.sel).trigger("sidebar:" + c);
    };
});

