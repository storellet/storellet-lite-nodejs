const { GoogleSpreadsheet } = require('google-spreadsheet');
const credentials = require('../config/credentials');

const getSpreadSheet = async (url) => {
    const doc = new GoogleSpreadsheet(url);

    //TODO : update with real spread sheet
    await doc.useServiceAccountAuth(credentials);
    await doc.loadInfo().catch((e)=>{
        console.log(e);
    });

    return doc;
}

module.exports = {
    getSpreadSheet,
};