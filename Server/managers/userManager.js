const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/User');
const Estate = require('../models/Estate');
const Rent = require('../models/Rent');

exports.register = async (userdata) => {
    if (await User.findOne({ email: userdata.email })) {
        throw new Error('Email is already a member!');
    }

    const user = await User.create(userdata);

    const result = getAuthResult(user);

    return result;
}

exports.login = async ({ email, password }) => {
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error('Invalid username or password!');
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        throw new Error('Invalid username or password!');
    }

    const result = getAuthResult(user);

    return result;
}

exports.addListingId = async (estateId, userId) => {
    return User.findByIdAndUpdate(userId, { $push: { listings: estateId } });
}

exports.addBookmarkId = async (estateId, userId) => {
    const user = await User.findById(userId);
    if (user.bookmarks.includes(estateId)) {
        throw new Error('Duplicate bookmarks!');
    }
    return User.findByIdAndUpdate(userId, { $push: { bookmarks: estateId } });
}

exports.removeBookmark = async (estateId, userId) => {
    const user = await User.findById(userId);
    let bookmarks = user.bookmarks;

    for (let i = 0; i < bookmarks.length; i++) {
        if (bookmarks[i] == estateId) {
            bookmarks.splice(i,1);
            break;
        }

        throw new Error('No bookmark to remove!');
    }

    return User.findByIdAndUpdate(userId, {bookmarks});
}

exports.returnListings = async (userId) => {
    const user = await User.findById(userId);
    let listings = [];
    let listingsIds = [];

    for (let id of user.listings) {
        const rent = await Rent.findById(id);
        const estate = await Estate.findById(id);

        if (rent) {
            listings.push(rent);
            listingsIds.push(rent._id);
        } else if (estate) {
            listings.push(estate);
            listingsIds.push(estate._id);
        }
    }

    await User.findByIdAndUpdate(userId, { listings: listingsIds });

    return listings;
}

exports.returnBookmarks = async (userId) => {
    const user = await User.findById(userId);
    let bookmarks = [];
    let bookmarksIds = [];

    for (let id of user.bookmarks) {
        const rent = await Rent.findById(id);
        const estate = await Estate.findById(id);

        if (rent) {
            bookmarks.push(rent);
            bookmarksIds.push(rent._id)
        } else if (estate) {
            bookmarks.push(estate);
            bookmarksIds.push(estate._id)
        }
    }

    await User.findByIdAndUpdate(userId, { bookmarks: bookmarksIds });

    return bookmarks;
}

function getAuthResult(user) {
    const payload = {
        _id: user._id,
        email: user.email,
    }

    // synchronous variant
    const token = jwt.sign(payload, 'SECRET', { expiresIn: '2d' });

    const result = {
        _id: user._id,
        email: user.email,
        accessToken: token,
    }

    return result;
}