exports.personalinfo = async (session, models, vars) => {
    await session.transform.attendance.action('personalinfo', 'personalinfo');
};