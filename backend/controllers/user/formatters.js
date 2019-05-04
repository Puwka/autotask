const formatUserList = (users) => users.map(user => ({
    id: user._id,
    name: user.name,
    avaColors: user.avaColors
}));

const formatUserOne = (user) => ({
    id: user._id,
    role: user.role,
    name: user.name,
    avaColors: user.avaColors
});

module.exports = {
    formatUserList,
    formatUserOne
};
