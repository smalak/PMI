import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, LocaleProvider } from 'antd';
import { IntlProvider } from 'react-intl';
import { Debounce } from 'react-throttle';
import WindowResizeListener from 'react-window-size-listener';
import { ThemeProvider } from 'styled-components';
import authAction from '../../redux/auth/actions';
import appActions from '../../redux/app/actions';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';
import ThemeSwitcher from '../../containers/ThemeSwitcher';
import AppRouter from './AppRouter';
import { siteConfig } from '../../config.js';
import { AppLocale } from '../../index';
import themes from '../../config/themes';
import AppHolder from './commonStyle';
import './global.css';

const { Content, Footer } = Layout;
const { logout } = authAction;
const { toggleAll } = appActions;
export class App extends Component {
  render() {
    const { url } = this.props.match;
    const { locale, selectedTheme } = this.props;
    const currentAppLocale = AppLocale[locale];
    return (
      <LocaleProvider locale={currentAppLocale.antd}>
        <IntlProvider
          locale={currentAppLocale.locale}
          messages={currentAppLocale.messages}
        >
          <ThemeProvider theme={themes[selectedTheme]}>
            <AppHolder>
              <Layout style={{ height: '100vh' }}>
                <Debounce time="500" handler="onResize">
                  <WindowResizeListener
                    onResize={windowSize =>
                      this.props.toggleAll(
                        windowSize.windowWidth,
                        windowSize.windowHeight
                      )}
                  />
                </Debounce>
                <Topbar url={url} />
                <Layout style={{ flexDirection: 'row', overflowX: 'hidden' }}>
                  <Layout
                    className="isoContentMainLayout"
                    style={{
                      height: '100vh'
                    }}
                  >
                    <Content
                      className="isomorphicContent"
                      style={{
                        padding: '50px 0 0',
                        flexShrink: '0',
                        background: '#f1f3f6'
                      }}
                    >
                      <AppRouter url={url} />
                    </Content>
                  </Layout>
                </Layout>
                <ThemeSwitcher />
              </Layout>
            </AppHolder>
          </ThemeProvider>
        </IntlProvider>
      </LocaleProvider>
    );
  }
}

export default connect(
  state => ({
    auth: state.Auth,
    locale: state.LanguageSwitcher.toJS().language.locale,
    selectedTheme: state.ThemeSwitcher.toJS().changeThemes.themeName
  }),
  { logout, toggleAll }
)(App);
