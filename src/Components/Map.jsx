import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am4geodata_indiaLow from "@amcharts/amcharts4-geodata/indiaLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated"
import {Autocomplete,Button,TextInput,Pane} from 'evergreen-ui'

am4core.useTheme(am4themes_animated);

class Map extends Component {
    
    state = {pos: ''}
    componentDidMount() {
      var loc;
    let chart = am4core.create("chartdiv", am4maps.MapChart);

    // Set map definition
    chart.geodata = am4geodata_worldLow;

    // Set projection
    chart.projection = new am4maps.projections.Miller();

    // Series for World map
    var worldSeries = chart.series.push(new am4maps.MapPolygonSeries());
    worldSeries.exclude = ["AQ","PK","CN"];
    worldSeries.useGeodata = true;

    var polygonTemplate = worldSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}";
    polygonTemplate.fill = chart.colors.getIndex(0);
    polygonTemplate.nonScalingStroke = true;
    polygonTemplate.fillOpacity = 1;
    
    polygonTemplate.events.on("hit",function(ev){
      ev.target.series.chart.zoomToMapObject(ev.target);
      console.log(ev.target.dataItem.dataContext.name);
      loc = ev.target.dataItem.dataContext.name;
      
    });
    
    console.log(loc);
    // Hover state
    var hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#367B25");

    // Series for United States map
    var indiaSeries = chart.series.push(new am4maps.MapPolygonSeries());
    indiaSeries.geodata = am4geodata_indiaLow;

    var indPolygonTemplate = indiaSeries.mapPolygons.template;
    indPolygonTemplate.tooltipText = "{name}";
    indPolygonTemplate.fill = chart.colors.getIndex(1);
    indPolygonTemplate.nonScalingStroke = true;

    indPolygonTemplate.events.on("hit",function(e){
      e.target.series.chart.zoomToMapObject(e.target);
    })
    // Hover state
    var hs = indPolygonTemplate .states.create("hover");
    hs.properties.fill = am4core.color("#367B25");

    
    this.chart = chart;
  }

  showThis(loc) {
    console.log(loc);
  }
  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (

      <Pane
        elevation={1}
        justifyContent="center"
        alignItems="center"
      >
        <div id="chartdiv" style={{ width: "100%", height: "auto" }}></div>
        
        <Footer loc = {this.state.loc}/>
      </Pane>
      
    );
  }
}


class Footer extends Component {
  constructor(props){
    super(props);
    this.state = {
      pos: null,
    };
  }
    render() { 
        return ( 
            <div>
                <Autocomplete
                    title="Places"
                    onChange={changedItem => console.log(changedItem)}
                    items={["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas"
                            ,"Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands"
                            ,"Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica"
                            ,"Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea"
                            ,"Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana"
                            ,"Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India"
                            ,"Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia"
                            ,"Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania"
                            ,"Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia"
                            ,"New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal"
                            ,"Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles"
                            ,"Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan"
                            ,"Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia"
                            ,"Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay"
                            ,"Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"]}
                            children={(props) => {
                            const { getInputProps, getRef, inputValue } = props
                            return (
                            <TextInput
                                placeholder="Fruits"
                                value="{inputValue}"
                                innerRef={getRef}
                                {...getInputProps()}
                            />
                            )
                        }}
                    >
                    {({
                        key,
                        getInputProps,
                        getButtonProps,
                        getRef,
                        inputValue,
                        openMenu,
                        toggleMenu
                    }) => (
                        <Pane
                        elevation={4}
                        key={key}
                        innerRef={getRef}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        margin={32}
                        >
                        <TextInput
                            flex="1"
                            placeholder="Places.."
                            value={inputValue}
                            onFocus={openMenu}
                            {...getInputProps()}
                        />
                        
                        </Pane>
                    )}
                </Autocomplete>
            </div>
         );
    }
}
export default Map;
