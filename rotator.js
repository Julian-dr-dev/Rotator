(function() {
    "use strict";

    let counter = 1;

    function contentRotator() {
        // Fade in the current paragraph
        $(`#container p:nth-child(${counter})`).fadeIn(2000, function() {
            // After it fades in, wait 7 seconds
            setTimeout(function() {
                $(`#container p:nth-child(${counter})`).fadeOut(2000, function() {
                    // Increment the counter or reset it if it's the last paragraph
                    if (counter === $("#container p").length) {
                        counter = 1;
                    } else {
                        counter++;
                    }
                    contentRotator();
                });
            }, 7000); 
        });
    }

    $(document).ready(function() {
        contentRotator(); 
    });

})();
