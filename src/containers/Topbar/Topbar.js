import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Layout} from 'antd';
import appActions from '../../redux/app/actions';
import TopbarWrapper from './topbar.style';
import Logo from '../../components/utility/logo';

const {Header} = Layout;
const {toggleCollapsed} = appActions;

class Topbar extends Component {
    render() {
        const {toggleCollapsed, url, customizedTheme, locale} = this.props;
        const collapsed = this.props.collapsed && !this.props.openDrawer;
        const styling = {
            background: 'linear-gradient(to right, #0058a4, #0099d9)',
            position: 'fixed',
            width: '100%',
            height: 50
        };
        return (
            <TopbarWrapper>
                <Header
                    style={styling}
                    className={
                        collapsed ? 'isomorphicTopbar collapsed' : 'isomorphicTopbar'
                    }
                >
                <Logo collapsed={false}/>
                    
                    {
                        /*
                          <div className="isoLeft">
                      <button
                        className={
                          collapsed ? 'triggerBtn menuCollapsed' : 'triggerBtn menuOpen'
                        }
                        style={{ color: customizedTheme.textColor }}
                        onClick={toggleCollapsed}
                      />
                    </div>
                         */
                    }

                    {
                        /*
                            <ul className="isoRight">
                        <li className="isoSearch">
                            <TopbarSearch locale={locale}/>
                        </li>

                        <li
                            onClick={() => this.setState({selectedItem: 'mail'})}
                            className="isoMail"
                        >
                            <TopbarMail url={url} locale={locale}/>
                        </li>

                        <li
                            onClick={() => this.setState({selectedItem: 'notification'})}
                            className="isoNotify"
                        >
                            <TopbarNotification locale={locale}/>
                        </li>

                        <li
                            onClick={() => this.setState({selectedItem: 'message'})}
                            className="isoMsg"
                        >
                            <TopbarMessage locale={locale}/>
                        </li>
                        <li
                            onClick={() => this.setState({selectedItem: 'addToCart'})}
                            className="isoCart"
                        >
                            <TopbarAddtoCart url={url} locale={locale}/>
                        </li>

                        <li
                            onClick={() => this.setState({selectedItem: 'user'})}
                            className="isoUser"
                        >
                            <TopbarUser locale={locale}/>
                        </li>
                    </ul>
                         */
                    }

                </Header>
            </TopbarWrapper>
        );
    }
}

export default connect(
    state => ({
        ...state.App.toJS(),
        locale: state.LanguageSwitcher.toJS().language.locale,
        customizedTheme: state.ThemeSwitcher.toJS().topbarTheme
    }),
    {toggleCollapsed}
)(Topbar);
