const session = require('smartux-connect');
session.transform.attendance = session.loadTransform('attendance');
require('./client');
session.start();