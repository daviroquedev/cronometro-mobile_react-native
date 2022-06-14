import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
      botao: 'INICIAR',
      lastTime: null,
    };

    //  Variavel do timer relogio.
    this.timer = null;
    this.start = this.start.bind(this);
    this.reset = this.reset.bind(this);
  }

  start() {

    if (this.timer != null) {
      // Aqui vai parar o timer
      clearInterval(this.timer);
      this.timer = null;
      this.setState({ botao: 'INICIAR' });
    } else {
      this.timer = setInterval(() => {
        this.setState({ numero: this.state.numero + 0.1 })
      }, 100);

      this.setState({ botao: 'PARAR' });
    }


  }

  reset() {
    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this.setState({
      lastTime: this.state.numero,
      numero: 0,
      botao: 'INICIAR',
    })
  }
  
  render() {
    
  return (

      <View style={styles.container}>

        <Image source={require('./src/cronometro.png')}
          style={styles.cronometro}
        />
        <Text style={styles.timer}>{this.state.numero.toFixed(1)} </Text>

        <View style={styles.btnArea}>

          <TouchableOpacity style={styles.btn} onPress={this.start}>
            <Text style={styles.btnTexto}> {this.state.botao} </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={this.reset}>
            <Text style={styles.btnTexto}> LIMPAR </Text>
          </TouchableOpacity>


        </View>
        <View style={styles.lastTime}>
          <Text style={styles.textoTempo}>
            {this.state.lastTime > 0 ? 'Ultimo tempo: ' + this.state.lastTime.toFixed(2)+' Segundos' :''}
          </Text>
        </View>

      </View>

    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4682B4',
  },
  timer: {
    marginTop: -160,
    color: '#FFF',
    fontSize: 65,
    fontWeight: 'bold',
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 70,
    height: 40,
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 40,
    margin: 10,
    borderRadius: 9,
  },
  btnTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4682B4',
  },
  lastTime:{
    marginTop:40,
  },
  textoTempo:{
    fontSize:25,
    fontStyle:'italic',
    color: '#FFF',
  },
})

export default App;