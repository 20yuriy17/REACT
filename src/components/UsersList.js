import React, {Component} from 'react';
import User from './User.js';

class UsersList extends Component {
    constructor ( props ) {
        super(props);   //this.props = props;

        this.state = {
            nicName: "",
            age: "",
            posts: [{
                name: 'ENOT_1',
                age: 20,
                id: 511
            }, {
                name: 'ENOT_2',
                age: 22,
                id: 512
            }, {
                name: 'ENOT_3',
                age: 24,
                id: 513
            }]
        };
    }


    delUser = (index)=>{
    let newState = Object.assign({}, this.state);
        newState.posts.splice(index,1);
        this.setState(newState);
    };

    addUser=()=>{
        // console.log("click");
        debugger;
        if(this.state.nicName.length > 0 || this.state.age > 0 )
        {
        let newState = Object.assign({}, this.state);
        newState.posts.push({
            name: this.state.nicName,
            age: this.state.age,
            id: Math.random()*10
        });
        this.setState(newState);
        }
        else {
            console.log("errrorrr");}
    };


    changeAge = (e) => {
        let value = parseInt(e.target.value, 10);
        this.setState({
            age: !isNaN(value) ? value : ''
        });
    };
    changeName = (e) => {
            let value = e.target.value;
            this.setState({
                nicName:  value
            });
        };



    render(){
        return (
            <div className='post-list'>

                <div>


                    <p>
                        NAME <input onChange={this.changeName}
                           type="text"
                           value={this.state.nicName} />
                    </p>


                    <p>
                        AGE <input onChange={this.changeAge}
                           type="text"
                           value={this.state.age} />
                    </p>

                    <p>
                        Контент:
                        <textarea  cols="30" rows="10"></textarea>
                    </p>
                    <button onClick={this.addUser}>Add New ENOT</button>
                </div>

                {this.state.posts.map((post,index)=>{
                    return <User name={post.name} age={post.age} id={post.id} delUser={()=>{{this.delUser(index)}}} />
                })}

            </div>
        )
    }
}


export default UsersList;