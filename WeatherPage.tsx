import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import WeatherCard from './components/WeatherCard';
import { useNavigation, NavigationProp } from '@react-navigation/native';

type RootStackParamList = {
  Search: undefined;
  Weather: undefined;
};

const WeatherPage: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Olá User,</Text>
          <Text style={styles.greeting}>Descubra o clima</Text>
        </View>
        <TouchableOpacity style={styles.globeIcon}>
          <FontAwesomeIcon icon={faGlobe} size={20} color="#000" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.searchButton} onPress={() => navigation.navigate('Search')}>
        <Text style={styles.searchButtonText}>Pesquise por uma cidade</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Ao redor do mundo</Text>
      <View style={styles.weatherCards}>
        <WeatherCard country="Brasil" city="São Paulo" weather="Ensolarado" temperature={25} />
        <WeatherCard country="Estados Unidos" city="Nova York" weather="Chuvoso" temperature={15} />
        <WeatherCard country="Japão" city="Tóquio" weather="Nublado" temperature={10} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff', // Cor de fundo branca
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20, // Espaço entre o cabeçalho e o botão de pesquisa
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6C4AB6', // Cor roxa para o texto do cabeçalho
  },
  globeIcon: {
    padding: 10,
  },
  searchButton: {
    backgroundColor: '#8A55D9', // Cor roxa para o botão de pesquisa
    padding: 10,
    borderRadius: 5,
    marginVertical: 20, // Espaço entre o botão de pesquisa e o título
  },
  searchButtonText: {
    color: '#fff', // Cor branca para o texto do botão
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#6C4AB6', // Cor roxa para o título
  },
  weatherCards: {
    flexDirection: 'column', // Cards na vertical
    justifyContent: 'space-between',
    flex: 1, // Ocupa todo o espaço restante
  },
});

export default WeatherPage;