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
import Select, { SelectOption } from '../../components/uielements/select';
import {dataList, tableinfos, TableViews} from '../Tables/antTables';
import * as frappeConfigs from "../Charts/frappeChart/config";
import CardWidgetWrapper from './card/style';
import 'frappe-charts/dist/frappe-charts.min.css';
import { DateCell, ImageCell, LinkCell, TextCell, IconCell } from '../Tables/antTables/helperCells';
import { rtl } from '../../config/withDirection';
import Dropdown, {
    DropdownMenu,
    MenuItem
  } from '../../components/uielements/dropdown';
  import Buttons from '../../components/uielements/button';
import { ProgressWidgetWrapper } from './progress/style';

const Option = SelectOption;
let fullStatistics = 'https://kopilot.turkcell.com.tr/platform/api/pmi-daily-statistics/full-statistics';
let periodicStatistics = 'https://kopilot.turkcell.com.tr/platform/api/pmi-daily-statistics/detailed';
let pmiAssets = 'https://kopilot.turkcell.com.tr/platform/api/pmi-assets';

const width = 400;
const height = 306;
const  colors = ['#feca00', '#0058a4', 'red', '#797979'];
const renderCell = (object, type, key, opt) => {
    const value = object[key];
    switch (type) {
      case 'ImageCell':
        return ImageCell(value);
      case 'DateCell':
        return DateCell(value);
      case 'LinkCell':
        return LinkCell(value);
      case 'IconCell':
        return IconCell(value, opt);
      default:
        return TextCell(value);
    }
  };
const columns = [
    {
      title: '#↓',
      key: 'order',
      width: 30,
      render: object => renderCell(object, 'TextCell', 'order')
    },
    {
      title: 'Sürücü',
      key: 'surucu',
      width: 80,
      render: object => renderCell(object, 'TextCell', 'surucu')
    },
    {
      title: 'Araç',
      key: 'arac',
      width: 80,
      render: object => renderCell(object, 'TextCell', 'arac')
    },
    {
      title: 'Skor',
      key: 'skor',
      width: 40,
      render: object => renderCell(object, 'TextCell', 'skor')
    },
    {
      title: 'Sert Fren',
      key: 'sertFren',
      width: 40,
      render: object => renderCell(object, 'IconCell', 'sertFren', 'magenta')
    },
    {
      title: 'Ani Hızlanma',
      key: 'aniHizlanma',
      width: 40,
      render: object => renderCell(object, 'IconCell', 'aniHizlanma', 'purple')
    },
    {
      title: 'Sert Dönüş',
      key: 'sertDonus',
      width: 40,
      render: object => renderCell(object, 'IconCell', 'sertDonus', 'red')
    },
    {
      title: 'Hız Aşımı',
      key: 'hizAsimi',
      width: 40,
      render: object => renderCell(object, 'IconCell', 'hizAsimi', 'orange')
    }
  ];

    const {rowStyle, colStyle} = basicStyle;

    const customBox = { 
        marginLeft: '0px',
        padding: '10px 0px 0px 10px'
    };

    const selectionStyle = {
        marginTop: '-36px'
    };

    const tableStyle = {
        maxHeight: '510px',
        overflow: 'scroll',
        height: '510px',
        marginLeft: '0px'
    };

    const widgetPageStyle = {
        display: 'flex',
        flexFlow: 'row wrap',
        alignItems: 'flex-start',
        padding: '15px',
        overflow: 'hidden'
    };

export default class IsoWidgets extends Component {

    state = {
        statistics: {totalDistance: 0, totalAsset: 4, totalTime: 0, averageScore: 0},
        periodicAnalytics: {totalAsset: 0, totalDistance: 0, totalTime: '0 dk', averageScore: 0},
        dailyStatistics: [],
        datas: [
            {periyot: 'Bugün', süre: 4000, yol: 2400}
          ],
        selection: '2',
        tableDataList: []
    }

    handleChange = value => {
        this.setState({
            selection: value
        })
        this.changePeriod(value);
        this.getPmiAssets();
    };

    componentDidMount() {
        new LineBarAreaComposedChart();

        fetch(fullStatistics)
        .then((resp) => resp.json())
        .then(data => {
            this.setState({
                statistics: data
            })
        });
        this.getPmiAssets();
        this.changePeriod(this.state.selection);
    }

