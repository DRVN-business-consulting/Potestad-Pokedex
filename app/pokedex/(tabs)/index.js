
import { View, Text, FlatList, ActivityIndicator, StyleSheet, SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonCard from '../components/pokemon';
import { API_URL } from '../../constants';
import { useTheme } from '../../../src/context/ThemeContext';
import { colors, themeColors } from '../../themes/colors';
import { myTheme } from '../../themes/myTheme';

const PokemonListScreen = () => { 
    const { theme } = useTheme();
    const [isLoading, setIsLoading] = useState(true); 
    const [pokemons, setPokemons] = useState([]); 
    
    const fetchPokemons = async () => {
        try {
            const { data } = await axios.get(`${API_URL}/pokemon`);
            setPokemons(data);
        } catch (error) {
            console.error("Failed to fetch pokemons", error);
        } finally {
            setIsLoading(false);
        }
    };
    
    useEffect(() => {
        fetchPokemons();
    }, []);
    
    const themeColor = themeColors[theme];
    
    if (isLoading) {
        return (
            <View style={myTheme.centerInContainer}>
                <ActivityIndicator color={colors.red_500} />
            </View>
        );
    }
    
    return (
        <SafeAreaView style={{flex:1}}>
            {/* <View>
                <Text>WELCOME TO POKEDEX</Text>
            </View> */}
            <FlatList
                style={[myTheme.container , {backgroundColor: themeColor.container}]}
                data={pokemons}
                renderItem={({ item }) => (
                    <View style={myTheme.pokemonCardContainer}>
                        <PokemonCard pokemon={item} />
                    </View>
                )}
                keyExtractor={(item) => item.id.toString()}
            />
        </SafeAreaView>
    );
};

export default PokemonListScreen;
