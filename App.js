import Slider from '@react-native-community/slider'
import { Picker } from '@react-native-picker/picker'
import React, { useState } from 'react';
import { StyleSheet, View, Text, Switch, TouchableOpacity } from 'react-native';

export default function App() {
  
  const [theme, setTheme] = useState('Claro');
  const [fontSize, setFontSize] = useState(16);
  const [nightMode, setNightMode] = useState(false);

  const resetPreferences = () => {
    setTheme('Claro');
    setFontSize(16);
    setNightMode(false);
  };

  return (

    <View style={styles.container}>

      <Text style={styles.title}>Configurações de Preferências</Text>

      <View style={styles.pickerContainer}>
      
        <Text style={styles.label}>Tema do App:</Text>

        <Picker
          style={styles.picker}
          selectedValue={theme}
          onValueChange={(itemValue) => setTheme(itemValue)}
        >
          <Picker.Item label="Claro" value="Claro" />
          <Picker.Item label="Escuro" value="Escuro" />
          <Picker.Item label="Automático" value="Automático" />
        </Picker>

      </View>


      <View style={styles.sliderContainer}>

        <Text style={styles.label}>Tamanho da Fonte</Text>
        
        <Slider
          minimumValue={12}
          maximumValue={30}
          value={fontSize}
          onValueChange={(value) => setFontSize(Math.round(value))}
          style={styles.slider}
        />

        <Text style={styles.fontSizeText}>{fontSize}</Text>

      </View>


      <View style={styles.switchContainer}>

        <Text style={styles.label}>Modo Noturno:</Text>

        <Switch
          value={nightMode}
          onValueChange={(value) => setNightMode(value)}
        />

        <Text style={styles.switchStatus}>
          {nightMode ? 'Modo Noturno Ativado' : 'Modo Noturno Desativado'}
        </Text>

      </View>


      <TouchableOpacity style={styles.resetButton} onPress={resetPreferences}>
        <Text style={styles.resetButtonText}>Resetar Preferências</Text>
      </TouchableOpacity>

    
      <View style={styles.currentSettings}>
        <Text style={styles.settingsText}>Tema: {theme}</Text>
        <Text style={styles.settingsText}>Tamanho da Fonte: {fontSize}</Text>
        <Text style={styles.settingsText}>Modo Noturno: {nightMode ? 'Ativado' : 'Desativado'}</Text>
      </View>

    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fbf5f3', 
  },
  
  title: {
    fontSize: 25,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 25,
  },
  
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#000', 
  },

  pickerContainer: {
    marginVertical: 25,
  },
  
  picker: {
    backgroundColor: '#3c3744', 
    color: '#fff', 
    height: 50,
    width: '100%',
  },
  
  sliderContainer: {
    marginVertical: 25,
  },

  slider: {
    width: '100%',
  },

  fontSizeText: {
    color: '#000', 
    marginTop: 10,
    fontSize: 20,
    textAlign: 'center',
  },

  switchContainer: {
    marginVertical: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },

  switchStatus: {
    color: '#476c9b', 
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
  },


  resetButton: {
    backgroundColor: '#476c9b', 
    marginTop: 25,
    borderRadius: 10,
    paddingVertical: 18,
    alignItems: 'center',
  },

  resetButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  currentSettings: {
    backgroundColor: '#3c3744', 
    marginTop: 30,
    padding: 20,
    borderRadius: 10,
  },

  settingsText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold', 
    marginVertical: 10,
  }
  
})
