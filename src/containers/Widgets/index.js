import React, {Component} from 'react';
import clone from 'clone';
import {Icon, Col, Row} from 'antd';
import basicStyle from '../../config/basicStyle';
import IsoWidgetsWrapper from './widgets-wrapper';
import IsoWidgetBox from './widget-box';
import CardWidget from './card/card-widgets';
import SeparatedCardWidget from './card/separated-cart-widget';
import FrappeChart from 'frappe-charts/dist/frappe-charts.min.esm';
import LineBarAreaComposedChart from '../Charts/recharts/charts/lineBarAreaComposedChart'
import Box from '../../components/utility/box';
import ContentHolder from '../../components/utility/contentHolder';
import {dataList, tableinfos, TableViews} from '../Tables/antTables';
import * as rechartConfigs from '../Charts/recharts/config';
import IntlMessages from '../../components/utility/intlMessages';
import * as frappeConfigs from "../Charts/frappeChart/config";
import CardWidgetWrapper from './card/style';
import 'frappe-charts/dist/frappe-charts.min.css';
import { rtl } from '../../config/withDirection';
import Dropdown, {
    DropdownMenu,
    MenuItem,
    SubMenu
  } from '../../components/uielements/dropdown';
  import Buttons from '../../components/uielements/button';


const tableDataList = clone(dataList);
const Button = Buttons;
tableDataList.size = 10;

export default class IsoWidgets extends Component {
    
    componentDidMount() {
        new FrappeChart(frappeConfigs.percentageChart);
        new LineBarAreaComposedChart();
        this.updateStyling();
        window.addEventListener('resize', (event) => this.updateStyling());
    }
    
      handleMenuClick = e => {
        if (e.key === '3') {
          this.setState({ visible: false });
        }
      };
      handleVisibleChange = flag => {
        this.setState({ visible: flag });
      };

    updateStyling() {
        let elements = document.getElementsByClassName("graph-focus-margin");
        for(var i=0;i<elements.length;i++){
            elements[i].style.marginTop="0px";
            elements[i].style.marginBottom="0px";
        }
        let graphic = document.getElementsByClassName("graphics")[0];
        graphic.style.padding = "0px";
        let graphLegend = document.getElementsByClassName("legend-item-2")[0];
        if(graphLegend){
            graphLegend.parentElement.removeChild(graphLegend);
        }
    }

