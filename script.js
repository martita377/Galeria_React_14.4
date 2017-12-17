var movies = [
	{
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodzieju',
        img: 'https://static.posters.cz/image/750/plakaty/harry-potter-7-part-2-teaser-i11030.jpg'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        img: 'http://1.fwcdn.pl/po/68/78/6878/6927221.3.jpg'
    },
    {
        id: 3,
        title: 'Pocahonstas',
        desc: 'Film o "indiańskiej księżniczce"',
        img: 'https://cdn.traileraddict.com/content/walt-disney-pictures/pocahontas-2.jpg'
    }
];

var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },

    render: function() {
        return (
            React.createElement('li', {},
                React.createElement(MovieTitle, {
                    title: this.props.movie.title
                }),
                React.createElement(MovieDescription, {
                    desc: this.props.movie.desc
                }),
                React.createElement(MovieImg, {
                    img: this.props.movie.img
                })
            )
        );
    }
});

var MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
    },
    render: function() {
        return React.createElement('h2', {}, this.props.title);
    }
});

var MovieDescription = React.createClass({
    propTypes: {
        desc: React.PropTypes.string.isRequired,
    },
    render: function() {
        return React.createElement('p', {}, this.props.desc);
    }
});

var MovieImg = React.createClass({
    propTypes: {
        img: React.PropTypes.string.isRequired,
    },
    render: function() {
        return React.createElement('img', {
            src: this.props.img
        });
    }
});

var MovieList = React.createClass({
    propTypes: {
        movies: React.PropTypes.array.isRequired,
    },
    render: function() {
        var moviesElements = movies.map(function(movie) {
            return React.createElement(Movie, {
                key: movie.id,
                movie: movie
            });
        });
        return React.createElement('ul', {}, moviesElements);
    }
});
var element = React.createElement(MovieList, {
    movies: movies
});
ReactDOM.render(element, document.getElementById('app'));