/* GET 'about us' page */
module.exports.about = function(req, res) {
    res.render('generic-text', {
        title: 'About the project',
        content: 'This is a website for poetry about endangered species, particularly about endangered species from the Bay Area, and particularly about the salt marsh harvest mouse'
    });
};