    render() {
        const {rowStyle, colStyle} = basicStyle;
        const customBox = { 
            marginLeft: '0px',
            padding: '10px 0px 0px 10px'
        };
        const alignLeft = {
            marginLeft: '0px'
        }

        const tableStyle = {
            maxHeight: '510px',
            overflow: 'scroll',
            height: '510px',
            marginLeft: '0px'
        }

        const wisgetPageStyle = {
            display: 'flex',
            flexFlow: 'row wrap',
            alignItems: 'flex-start',
            padding: '15px',
            overflow: 'hidden'
        };

        const menuHover = (
            <DropdownMenu>
              <MenuItem>
                <a target="_blank" rel="noopener noreferrer" href="http://redq.io/">
                  1st menu item
                </a>
              </MenuItem>
              <MenuItem>
                <a target="_blank" rel="noopener noreferrer" href="http://redq.io/">
                  2nd menu item
                </a>
              </MenuItem>
              <MenuItem>
                <a target="_blank" rel="noopener noreferrer" href="http://redq.io/">
                  3d menu item
                </a>
              </MenuItem>
            </DropdownMenu>
          );
          const menuHoverDisable = (
            <DropdownMenu>
              <MenuItem key="0">
                <a target="_blank" rel="noopener noreferrer" href="http://redq.io/">
                  1st menu item
                </a>
              </MenuItem>
              <MenuItem key="1">
                <a target="_blank" rel="noopener noreferrer" href="http://redq.io/">
                  2nd menu item
                </a>
              </MenuItem>
              <MenuItem key="3" disabled>
                3d menu item（disabled）
              </MenuItem>
            </DropdownMenu>
          );
          const menuClicked = (
            <DropdownMenu onClick={this.handleMenuClickToLink}>
              <MenuItem key="1">1st menu item</MenuItem>
              <MenuItem key="2">2nd menu item</MenuItem>
              <MenuItem key="3">3d menu item</MenuItem>
            </DropdownMenu>
          );
      
          const menuSubmenu = (
            <DropdownMenu>
              <MenuItem>1st menu item</MenuItem>
              <MenuItem>2nd menu item</MenuItem>
              <SubMenu title="sub menu">
                <MenuItem>3d menu item</MenuItem>
                <MenuItem>4th menu item</MenuItem>
              </SubMenu>
            </DropdownMenu>
          );

        return (
            <div style={wisgetPageStyle}>
                <Row style={rowStyle} gutter={0} justify="start">
                    <Col md={9} sm={24} xs={24} style={colStyle}>
                        <IsoWidgetsWrapper gutterBottom={10}>
                            <Box title={frappeConfigs.percentageChart.header} style={customBox}>
                                <ContentHolder>
                                    <div id={frappeConfigs.percentageChart.parentId} />
                                </ContentHolder>
                            </Box>
                        </IsoWidgetsWrapper>
                    </Col>
                    <Col md={5} sm={8} xs={24} style={colStyle}>
                        <IsoWidgetsWrapper gutterBottom={10}>
                            <CardWidget
                                icon="ion-android-chat"
                                iconcolor="#42A5F5"
                                number="130000 KM"
                                text="TOPLAM MESAFE"
                            />
                        </IsoWidgetsWrapper>
                    </Col>
                    <Col md={5} sm={8} xs={24} style={colStyle}>
                        <IsoWidgetsWrapper gutterBottom={10}>
                            {/* Card Widget */}
                            <CardWidget
                                icon="ion-music-note"
                                iconcolor="#F75D81"
                                number="4g 7sa 16 dk"
                                text="TOPLAM SÜRE"
                            />
                        </IsoWidgetsWrapper>
                    </Col>
                    <Col md={5} sm={8} xs={24} style={colStyle}>
                        <IsoWidgetsWrapper>
                            {/* Card Widget */}
                            <CardWidget
                                icon="ion-trophy"
                                iconcolor="#FEAC01"
                                number="76"
                                text="ORTALAMA PUAN"
                            />
                        </IsoWidgetsWrapper>
                    </Col>
                </Row>
                <Row style={rowStyle} gutter={0} justify="start">
                    <Col md={24} style={colStyle}>
                        <IsoWidgetsWrapper>
                            <span style={{color: 'blue', paddingLeft: '8px' }}>Başlık</span>
                            <Dropdown overlay={menuClicked}>
                                <Button
                                    style={{
                                    margin: rtl === 'rtl' ? '0 8px 0 0' : '0 0 0 8px'
                                    }}
                                    >
                                    Button <Icon type="down" />
                                </Button>
                            </Dropdown>
                        </IsoWidgetsWrapper>
                    </Col>
                </Row>
                <Row style={rowStyle} gutter={0} justify="start">
                    <Col md={9} sm={24} xs={24} style={colStyle}>
                        <Row style={rowStyle} gutter={0} justify="start">
                            <Col md={24} xs={24} style={colStyle}>
                                <IsoWidgetsWrapper>
                                    <CardWidgetWrapper>
                                        <SeparatedCardWidget
                                            header={'ALİ'}
                                            text={'OSMAN'}
                                        />
                                        <div className="divider"></div>
                                        <SeparatedCardWidget
                                            header={'ALİ2'}
                                            text={'OSMAN2'}
                                        />
                                        <div className="divider"></div>
                                        <SeparatedCardWidget
                                            header={'ALİ3'}
                                            text={'OSMAN3'}
                                        />
                                    </CardWidgetWrapper>
                                </IsoWidgetsWrapper>
                            </Col>
                        </Row>
                        <Row style={rowStyle} gutter={0} justify="start">
                            <Col md={24} xs={24} style={colStyle}>
                                <IsoWidgetsWrapper>
                                    <Box title={rechartConfigs.LineBarAreaComposedChart.title} style={customBox}>
                                    <ContentHolder>
                                        <LineBarAreaComposedChart
                                        {...rechartConfigs.LineBarAreaComposedChart}
                                        />
                                    </ContentHolder>
                                    </Box>
                                </IsoWidgetsWrapper>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={15} sm={24} xs={24} style={colStyle}>
                        <IsoWidgetsWrapper>
                            <Box style={tableStyle}>
                                {/* TABLE */}
                                <TableViews.SimpleView
                                    tableInfo={tableinfos[0]}
                                    dataList={tableDataList}
                                />
                            </Box>
                        </IsoWidgetsWrapper>
                    </Col>
                </Row>
            </div>
        );
    }
    
}
