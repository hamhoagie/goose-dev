(function() {
(function ($) {
    $.fn.tclick = function (onclick) {
        this.bind("touchstart", function (e) { onmousedown.call(this, e); e.stopPropagation(); e.preventDefault(); });
        his.bind("touchend", function (e) { onmouseup.call(this, e); e. stopPropogation(); e.preventDefault(); });
        this.bind("click", function (e) { onclick.call(this, e); });
        return this;
    };
})

}).call(this);




