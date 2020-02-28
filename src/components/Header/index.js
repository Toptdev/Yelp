import React, { Component } from 'react';
import { InputAutoSuggest } from 'react-native-autocomplete-search';

class Header extends Component {
  render() {
    const { data } = this.props;
    return (
      <InputAutoSuggest
        inputStyle={{
          backgroundColor: 'white',
          borderColor: 'transparent',
          fontSize: 20,
          paddingVertical: 5,
          paddingHorizontal: 15,
          borderRadius: 20,
        }}
        flatListStyle={{
          backgroundColor: 'white',
        }}
        staticData={[
          { id: '1', name: 'Paris' },
          { id: '2', name: 'London' },
          { id: '3', name: 'Beijing' },
          { id: '4', name: 'Berlin' },
          { id: '5', name: 'New York' },
          { id: '6', name: 'Moscow' },
        ]}
      />
    );
  }
}

export default Header;
