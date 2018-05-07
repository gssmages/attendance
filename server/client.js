exports.start = async (session, models, vars) => {
    await session.transform.attendance.start();
};