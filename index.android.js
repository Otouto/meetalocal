'use strict';

var React = require('react-native');
var Mapbox = require('react-native-mapbox-gl');
var {
  AppRegistry,
  StyleSheet,
  View
} = React;

var Meetalocal = React.createClass({
  getInitialState() {
    return {
      center: {
        latitude: 50.439253,
        longitude: 30.521967
      }
    }
  },

  onRegionChange(location) {
    console.log(location);
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Mapbox
          accessToken={'pk.eyJ1Ijoib3RvdXRvIiwiYSI6ImNpaHV0bnpnZDAxczh0bG0xZzd2Yms5b3gifQ.2R9nHiR72xlLEvDvfv5cQg'}
          centerCoordinate={this.state.center}
          debugActive={false}
          direction={0}
          onRegionChange={this.onRegionChange}
          rotationEnabled={true}
          scrollEnabled={true}
          style={styles.map}
          showsUserLocation={true}
          styleUrl={'mapbox://styles/otouto/cihuvlgx200hpbrlz9rmyarqa'}
          UserLocationTrackingMode={'FOLLOW'}
          zoomEnabled={true}
          zoomLevel={11}
        />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    width: require('Dimensions').get('window').width,
    flex: 1
  }
});

AppRegistry.registerComponent('meetalocal', () => Meetalocal);
