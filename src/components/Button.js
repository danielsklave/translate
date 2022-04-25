import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {

    renderText = (language) => {
        return language === 'english' ? 'Submit' : 'Voorleggen';
    }

    render() {
        return (
            <ColorContext.Consumer>
                {(color) => <button className={`ui button ${color}`}>
                    <LanguageContext.Consumer>
                        {({ language }) => this.renderText(language)}
                    </LanguageContext.Consumer>
                </button>
                }
            </ColorContext.Consumer>
        );
    }
}

export default Button;