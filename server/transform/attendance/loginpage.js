exports.loginpage = async (session, models, vars) => {
    models.loginpage = vars.page;
    await session.screen('loginpage');
};