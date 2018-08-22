import React, { Component } from 'react';
import { addLocaleData, injectIntl, IntlProvider, FormattedMessage } from 'react-intl';
import es from 'react-intl/locale-data/es';
import esLangFile from './lang/es';
import './ReactIntl.css';

const WelcomeMessage = ({ name, age }) => (
  <FormattedMessage id="home.welcome" defaultMessage={`Hello {name}, you are {age, number} years old today!`} values={{ name: name, age: age }} />
);

const WelcomeMessageImperitive = injectIntl(({ intl, name, age }) => (
  <div>{intl.formatMessage({ id: 'home.welcome' }, { name: name, age: age })}</div>
));

/**
 * https://phraseapp.com/blog/posts/react-i18n-best-libraries/
 */
class ReactIntl extends Component {
  constructor(props) {
    super(props);

    addLocaleData(es);
  }

  render() {
    return (
      <div>
        <h1>React Intl</h1>
        <h3>English</h3>
        <IntlProvider locale={'en'}>
          <div>
            <WelcomeMessage name="React.js" age={10000} />
          </div>
        </IntlProvider>
        <h3>Spanish</h3>
        <IntlProvider locale={esLangFile.locale} messages={esLangFile.messages}>
          <div>
            <WelcomeMessage name="React.js" age={20000} />
          </div>
        </IntlProvider>
        <h3>Imperitive example</h3>
        <IntlProvider locale={esLangFile.locale} messages={esLangFile.messages}>
          <div>
            <WelcomeMessageImperitive name="React.js" age={30000} />
          </div>
        </IntlProvider>
      </div>
    );
  }
}
export default ReactIntl;
