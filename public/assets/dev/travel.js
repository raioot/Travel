(function () {
    'use strict';

    var window = this,
        document = window.document,
        onBlur = function(event) {
            var input = event.srcElement,
                placeholder = input.getAttribute('placeholder');
            if (input.value.length === 0 && placeholder) {
                input.value = placeholder;
            }
        },
        onFocus = function(event) {
            var input = event.srcElement,
                placeholder = input.getAttribute('placeholder');
            if (input.value === placeholder) {
                input.value = '';
            }
        };

    (function() {
        var input = document.getElementsByTagName('input'),
            counter = input.length,
            element,
            placeholder;

        while (counter--) {
            element = input[counter];
            placeholder = element.getAttribute('placeholder');
            if (placeholder) {
                if (element.addEventListener) {
                    element.addEventListener('blur', onBlur);
                    element.addEventListener('focus', onFocus);
                } else {
                    element.attachEvent('onblur', onBlur);
                    element.attachEvent('onfocus', onFocus);
                }

                if (!element.value.length) {
                    element.value = placeholder;
                }
            }
        }
    }());
}.call(this));
