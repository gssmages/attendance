const session = require('smartux-connect');
session.transform.attendance = session.loadTransform('attendance');
require('./client');
require('./transform/attendance/loginpage');
session.start();