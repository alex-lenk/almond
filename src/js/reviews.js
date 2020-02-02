$(document).ready(function() {
    var container = $('#container');

    $('.nextbutton').click(function () {
        container.theta_carousel('moveForward');
    });

    $('.prevtbutton').click(function () {
        container.theta_carousel('moveBack');
    });


    // fade in effect
    container.css({
        opacity: 0
    });
    container.delay(500).animate({
        opacity: 1
    }, 500);

    container.theta_carousel({
        "filter": ".ex-item",
        "selectedIndex": 15,
        "distance": 90,
        "numberOfElementsToDisplayRight": 3,
        "numberOfElementsToDisplayLeft": 3,
        "designedForWidth": 1350,
        "designedForHeight": 500,
        "distanceInFallbackMode": 820,
        "path": {
            "settings": {
                "shiftZ": -230,
                "width": 2300,
                "depth": 340,
                "rotateElements": true,
                "endless": true,
                "xyPathBezierPoints": {
                    "p1": {
                        "x": -100,
                        "y": 0
                    },
                    "p2": {
                        "x": 0,
                        "y": 0
                    },
                    "p3": {
                        "x": 0,
                        "y": 0
                    },
                    "p4": {
                        "x": 100,
                        "y": 0
                    }
                },
                "xyArcLengthBezierPoints": {
                    "p1": {
                        "x": 0,
                        "y": 0
                    },
                    "p2": {
                        "x": 100,
                        "y": 10
                    },
                    "p3": {
                        "x": 0,
                        "y": 90
                    },
                    "p4": {
                        "x": 100,
                        "y": 100
                    }
                },
                "xzPathBezierPoints": {
                    "p1": {
                        "x": -100,
                        "y": 50
                    },
                    "p2": {
                        "x": 0,
                        "y": 0
                    },
                    "p3": {
                        "x": 0,
                        "y": 0
                    },
                    "p4": {
                        "x": 100,
                        "y": 50
                    }
                }
            },
            "type": "cubic_bezier"
        },
        "sensitivity": 0.5,
        "allignElementsWithPath": true,
        "allignElementsWithPathCoefficient": -2,
        "shadow": false,
        "mousewheelEnabled": true,
        "fadeAway": true,
        "fadeAwayBezierPoints": {
            "p1": {
                "x": 0,
                "y": 100
            },
            "p2": {
                "x": 65,
                "y": 100
            },
            "p3": {
                "x": 90,
                "y": 100
            },
            "p4": {
                "x": 100,
                "y": 0
            }
        },
        "rotation": true,
        "rotationBezierPoints": {
            "p1": {
                "x": 0,
                "y": 0
            },
            "p2": {
                "x": 50,
                "y": 0
            },
            "p3": {
                "x": 50,
                "y": 0
            },
            "p4": {
                "x": 100,
                "y": 10
            }
        },
        "rotationVectorY": 0.3,
        "sizeAdjustment": true,
        "sizeAdjustmentBezierPoints": {
            "p1": {
                "x": 0,
                "y": 100
            },
            "p2": {
                "x": 30,
                "y": 70
            },
            "p3": {
                "x": 70,
                "y": 70
            },
            "p4": {
                "x": 100,
                "y": 60
            }
        },
        "popoutSelected": true,
        "popoutSelectedShiftZ": 50
    });
});