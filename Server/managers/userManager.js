const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/User');
const Estate = require('../models/Estate')

exports.register = async (userdata) => {
    const user = await User.create(userdata);

    const result = getAuthResult(user);

    return result;
}

exports.login = async ({ email, password }) => {
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error('Invalid username or password');
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        throw new Error('Invalid username or password');
    }

    const result = getAuthResult(user);

    return result;
}

exports.addListingId = async (estateId, userId) => {
    let user = await User.findById(userId);
    user.listings.push(estateId);
    return user.save();
}

function getAuthResult(user,) {
    const payload = {
        _id: user._id,
        email: user.email,
    }

    // synchronous variant
    const token = jwt.sign(payload, 'SECRET', {expiresIn: '2d'});

    const result = {
        _id: user._id,
        email: user.email,
        accessToken: token,
    }

    return result;
}