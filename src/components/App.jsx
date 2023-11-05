import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Search } from './Search/Search';
import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],

    filter: '',
  };

  handleDeleteUser = id => {
    if (window.confirm('Are you sure?')) {
      this.setState({
        contacts: [...this.state.contacts.filter(user => user.id !== id)],
      });
    }
  };

  createUser = data => {
    this.setState({
      contacts: [
        ...this.state.contacts,
        { name: data.name, id: nanoid(), number: data.number },
      ],
    });
  };

  handlerSearch = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    return (
      <section className="section">
        <div className="container">
          <h1 className={css.title}>Phone book</h1>
          <ContactForm
            createUser={this.createUser}
            userNumber={this.state.number}
            userName={this.state.name}
            contacts={this.state.contacts}
          />
          <h2 className={css.contactsTitle}>Contacts</h2>
          <p className={css.search}>Find contacts by name</p>
          <Search onChange={this.handlerSearch} value={this.state.filter} />
          <ContactList
            handleDeleteUser={this.handleDeleteUser}
            contacts={this.state.contacts}
            filter={this.state.filter}
          />
        </div>
      </section>
    );
  }
}
