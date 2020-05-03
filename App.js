import React, { Component } from 'react';
import Main from './components/Main';
import { Provider } from 'react-redux';
import { configureStore } from './redux/configureStore';

const store = configureStore();
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Main />
            </Provider>
        );
    }
}
export default App;