    getPmiAssets() {
        let dataList = [];
        fetch(pmiAssets)
        .then((resp) => resp.json())
        .then(data => {
            let counter = 1;
            if (this.state.selection === '1'){
                data.forEach(d => {       
                        dataList.push({order: counter, surucu: d.name, arac: d.name, skor: d.score, 
                            sertFren: d.dailyHarshDeceleration, aniHizlanma: d.dailyHarshAcceleration,
                            sertDonus: d.dailyHarshTurn, hizAsimi: d.dailyOverSpeedDistance + 'KM'});
                    
                    counter++;
                })
            } else if (this.state.selection === '2'){
                data.forEach(d => {       
                    dataList.push({order: counter, surucu: d.name, arac: d.name, skor: d.score, 
                        sertFren: d.weeklyHarshDeceleration, aniHizlanma: d.weeklyHarshAcceleration,
                        sertDonus: d.weeklyHarshTurn, hizAsimi: d.weeklyOverSpeedDistance + 'KM'});
                
                counter++;
                })
            } else {
                data.forEach(d => {       
                    dataList.push({order: counter, surucu: d.name, arac: d.name, skor: d.score, 
                        sertFren: d.monthlyHarshDeceleration, aniHizlanma: d.monthlyHarshAcceleration,
                        sertDonus: d.monthlyHarshTurn, hizAsimi: d.monthlyOverSpeedDistance + 'KM'});
                
                counter++;
                })
            }
        }).then(this.setState({
            tableDataList: dataList
        }))
    }

    changePeriod(value) {
        fetch(periodicStatistics + "?period=" + value)
        .then((resp) => resp.json())
        .then(data => {
            this.setState({
                periodicAnalytics: {
                    totalDistance: data.totalDistance,
                    totalTime: data.totalTime,
                    averageScore: data.averageScore
                },
                dailyStatistics: data.dailyStatistics,
            })
            console.log(this.state.periodicAnalytics);
        })
    }

    updateStyling() {
        let elements = document.getElementsByClassName("graph-focus-margin");
        for(var i=0;i<elements.length;i++){
            elements[i].style.marginTop="0px";
            elements[i].style.marginBottom="0px";
        }
        let graphics = document.getElementsByClassName("graphics");
        if(graphics){
            if(graphics[0]){
                graphics[0].style.padding = "0px";
            }
        }
        let graphLegend = document.getElementsByClassName("legend-item-0")[0];
        if(graphLegend){
            graphLegend.parentElement.removeChild(graphLegend);
        }
    }

    render() {
        this.state.datas = [];

        this.state.dailyStatistics.forEach(st => {
            this.state.datas.push({periyot: st.periyot, süre: Math.round(st.totalTime / 60), yol: st.totalDistance})
        })

        if(frappeConfigs){
            frappeConfigs.basicData.datasets = (
                [
                  {
                    title: 'Some Data',
                    color: '#0058a4',
                    values: [this.state.statistics.totalAsset]
                  }
                ]
            )
        }
        
        this.chart = new FrappeChart(frappeConfigs.percentageChart);
        window.addEventListener('resize', (event) => this.updateStyling());
        this.updateStyling();
        
        return (
            <div style={widgetPageStyle}>
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
                                icon="ion-android-bus"
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
                                icon="ion-clock"
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
                <Row style={selectionStyle} gutter={0} justify="start">
                    <Col md={24} style={colStyle}>
                        <IsoWidgetsWrapper>
                            <ContentHolder>
                                <Select
                                defaultValue={this.state.selection}
                                onChange={this.handleChange}
                                style={{ width: '120px' }}
                                >
                                    <Option value="1">Bugün</Option>
                                    <Option value="2">Geçen Hafta</Option>
                                    <Option value="3">Geçen Ay</Option>
                                </Select>
                            </ContentHolder>
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
                                            header={this.state.periodicAnalytics.totalDistance + ' KM'}
                                            text={'TOPLAM MESAFE'}
                                        />
                                        <div className="divider"></div>
                                        <SeparatedCardWidget
                                            header={this.state.periodicAnalytics.totalTime}
                                            text={'TOPLAM SÜRE'}
                                        />
                                        <div className="divider"></div>
                                        <SeparatedCardWidget
                                            header={this.state.periodicAnalytics.averageScore}
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
                                        <LineBarAreaComposedChart datas={this.state.datas} width={width} height={height} colors={colors}/>
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
                                    dataSource={this.state.tableDataList}
                                    columns={columns}
                                />
                            </Box>
                        </IsoWidgetsWrapper>
                    </Col>
                </Row>
            </div>
        );
    }
    
}
