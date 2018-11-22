import React, { Component } from 'react'


const data = [
    {id: 1, nome: 'bolo'},
    {id: 2, nome: 'capim'},
    {id: 3, nome: 'doce'},
    {id: 4, nome: 'seila'},
    {id: 5, nome: 'eae'}
]

export default class CrudContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: data
        }
    }


    componentWillMount() {
       // this.fetchData()
    }

    fetchData = async () => {
        let res = await fetch('/data')
        res = await res.json()
        this.setState({
            data: res
        })
    }

    onDelete = (id) => {
        console.log('deleta nota com id', id)
        fetch('/data', {
            method: 'DELETE',
            body: JSON.stringify({
                id: id
            })
        })

        let fa = this.state.data.filter((el) => el.id !== id)

        console.log(fa)

        this.setState({
            data: fa
        })

    }


    render() {
        return (
            <div>
                {this.state.data.map((el, i) => <div key={'zxca'+i} style={{width: 100, minHeight: 80}}> {el.nome} <span onClick={() => this.onDelete(el.id)}>X</span> </div>)}
            </div>
        )
    }

}