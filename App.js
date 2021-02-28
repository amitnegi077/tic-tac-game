import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {
  Container,
  Text,
  Header,
  Body,
  Title,
  Content,
  Card,
  H1,
  Button,
  H3,
} from 'native-base';

import Icons from './components/Icons';
import Snackbar from 'react-native-snackbar';

const itemArray = new Array(9).fill('empty');

const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState('');

  const changeItem = (itemNumber) => {
    if (winMessage) {
      return Snackbar.show({
        text: winMessage,
        backgroundColor: 'green',
        textColor: '#fff',
      });
    }

    if (itemArray[itemNumber] === 'empty') {
      itemArray[itemNumber] = isCross ? 'Cross' : 'Circle';
      setIsCross(!isCross);
    } else {
      return Snackbar.show({
        text: 'Position already filled!',
        backgroundColor: 'red',
        color: '#fff',
      });
    }

    //If Game is a Draw
    if (!winMessage && !itemArray.includes('empty')) {
      setWinMessage('Game Draw! Reload to Play!');
    }

    checkIsWinner();
  };

  const reloadGame = () => {
    setIsCross(false);
    setWinMessage('');
    itemArray.fill('empty', 0, 9);
  };

  const checkIsWinner = () => {
    if (
      itemArray[0] === itemArray[1] &&
      itemArray[1] === itemArray[2] &&
      itemArray[0] !== 'empty'
    ) {
      setWinMessage(`${itemArray[0]} Won!`);
    } else if (
      itemArray[3] === itemArray[4] &&
      itemArray[4] === itemArray[5] &&
      itemArray[3] !== 'empty'
    ) {
      setWinMessage(`${itemArray[3]} Won!`);
    } else if (
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8] &&
      itemArray[6] !== 'empty'
    ) {
      setWinMessage(`${itemArray[6]} Won!`);
    } else if (
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6] &&
      itemArray[0] !== 'empty'
    ) {
      setWinMessage(`${itemArray[0]} Won!`);
    } else if (
      itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7] &&
      itemArray[1] !== 'empty'
    ) {
      setWinMessage(`${itemArray[1]} Won!`);
    } else if (
      itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8] &&
      itemArray[2] !== 'empty'
    ) {
      setWinMessage(`${itemArray[2]} Won!`);
    } else if (
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8] &&
      itemArray[0] !== 'empty'
    ) {
      setWinMessage(`${itemArray[0]} Won!`);
    } else if (
      itemArray[2] === itemArray[4] &&
      itemArray[4] === itemArray[6] &&
      itemArray[2] !== 'empty'
    ) {
      setWinMessage(`${itemArray[6]} Won!`);
    }
  };

  return (
    <Container style={{}}>
      <Header>
        <Body>
          <Title>TicTacToe</Title>
        </Body>
      </Header>
      <Content>
        <View style={styles.grid}>
          {itemArray.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.box}
              onPress={() => changeItem(index)}>
              <Card style={styles.card}>
                <Icons name={item} />
              </Card>
            </TouchableOpacity>
          ))}
        </View>
        {winMessage ? (
          <View>
            <H1 style={styles.message}>{winMessage}</H1>
            <Button onPress={reloadGame} primary block rounded>
              <Text>Reload Game</Text>
            </Button>
          </View>
        ) : (
          <H3 style={styles.message}>{isCross ? 'Cross' : 'Circle'} to play</H3>
        )}
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  box: {
    width: '33%',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
  },
  card: {
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    backgroundColor: '#4652B3',
    textAlign: 'center',
    color: '#fff',
    padding: 5,
    textTransform: 'uppercase',
    marginVertical: 10,
  },
});

export default App;
