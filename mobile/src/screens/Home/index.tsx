import React from 'react';
import { useEffect, useState } from 'react';

import { styles } from './styles';
import logoImg from '../../assets/logo-nlw-esports.png';

import { Image, FlatList } from 'react-native';
import { Heading } from '../../components/Heading';
import { GameCard, GameCardProps } from '../../components/GameCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Background } from '../../components/Background';
import { useNavigation } from '@react-navigation/native';

export function Home() {
    const [games, setGames] = useState<GameCardProps[]>();

    useEffect(() => {
        fetch('http://192.168.0.14:9999/games')
            .then(response => response.json())
            .then(data => setGames(data));
    }, []);

    const navigation = useNavigation();

    function handleOpenGame({ id, title, bannerUrl }: GameCardProps): void {
        navigation.navigate('game', { id, title, bannerUrl });
    }

    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <Image
                    source={logoImg}
                    style={styles.logo}
                />

                <Heading
                    title="Encontre seu duo!"
                    subtitle="Selecione o game que deseja jogar..."
                />

                <FlatList
                    data={games}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <GameCard
                            data={item}
                            onPress={() => handleOpenGame(item)}
                        />
                    )}
                    contentContainerStyle={styles.contentList}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                />

            </SafeAreaView>
        </Background>
    );
}