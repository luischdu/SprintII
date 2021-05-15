import React, { Component } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import color from "../assets/predeterminatedStyles"
import ListMealsMainPage from './ListMealsMainPage'

const GlobalStyle = createGlobalStyle`
        *{
            margin: 0;
            border: 0;
            box-sizing: border-box;
        }

        body{
            background-color: ${color.greyColor}
        }
    `

export default class App extends Component {

    

    render() {
        return (
            <div>
                <GlobalStyle/>
                <ListMealsMainPage/>
            </div>
            
        )
    }
}
