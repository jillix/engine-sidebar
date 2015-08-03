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
    var self = this;
    self._config.selector = self._config.selector || ".sidebar[data-side]";
};

exports.load = function (data) {
    var self = this;

    // Initialize the sidebars
    $(self._config.selector).each(function () {
        var $this = $(this);
        $this.sidebar({ side: $this.attr("data-side") });
    });
};

["open", "close", "toggle"].forEach(function (c) {
    exports[c] = function (data) {
        $(data.sel).trigger("sidebar:" + c);
    };
});
