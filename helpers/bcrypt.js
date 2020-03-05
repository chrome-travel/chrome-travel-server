const bcrypt = require('bcryptjs');

function hashPass(inputPass) {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(inputPass, salt);
    return hash
}

function comparePass(passInput, passHash){
    return bcrypt.compareSync(passInput, passHash)
}

module.exports = {
    hashPass,
    comparePass
}