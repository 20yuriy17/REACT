import React, {Component} from "react";
import styled from "styled-components";
import store from "./store";
import {TextInput, Button} from "../ui";
import {connect} from 'react-redux';


const Container = styled.div`
    width: 200px;
    background-color: #ddfff8;
    font-size: 24px;
    font-weight: bold;
    padding:20px;
    margin: 20px auto;
`;


const Box = ({ExersiceName, onDelete, id}) => (
    <div>
        <input type="checkbox" id={id} name="subscribe" value="newsletter"/>
        <label for={id}>{ExersiceName}</label>
        <Button onClick={onDelete}>Удалить</Button>
    </div>
);





class CheckBox extends Component {


    state = {
        exersiceName: "",


    }

    deleteClick(id){

        this.props.DELETE_EX(id);
    }




    render() {
        return (
            <Container>
                <div>
                    {this.props.exercises && this.props.exercises.map((exercises) => {

                        return <Box exersiceName={exercises.exersiceName}
                                    checkbox={exercises.checkbox }
                                     onDelete={this.deleteClick.bind(this, exercises.id)}
                        />
                    })}
                </div>

                <br/>


                {/*<TextInput value={this.state.points}*/}
                           {/*onChange={this.changeInput.bind(this, '')}/>*/}



            </Container>

        )
    }


}





const mapStateToProps = (state) => {
    return {
        exercises: [...state.exercises]
    }
};



const dispatchToProps = (dispatch) => {

    return {
        addNew_Ex(exercises) {
            dispatch({
                type: "ADD_NEW_EX",
                ...exercises
            })
        },
        DELETE_EX(id) {
            dispatch({
                type: "DELETE_EX",
                id
            })
        }
    }
};




export default connect(mapStateToProps, dispatchToProps)(CheckBox);