# cronometro

Cronometro feito com react-native aprendido no curso React Native - Básico ao avançado da UDEMY prof Matheus Fraga.
<p>Utilizamos  os imports do react-native { View, Text, StyleSheet, Image, TouchableOpacity }.</p>
<p>A lógica de programação do tempo do relogio foi com o método setInterval() </p>

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
    

OU seja se o time for dirente de vazio, utiliza o clearInterval para limpar o tempo do (this.timer), senão utiliza o setInterval para começar a contar o relógio adicionando 0.1 no numero
a cada milisegundos que é representado pelo  -> , 100); da função setInterval.
<br>
<br>Caso queira alterar para a cada segundo o método teria que ser , 1000); da função setInterval.

<p>Essa imagem é que está no repositorio e a de baixo é uma modificação na imagem que fiz. </p>

https://user-images.githubusercontent.com/101668192/173509696-2924a5e1-a5ff-49b5-a5ab-b98252a27f16.mp4



https://user-images.githubusercontent.com/101668192/173509710-95f9bb5c-37c9-4396-ba5f-947fc851d199.mp4

