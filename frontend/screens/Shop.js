import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const Shop = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchBar}>
          <Image source={require('../assets/magnifyglass.png')} style={styles.searchIcon} />
          <Text style={styles.searchText}>Search Rewards</Text>
        </View>
       
      </View>
      <View style={styles.coinContainer}>
          <Text style={styles.coinText}>3270</Text>
          <Image source={require('../assets/coin_icon.png')} style={styles.coinIcon} />
        </View>

      <RewardRow
        title="Apple Tree"
        description="A tree where Newton finds gravity"
        price="7000 coins"
        buttonLabel="Redeem"
        imageSource={require('../assets/apple_tree.png')}
      />

      <RewardRow
        title="Christmas Tree"
        description="A tree where hopes and peace being spread"
        price="$5"
        buttonLabel="Buy"
        imageSource={require('../assets/christmas_tree.png')}
      />

      <RewardRow
        title="Cherry Tree"
        description="What's a lovely pink colour isn't it?"
        price="$3"
        buttonLabel="Buy"
        imageSource={require('../assets/cherry_tree.png')}
      />

      <RewardRow
        title="Premium Seasonal Pass"
        description="Use the pass to enroll premium courses for a month"
        price="7000 coins"
        buttonLabel="Redeem"
        imageSource={require('../assets/premium_seasonal_pass.png')}
      />

      <RewardRow
        title="Premium Ticket"
        description="Use this ticket to enroll in premium level courses"
        price="3000 coins"
        buttonLabel="Redeem"
        imageSource={require('../assets/premium_ticket.png')}
      />

      <RewardRow
        title="Solution Token"
        description="Unlock solution for a question in a quiz"
        price="2000 coins"
        buttonLabel="Redeem"
        imageSource={require('../assets/solution_token.png')}
      />

      <RewardRow
        title="Coin Boost Token"
        description="Use this token to double the coins gained in missions or quizzes"
        price="5000 coins"
        buttonLabel="Redeem"
        imageSource={require('../assets/coin_boost_token.png')}
      />

      <RewardRow
        title="10,000 Coins"
        description="Buy more coins!"
        price="$3"
        buttonLabel="Buy"
        imageSource={require('../assets/coin_stack.png')}
      />
    </ScrollView>
  );
};

const RewardRow = ({ title, description, price, buttonLabel, imageSource }) => {
  return (
    <View style={styles.rewardRow}>
      <Image source={imageSource} style={styles.rewardImage} />
      <View style={styles.rewardInfo}>
        <Text style={styles.rewardTitle}>{title}</Text>
        <Text style={styles.rewardDescription}>{description}</Text>
        <View style={styles.verticalSeparator}></View>
        <Text style={styles.rewardPrice}>{price}</Text>
        <TouchableOpacity style={styles.rewardButton}>
          <Text style={styles.buttonText}>{buttonLabel}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  header: {
    marginBottom: 20,
    flexDirection: 'column',
    alignItems: 'center', 
  },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: '#F6F4FF',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
  searchText: {
    flex: 1,
    color: 'gray',
    marginLeft: 10,
  },
  coinContainer: {
    flexDirection: 'row',
    width: "100%",
    justifyContent: "flex-end"
  },
  coinText: {
    fontSize: 18,
    marginRight: 5,
  },
  coinIcon: {
    width: 20,
    height: 20,
  },
  rewardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  rewardImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  rewardInfo: {
    flex: 1,
  },
  rewardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  rewardDescription: {
    color: 'gray',
  },
  verticalSeparator: {
    height: 1,
    backgroundColor: 'gray',
    marginVertical: 5,
  },
  rewardPrice: {
    fontSize: 16,
    color: 'green',
  },
  rewardButton: {
    backgroundColor: '#B9A0FF',
    borderRadius: 10,
    paddingVertical: 5,
    alignItems: 'center',
    marginTop: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Shop;
