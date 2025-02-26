function getBackgroundColour(accountName, role) {
    if (role.includes('NonProduction')) {
        return '#b7ca9d'; // Green
    }

    if (role == 'EmergencyAccess-Production') {
        return '#f2b0a9'; // Red
    }

    if (role == 'ReadOnlyAccess-Production') {
        return '#fad791'; // Orange
    }

    if (role == 'DefaultAccess-Production') {
        return '#fad791'; // Orange
    }

    if (accountName.includes('-prod')) {
        return '#f2b0a9'; // Red
    }
    else if (accountName.includes('-dev') || accountName.includes('-test') || accountName.includes('-acc')) {
        return '#b7ca9d'; // Green
    }

    return '#918f8c'; // Grey
}

function setAwsColours() {
    const info = {};
    const accInfo = window.wrappedJSObject.ConsoleNavService.AccountInfo;
    let role = '';

    if (accInfo && accInfo.roleDisplayNameAccount == undefined) {
        Object.assign(info, accInfo);
        let userMenu = document.querySelector('span[data-testid="awsc-nav-account-menu-button"] span');
        let accountName = info.loginDisplayNameAccount;
        let roleName = document.querySelector('div[data-testid="'+ info.loginDisplayNameUser+'"]');
       
        if (accInfo.loginDisplayNameUser.includes('AWSReservedSSO_')) {
            role = accInfo.loginDisplayNameUser.substring(15);
            role = role.substring(0, role.indexOf('_'));
            userMenu.textContent = role + ' @ ' + info.loginDisplayNameAccount;
        }
        else {
            userMenu.textContent = info.loginDisplayNameUser;
            accountName = info.loginDisplayNameUser
        }
        userMenu.style.backgroundColor = getBackgroundColour(accountName, role);
        userMenu.style.color = '#16191f';
        userMenu.style.borderRadius = '24px';
        userMenu.style.paddingLeft = '10px';
        userMenu.style.paddingRight = '10px';
        userMenu.parentElement.style.height = 'auto';

        roleName.style.display = 'none';
    }
}

setTimeout(setAwsColours, 5000);
