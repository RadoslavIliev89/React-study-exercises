import { Component } from 'react';
import LanguageContext from '../context/LanguageContext';

class Field extends Component {
    static contextType = LanguageContext;
    
    render() {
        const text = this.context ==='dutch'? 'Naam':'Name'
        return (
            <div className="ui filed">
                <label htmlFor="">{text}</label>
                <input />
            </div>
        );
    }

}

export default Field;