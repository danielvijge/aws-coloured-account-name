function getColour(accountName) {
    if (accountName.includes('-prod')) {
        return '#f2b0a9';
    }
    else if (accountName.includes('-dev') || accountName.includes('-test') || accountName.includes('-acc')) {
        return '#b7ca9d';
    }
    else {
        return '#fad791';
    }
}

const info = {};
const accInfo = window.wrappedJSObject.ConsoleNavService.AccountInfo;

if (accInfo && accInfo.roleDisplayNameAccount == undefined) {
    Object.assign(info, accInfo);
    let userMenu = document.querySelector('span[data-testid="awsc-nav-account-menu-button"] span');
   
    if (accInfo.loginDisplayNameUser.includes('AWSReservedSSO_')) {
        role = accInfo.loginDisplayNameUser.substring(15);
        role = role.substring(0, role.indexOf('_'));
        userMenu.textContent = role + ' @ ' + info.loginDisplayNameAccount;
    }
    else {
        userMenu.textContent = info.loginDisplayNameAccount;
    }
    userMenu.style.backgroundColor = getColour(info.loginDisplayNameAccount);
    userMenu.style.color = '#16191f';
    userMenu.style.borderRadius = '24px';
    userMenu.style.paddingLeft = '10px';
    userMenu.style.paddingRight = '10px';
}