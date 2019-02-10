const moment = require('moment');

exports.dateFormatter = () => {
    return moment().format('Do MMMM YYYY, hh:mm:ss');
}
