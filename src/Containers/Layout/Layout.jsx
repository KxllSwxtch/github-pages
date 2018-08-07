import React, { Component } from 'react';

import Container from '../../Components/Container/Container';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import User from '../../Components/User/User';

export default class Layout extends Component {
  render() {
    return (
      <div style={{marginBottom: "-50px"}}>
        <Container>
          <Header />
          <hr />
          <User />
          <hr />
          <Footer />
        </Container>
      </div>
    );
  }
}
