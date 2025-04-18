import React, { useState } from 'react';
import {View,StyleSheet,FlatList,TextInput,} from 'react-native';
import { useRoute } from '@react-navigation/native'; //Hook
import AddressCard from '../components/CardAddress';
import { useNavigation } from '@react-navigation/native';
import PrimaryButton from '../components/PrimaryButton';
import Icon from 'react-native-vector-icons/Ionicons';
import ReturnButton from '../components/Buttons/ReturnButton';
import TitleScreen from '../components/TitleScreen';
import { GLOBAL_STYLES } from '../constants/styles';

const AddressSelector = () => {
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [searchText, setSearchText] = useState('');
  const navigation = useNavigation();
  const route = useRoute(); 
  const car = route.params?.car; 
  const handlePaymentMethodScreen = () => {
    navigation.navigate('PaymentMethodScreen', { car });
  };

  const handleCarDetails = () => {
    navigation.navigate('CarDetailsScreen', { car });
  };

  const addresses = [
    {
      id: '1',
      title: 'Home',
      address: '4140 Parker Rd. Allentown, New Mexico 31134',
    },
    {
      id: '2',
      title: 'Work',
      address: '8502 Preston Rd. Inglewood, Maine 98380',
    },
    {
      id: '3',
      title: 'Office',
      address: '6391 Elgin St. Celina, Delaware 10299',
    },
  ];

  const filteredAddresses = addresses.filter(item =>
    item.title.toLowerCase().includes(searchText.toLowerCase()),
  );

  const handleSelect = id => setSelectedAddress(id);

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <ReturnButton onPressButton={handleCarDetails} />
        <TitleScreen>Address</TitleScreen>
      </View>

      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color="#888" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>
      </View>

      <FlatList
        data={filteredAddresses}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <AddressCard
            title={item.title}
            address={item.address}
            selected={selectedAddress === item.id}
            onPress={() => handleSelect(item.id)}
          />
        )}
      />
      <PrimaryButton onPressButton={handlePaymentMethodScreen}>Confirm Address</PrimaryButton>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 50,
    backgroundColor: GLOBAL_STYLES.colors.colorblanco ,
    paddingBottom:40
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
    marginTop: 40
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: GLOBAL_STYLES.colors.colorgristransparente,
    borderRadius: 25,
    width: '100%',
    height: 50,
    borderColor: GLOBAL_STYLES.colors.colorgrisletrasybordes,
    borderWidth: 0.5
  },
  searchIcon: {
    position: 'absolute',
    marginLeft: 15,
  },
  searchInput: {
    backgroundColor: 'transparent',
    color: '#333',
    paddingLeft: 45,
    fontSize: 16,
  }
});

export default AddressSelector;
