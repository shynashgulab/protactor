module.exports = {
    options: {
        'args': [
            '--disable-gpu',
            '--no-sandbox',
            '--start-maximized',
            '--disable-dev-shm-usage'
            ],
        'prefs': {
            // disable chrome's annoying password manager
            'profile.password_manager_enabled': false,
            'credentials_enable_service': false,
            'password_manager_enabled': false,
        },
        'excludeSwitches': ['enable-automation'],
        'useAutomationExtension': false,
    }
};