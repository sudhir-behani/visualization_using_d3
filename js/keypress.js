d3.keybinding = function() {
    var _keys = {
        keys: {
            // Left Arrow Key
            '←': 37, left: 37, 'arrow-left': 37,
            // Up Arrow Key
            '↑': 38, up: 38, 'arrow-up': 38,
            // Right Arrow Key
            '→': 39, right: 39, 'arrow-right': 39,
            // Down Arrow Key
            '↓': 40, down: 40, 'arrow-down': 40,
        }
    };
    var pairs = d3.entries(_keys.keys),
        event = d3.dispatch.apply(d3, d3.keys(_keys.keys));

    function keys(selection) {
        selection.on('keydown', function () {
            var modifiers = '';
            pairs.filter(function(d) {
                return d.value === d3.event.keyCode;
            }).forEach(function(d) {
                event[d.key](d3.event, modifiers);
            });
        });
    }

    return d3.rebind(keys, event, 'on');
};