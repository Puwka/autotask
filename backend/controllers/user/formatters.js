const formatUserList = (users) => users.map(user => ({
    id: user._id,
    avaColors: user.avaColors
}));

const formatUserOne = (user) => ({
    id: user._id,
    avaColors: user.avaColors
});

module.exports = {
    formatUserList,
    formatUserOne
};
