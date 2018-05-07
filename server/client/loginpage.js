exports.submit = async (session, models, vars) => {
    await session.transform.attendance.update('loginpage', models.loginpage);
    await session.transform.attendance.action('loginpage', 'submit');
};