import dbConn from "../config/db.js";

export const getUsers = (callback) => {
    // console.log(callback);
    const sqlQuery = 'SELECT * FROM users';
    dbConn.query(sqlQuery, (error, results) => {
        if (error) {
            return callback(error, null);
        }
        callback(null, results);
    });
};
