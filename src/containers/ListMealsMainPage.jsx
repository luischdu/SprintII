import React, { Component } from 'react';
import axios from 'axios';
import CardOrderSection from '../components/CardOrderSection';
import AddedComboDescription from '../components/AddedComboDescription';
import CardMainPage from '../components/CardMainPage.jsx';
import NameMealsList from '../components/NameMealsList.jsx';
import OrderSectionPayButton from '../components/OrderSectionPayButton';
import { Link } from 'react-router-dom';
export default class ListMealsMainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categorie: 'guajolotas',
      loading: true,
      error: null,
      data: undefined,
    };
  }

  fetchPetsData = () => {
    this.setState({
      loading: true,
      error: null,
    });

    axios
      .get(`https://api-fake-sprint-guappjalotas.herokuapp.com/${this.state.categorie}`)
      .then((res) => {
        this.setState({
          loading: false,
          data: res.data,
        });
      })
      .catch((err) => {
        this.setState({
          loading: false,
          error: err,
        });
      });
  };

  componentDidMount() {
    this.fetchPetsData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.categorie !== this.state.categorie) {
      this.fetchPetsData();
    }
  }

  handleClickSelection = (e, section) => {
    e.preventDefault();
    this.setState({
      categorie: section,
    });
  };

  render() {
    if (this.state.loading && !this.state.data) {
      return <h1>Cargando....</h1>;
    }
    if (this.state.error) {
      return <h1>Upps....Problemas</h1>;
    }

    return (
      <div>
        <NameMealsList
          onClick={this.handleClickSelection}
          categorie={this.state.categorie}
        />

        <CardMainPage data={this.state.data} />

        {/* <AddedComboDescription categorie={this.state.categorie} /> */}
        {/* <CardOrderSection categorie={this.state.categorie} /> */}
        {/* <OrderSectionPayButton/> */}
      </div>
    );
  }
}
