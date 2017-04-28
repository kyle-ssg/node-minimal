/**
 * Created by kylejohnson on 02/10/2016.
 */
const fs = require('fs');
var config;

module.exports = {
    get: () => {
        return new Promise((resolve, reject) => {
            if (config) {
                resolve(config);
                return;
            }

            fs.readFile('./server/config/config.json', (err, data) => {
                if (err) {
                    reject(err);
                    return;
                }

                config = JSON.parse(data);
                resolve(config);
            })
        });
    },
    set: (newConfig) => {

        return new Promise((resolve, reject) => {
            fs.writeFile('./server/config/config.json', JSON.stringify(newConfig, null, 2), (err, res) => {
                if (err) {
                    reject(err);
                    return;
                }

                config = newConfig;
                resolve();
            })
        })
    }
};
