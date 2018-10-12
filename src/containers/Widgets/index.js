import React, {Component} from 'react';
import clone from 'clone';
import {Icon, Col, Row} from 'antd';
import basicStyle from '../../config/basicStyle';
import IsoWidgetsWrapper from './widgets-wrapper';
import CardWidget from './card/card-widgets';
import SeparatedCardWidget from './card/separated-cart-widget';
import FrappeChart from 'frappe-charts/dist/frappe-charts.min.esm';
import LineBarAreaComposedChart from '../Charts/recharts/charts/lineBarAreaComposedChart'
import Box from '../../components/utility/box';
import ContentHolder from '../../components/utility/contentHolder';
import {dataList, tableinfos, TableViews} from '../Tables/antTables';
import * as rechartConfigs from '../Charts/recharts/config';
import * as frappeConfigs from "../Charts/frappeChart/config";
import CardWidgetWrapper from './card/style';
import 'frappe-charts/dist/frappe-charts.min.css';
import { rtl } from '../../config/withDirection';
import Dropdown, {
    DropdownMenu,
    MenuItem
  } from '../../components/uielements/dropdown';
  import Buttons from '../../components/uielements/button';
import { ProgressWidgetWrapper } from './progress/style';


const tableDataList = clone(dataList);
const Button = Buttons;
tableDataList.size = 10;
let url = 'http://localhost:8090/platform/api/pmi-daily-statistics/full-statistics';


export default class IsoWidgets extends Component {

    state = {
        statistics: {totalDistance: 0, totalAsset: 4, totalTime: 0, averageScore: 0}
    }

    componentDidMount() {

        this.chart = new FrappeChart(frappeConfigs.percentageChart);
        new LineBarAreaComposedChart();
        
        
        this.updateStyling();
        window.addEventListener('resize', (event) => this.updateStyling());

        fetch(url)
        .then((resp) => resp.json()) // Transform the data into json
        .then(data => {
            this.setState({
                statistics: data
            })
        })
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
        let graphLegend = document.getElementsByClassName("legend-item-0")[0];
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

        console.log(this.state);
        if(this.chart){
        this.chart.data.datesets = [
            {
              title: 'Some Data',
              color: '#0058a4',
              values: [this.state.statistics.totalAsset]
            }
          ];
        }
        const menuClicked = (
        <DropdownMenu onClick={this.handleMenuClickToLink}>
            <MenuItem key="1">Bugün</MenuItem>
            <MenuItem key="2">Geçen Hafta</MenuItem>
            <MenuItem key="3">Geçen Ay</MenuItem>
        </DropdownMenu>
        );

        return (
            <div style={wisgetPageStyle}>
                <Row style={rowStyle} gutter={0} justify="start">
                    <Col md={9} sm={24} xs={24} style={colStyle}>
                        <IsoWidgetsWrapper gutterBottom={10}>
                            <ProgressWidgetWrapper>
                                <Box title="Araçlar" style={customBox}>
                                    <ContentHolder>
                                        <div id={frappeConfigs.percentageChart.parentId} />
                                    </ContentHolder>
                                </Box>
                            </ProgressWidgetWrapper>
                        </IsoWidgetsWrapper>
                    </Col>
                    <Col md={5} sm={8} xs={24} style={colStyle}>
                        <IsoWidgetsWrapper gutterBottom={10}>
                            <CardWidget
                                icon="ion-android-chat"
                                iconcolor="#42A5F5"
                                number={this.state.statistics.totalDistance + " KM"}
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
                                number={this.state.statistics.totalTime}
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
                                number={this.state.statistics.averageScore}
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
                                    Bugün<Icon type="down" />
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
                                            header={'4800 KM'}
                                            text={'TOPLAM MESAFE'}
                                        />
                                        <div className="divider"></div>
                                        <SeparatedCardWidget
                                            header={'1g 20sa 10dk'}
                                            text={'TOPLAM SÜRE'}
                                        />
                                        <div className="divider"></div>
                                        <SeparatedCardWidget
                                            header={'84'}
                                            text={'ORTALAMA PUAN'}
                                        />
                                    </CardWidgetWrapper>
                                </IsoWidgetsWrapper>
                            </Col>
                        </Row>
                        <Row style={rowStyle} gutter={0} justify="start">
                            <Col md={24} xs={24} style={colStyle}>
                                <IsoWidgetsWrapper>
                                    <Box title='Başlık' style={customBox}>
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
                                <h3>Sürücü Skorları</h3>
                                <br></br>
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
