import React from  'react';
import ListComponent from './ListComponent';


export default class UserList extends React.Component{

    state = { lists: null, loading: true}

    async componentDidMount(){
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        config.headers['Authorization']= 'Token 92d502eee2ac0bbd318f7f37d313223252d23b73'


        var url = "http://127.0.0.1:8000/list/";
        const response = await fetch(url, config);
        const data = await response.json();
        console.log (data);
        this.setState({lists: data, loading: false});
    }


    render()
    {
        return(
            <div>
                <ListComponent listName={'Minha lista'} />
                <ListComponent listName={'Minha lista 2'} />
            </div>
        )
    }
}