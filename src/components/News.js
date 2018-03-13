import React, {Component} from 'react';
import Post from './Post.js';

class News extends Component {
    constructor ( props ) {
        super(props);   //this.props = props;

        this.state = {
            posts: [{
                header: 'Post11',
                content: 'post1',
                likes: 100
            }, {
                header: 'Post21',
                content: 'post2',
                likes: 200
            }, {
                header: 'Post31',
                content: 'post3',
                likes: 300
            }]
        };
    }


    minusLike = (key) => {

        // console.log(key);
        // console.log("fgsdgfs");
        let newState = Object.assign({}, this.state);
        newState.posts[key].likes--;
        this.setState(newState);
    };

    addLike = (key) => {

        // console.log(key);
        let newState = Object.assign({}, this.state);
        newState.posts[key].likes++;
        this.setState(newState);

    };

    addPost=()=>{
    // console.log("click");
    let newState = Object.assign({}, this.state);
    newState.posts.push({
                            header: 'Post4',
                            content: 'post4',
                            likes: 500
                        });
    this.setState(newState);
}
    render(){
        this.state.posts.map((post,index)=>{});
        return (
            <div className='post-list'>
                {this.state.posts.map((post,index)=>{

                    return <Post header={post.header} likes={post.likes} likeP={()=>{this.addLike(index)}}>{post.content} <button onClick={()=>{this.minusLike(index)}}>MINUS LIKES</button> </Post>

                })}

                <button onClick={this.addPost}>ADD NEW POST</button>

            </div>
        )
    }
}

export default News;