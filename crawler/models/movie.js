const getMovie = (name, href) => {
    const movie = {
        name: name,
        href: href,
    };

    return movie;
};

module.exports = {
    getMovie,
};
