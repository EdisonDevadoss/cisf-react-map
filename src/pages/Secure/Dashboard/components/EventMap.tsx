import { size } from 'lodash';
import React, { Component } from 'react';
import MapGL, { Layer, Popup, Source } from 'react-map-gl';
import unitInfo from '../../../../config/unitInfo';
import CityInfo from './CityInfo';
import ControlPanel from './ControlPanel';
import LegenPanel from './LegendPanel';
import { dataLayer } from './MapStyle';
import { updatePercentiles } from './utils';

const MAPBOX_TOKEN =
  process.env.MAPBOX_TOKEN ||
  'pk.eyJ1IjoiZWRpc29uZGV2YWRvc3MiLCJhIjoiY2s0MTNweHlhMDdwZDNwcG95cmJraGl6dyJ9.aUK57pw316_tz92_mwsagA';

export default class App extends Component<any> {
  constructor(props: any) {
    super(props);
    this.state = {
      year: 2015,
      week: 1,
      month: 1,
      data: null,
      hoveredFeature: null,
      popupInfo: null,
      viewport: {
        width: '100vm',
        height: '100vh',
        latitude: 20.5937,
        longitude: 78.9626,
        zoom: 4.3,
        bearing: 0,
        pitch: 0,
      },
    };
  }

  public componentDidMount() {
    fetch('./data.geojson')
      .then(res => {
        return res.json();
      })
      .then(result => {
        const unitResult = unitInfo;
        const formatedData = {
          'ANDHRA PRADESH': {
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0,
            7: 0,
            8: 0,
            9: 0,
            10: 0,
            11: 0,
            12: 0,
          },
        };
        unitResult.forEach(obj => {
          if (!formatedData[obj.state_name]) {
            formatedData[obj.state_name] = {
              1: 0,
              2: 0,
              3: 0,
              4: 0,
              5: 0,
              6: 0,
              7: 0,
              8: 0,
              9: 0,
              10: 0,
              11: 0,
              12: 0,
            };
          }
          formatedData[obj.state_name][obj.date] = obj.event_count;
        });
        const updateFeautes = result.features.map((value: any) => {
          const updateProperties = {
            ...value.properties,
            units: formatedData[value.properties.name],
          };
          return {
            ...value,
            properties: updateProperties,
          };
        });
        const updateUnits = {
          ...result,
          features: updateFeautes,
        };
        this._loadData(updateUnits);
      });
  }

  public _loadData = (data: any) => {
    const { month }: any = this.state;
    updatePercentiles(data, (f: any) => f.properties.units[month]);
    this.setState({ data });
  };

  public _updateSettings = (name: any, value: any) => {
    if (name === 'month') {
      this.setState({ month: value });

      const { data }: any = this.state;
      if (data) {
        updatePercentiles(data, (f: any) => f.properties.units[value]);
        // trigger update
        this.setState({
          data: {
            ...data,
          },
        });
      }
    }
  };

  public _onViewportChange = (viewport: any) => this.setState({ viewport });

  public _onHover = (event: any) => {
    const {
      features,
      srcEvent: { offsetX, offsetY },
    } = event;
    const hoveredFeature = features && features.find((f: any) => f.layer.id === 'data');

    this.setState({ hoveredFeature, x: offsetX, y: offsetY });
  };

  public _renderTooltip() {
    const { hoveredFeature, x, y }: any = this.state;

    return (
      hoveredFeature && (
        <div
          className="tooltip"
          style={{
            left: x,
            top: y,
          }}
        >
          <div>State: {hoveredFeature.properties.name}</div>
          <div>#Events: {hoveredFeature.properties.value}</div>
        </div>
      )
    );
  }

  public onClick = (event: any) => {
    const feature = event.features && event.features[0];
    const { month }: any = this.state;
    if (feature && size(feature.properties) > 0) {
      this.setState({
        popupInfo: {
          name: feature.properties.name,
          lngLat: event.lngLat,
          month,
          year: 2019,
        },
      });
    } else {
      this.setState({ popupInfo: null });
    }
  };

  public _renderPopup() {
    const { popupInfo }: any = this.state;

    return (
      popupInfo && (
        <Popup
          tipSize={10}
          anchor="top"
          longitude={popupInfo.lngLat[0]}
          latitude={popupInfo.lngLat[1]}
          closeOnClick={true}
          onClose={() => this.setState({ popupInfo: null })}
        >
          <CityInfo info={popupInfo} />
        </Popup>
      )
    );
  }

  public render() {
    const { viewport, data, popupInfo }: any = this.state;

    return (
      <div
        style={{
          height: '100%',
        }}
      >
        <MapGL
          {...viewport}
          mapStyle="mapbox://styles/edisondevadoss/ck42safmw09ls1co85isttdov"
          onClick={this.onClick}
          onViewportChange={this._onViewportChange}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          onHover={this._onHover}
        >
          <Source type="geojson" data={data}>
            <Layer {...dataLayer} />
          </Source>
          {!popupInfo && this._renderTooltip()}
          {this._renderPopup()}
        </MapGL>

        <ControlPanel
          containerComponent={this.props.containerComponent}
          settings={this.state}
          onChange={this._updateSettings}
        />
        <LegenPanel containerComponent={this.props.containerComponent} />
      </div>
    );
  }
}
