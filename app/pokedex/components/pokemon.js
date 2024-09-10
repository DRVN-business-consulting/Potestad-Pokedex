import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import { API_URL } from '../../constants'
import { myTheme } from '../../themes/myTheme'

const Pokemon = ({ pokemon: { id, name, type, image }}) => {

  return (
    <>
      <TouchableOpacity style={[myTheme.row, styles.container]} onPress={() => router.push(`pokedex/${id}`)}>
        <Image source={{ uri: `${API_URL + image.thumbnail}`}} style={{ width: 80, height: 80}} />
        <View>
          <Text style={styles.name}>{name.english}</Text>
          <Text>{type}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 20,
    marginHorizontal: 40,
    marginVertical: 15,
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default Pokemon;
