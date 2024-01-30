import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DummyPage from './pages/DummyPage';
import Usage from './pages/Usage';
import JustInfo from './pages/JustInfo';

export default class MyApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSelect: 'home',
    };
  }

  handleMenuSelect = (value) => {
    console.log(value);
    this.setState({
      currentSelect: value,
    });
  };

  getPage() {
    const { currentSelect } = this.state;

    switch (currentSelect) {
      case 'home':
        return <HomePage />;
      case 'usage':
        return <Usage />;
      case 'logout':
        return <DummyPage name="Logout" />;
      default:
        return null; // Return a default value or handle the case where currentSelect doesn't match any case
    }
  }

  render() {
    console.log("Render My app");
    return (
      <div className='app'>
        <Header onMenuSelect={this.handleMenuSelect} />
        <JustInfo />
        <div className='app-body'>{this.getPage()}</div>
        <div className='footer'>
          <Footer />
        </div>
      </div>
    );
  }
}
