import * as React from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import { Constants } from 'expo';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.redView}/>
        <View style={styles.yellowView}/>
        <View style={styles.redView}/>
        <View style={styles.yellowView}/>
        <View style={styles.redView}/>
        <View style={styles.yellowView}/>
        <View style={styles.redView}/>
        <View style={styles.yellowView}/>
        <View style={styles.redView}/>
        <View style={styles.yellowView}/>
        <View style={styles.redView}/>
        <View style={styles.yellowView}/>
        <View style={styles.redView}/>
        <View style={styles.yellowView}/>
        <View style={styles.redView}/>
        <View style={styles.yellowView}/>
        <View style={styles.redView}/>
        <View style={styles.yellowView}/>
        <View style={styles.redView}/>
        <View style={styles.yellowView}/>
        <View style={styles.redView}/>
        <View style={styles.yellowView}/>
        <View style={styles.redView}/>
        <View style={styles.yellowView}/>
        <View style={styles.redView}/>
        <View style={styles.yellowView}/>
        <View style={styles.redView}/>
        <View style={styles.yellowView}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection:'row', // 박스 가로로 방향으로
    flexWrap: 'wrap',   // 화면 안에 넣기 word-break: break-word; 같은 것
    justifyContent: 'center',  // 수직 정렬
    alignItems: 'center'  // 수평 정렬
    
  },
  redView: {
    //flex: 1,// 전체의 1/7
    width: 50,
    height: 50,
    backgroundColor: 'red'
  },
  yellowView: {
    //flex: 6,  // 전체의 6/7
    width: 50,
    height: 50,
    backgroundColor: 'yellow'
  },
});
