$(document).ready(function() {
    // We are assuming that jQuery and jQuery Cookie plugin are included in the doc

    var role = $.cookie('user_role'); // Should return one of 'ADMIN', 'USER' OR 'GUEST'

    // set property for relevant css class
    if(role == "ADMIN") {
        // make everything visible
        $("<style type='text/css'>.role_admin, .role_user, .role_guest {display:block} </style>").appendTo("head");

    } else if(app.role == "USER") {
        // make user and guest part visible, admin part will remain invisible
        $("<style type='text/css'>.role_user, .role_guest {display:block} </style>").appendTo("head");

    } else if(app.role == "GUEST") {
        // only show the guest part
        $("<style type='text/css'>.role_guest {display:block} </style>").appendTo("head");
    }
});