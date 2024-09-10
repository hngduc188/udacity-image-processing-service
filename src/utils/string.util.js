const escapeRegex = async(string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

module.exports = {
    escapeRegex
}