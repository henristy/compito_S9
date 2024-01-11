import React, { Component } from 'react'
import Loading from './Loading';
import {url} from '../dati/dati'
import MessageError from './MessageError';
import Carousels from './Carousels';


export default class Franchise extends Component {

    state = {
        movies: [],
        errormsg: '',
        isLoading: false,
    }

    componentDidMount() {
        this.getMovies(this.props.movie.split(' ').join('%20'))
    }

    getMovies = async (movieName) => {
        this.setState({isLoading: true})
        const response = await fetch(url + movieName  , { method: 'GET'})
        const result = await response.json();
        this.setState({movies: result.Search})
        this.setState({errormsg: result.Error})
        this.setState({isLoading: false})
        
    }

    render() {
        return (
            <div className='mx-5'>
                <h2 className="mt-5 mb-3 text-uppercase">{!this.state.errormsg && this.props.movie}</h2>
                {this.state.isLoading && <Loading />}
                {this.state.errormsg && <MessageError errormsg={this.state.errormsg} />}
                {this.state.movies && <Carousels movies={this.state.movies} />}
            </div>
        )
    }
}

