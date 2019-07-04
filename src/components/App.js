import React, { Component, Fragment } from 'react';
import Header from './Header'
import Post from './Post'

export default class App extends Component {

    state = {
        posts: [
            {
                id: 1,
                image: 'encurtador.com.br/ijkAC',
                name: 'Gabriel de Freitas Santos',
                time: 'Há 3 min.',
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            },
            {
                id: 2,
                image: 'encurtador.com.br/ijkAC',
                name: 'João Augsuto Santos',
                time: 'Há 13 min.',
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            },
            {
                id: 3,
                image: 'encurtador.com.br/ijkAC',
                name: 'Fulano da Silva',
                time: 'Há 23 min.',
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            },
        ],
    };


    render(){
        const {posts} = this.state;
        return(
            <div>
                <Header/>
                {posts && posts.map(post => <Post key={post.id} data={post} />)}

            </div>
        )
    }
}
