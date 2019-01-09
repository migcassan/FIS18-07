const jwt = require('jsonwebtoken');

module.exports.verifyJwtToken = (req, res, next) => {
    var token;
    if ('authorization' in req.headers)
        token = req.headers['authorization'].split(' ')[1];

    if (!token)
        return res.status(403).send({ auth: false, message: ' Token no proporcionado.' });
    else {
        jwt.verify(token,"SECRET#123",// process.env.JWT_SECRET,
            (err, decoded) => {
                if (err)
                    return res.status(500).send({ auth: false, message: 'Falló la autenticación de token.' });
                else {
                    req._id = decoded._id;
                    next();
                }
            }
        )
    }
}
