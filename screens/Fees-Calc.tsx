import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  ContactScreen: undefined;
  FeesCalcScreen: undefined;
  IndividualCourse: { course: string };
};

type FeesCalcScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'FeesCalcScreen'>;

interface FeesCalcScreenProps {
  navigation: FeesCalcScreenNavigationProp;
}

export default function FeesCalcScreen({ navigation }: FeesCalcScreenProps) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [dropdownVisible, setDropdownVisible] = useState(false);

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require('../img/bird-logo-png.png')}
          resizeMode="contain"/>
        <Text style={styles.title}>Fees Calculations</Text>
        <View style={styles.dropdownContainer}>
          <TouchableOpacity
            style={styles.dropdownToggle}
            onPress={() => setDropdownVisible(!dropdownVisible)}
          >
            <Text style={styles.dropdownToggleText}>Menu ▼</Text>
          </TouchableOpacity>
          {dropdownVisible && (
            <View style={styles.dropdownMenu}>
              <TouchableOpacity
                style={styles.dropdownItem}
                onPress={() => {
                  setDropdownVisible(false);
                  navigation.navigate('Home');
                }}
              >
                <Text style={styles.dropdownItemText}>Home</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.dropdownItem}
                onPress={() => {
                  setDropdownVisible(false);
                  navigation.navigate('IndividualCourse', { course: 'Courses' });
                }}
              >
                <Text style={styles.dropdownItemText}>Courses</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.dropdownItem}
                onPress={() => {
                  setDropdownVisible(false);
                  navigation.navigate('FeesCalcScreen');
                }}
              >
                <Text style={styles.dropdownItemText}>Calculate Fees</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.dropdownItem}
                onPress={() => {
                  setDropdownVisible(false);
                  navigation.navigate('ContactScreen');
                }}
              >
                <Text style={styles.dropdownItemText}>Contact Us</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>

      {/* Heading */}
      <Text style={styles.heading}>Calculate Your Fees</Text>

      {/* User Details Section */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Your Details</Text>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          autoCapitalize="words"
          onChangeText={setName}
          value={name}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          onChangeText={setNumber}
          value={number}
        />
        <TextInput
          style={styles.input}
          placeholder="john@email.com"
          onChangeText={setEmail}
          value={email}
        />
      </View>

      {/* Search Bar Section */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Search Courses</Text>
        <TextInput
          style={styles.input}
          placeholder="Search for courses..."
        />
      </View>
      {/* Cart Section */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Cart</Text>
        <View style={styles.courseItem}>
          <View style={styles.courseTextContainer}>
            <Text style={styles.courseText}>First Aid</Text>
            <Text style={styles.courseText}>6 Months</Text>
            <Text style={styles.courseText}>R1500</Text>
          </View>
          <Image source={require('../img/bin.png')} style={styles.binIcon} />
        </View>
        <View style={styles.divider} />
        <View style={styles.courseItem}>
          <View style={styles.courseTextContainer}>
            <Text style={styles.courseText}>Cooking</Text>
            <Text style={styles.courseText}>6 Weeks</Text>
            <Text style={styles.courseText}>R750</Text>
          </View>
          <Image source={require('../img/bin.png')} style={styles.binIcon} />
        </View>
      </View>

      {/* Totals Section */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Totals</Text>
        <View style={styles.feeRow}>
          <Text style={styles.courseText}>Courses:</Text>
          <Text style={styles.courseText}>2</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.feeRow}>
          <Text style={styles.courseText}>VAT</Text>
          <Text style={styles.courseText}>15%</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.feeRow}>
          <Text style={styles.courseText}>Total</Text>
          <Text style={styles.courseText}>R2250</Text>
        </View>
        <TouchableOpacity style={styles.getQuoteButton}>
          <Text style={styles.getQuoteButtonText}>Get Quote</Text>
        </TouchableOpacity>
      </View>

     
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fcfa', 
    paddingTop: 20,
  },
  header: {
    width: '100%',
    backgroundColor: '#219a2f', 
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between',
  },
  logo: {
    width: 40,
    height: 40, 
    backgroundColor: '#158a1f',
    borderRadius: 30,
    marginRight: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#fff', 
    flex: 1,
  },
  dropdownContainer: {
    position: 'relative',
    marginLeft: 8,
  },
  dropdownToggle: {
    backgroundColor: '#219a2f', 
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 2,
    borderColor: '#fff',
  },
  dropdownToggleText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  dropdownMenu: {
    position: 'absolute',
    top: 44,
    right: 0,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#219a2f', 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    zIndex: 10,
    minWidth: 160,
  },
  dropdownItem: {
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#e2f6e7', 
  },
  dropdownItemText: {
    color: '#219a2f', 
    fontWeight: 'bold',
    fontSize: 16,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 28,
    color: '#219a2f', 
    marginVertical: 18,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#e2f6e7', 
    borderColor: '#219a2f',
    borderWidth: 2,
    borderRadius: 16,
    padding: 18,
    marginHorizontal: 10,
    marginBottom: 20,
    width: '90%',
    alignSelf: 'center',
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#219a2f',
    marginBottom: 8,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    borderColor: '#219a2f',
    borderWidth: 2,
    borderRadius: 12,
    padding: 10,
    marginBottom: 12,
    fontSize: 16,
    color: '#219a2f',
  },
  courseItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  courseTextContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  courseText: {
    fontSize: 16,
    color: '#219a2f', 
  },
  binIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginLeft: 10,
  },
  divider: {
    height: 1,
    backgroundColor: '#219a2f', 
    width: '100%',
    marginVertical: 8,
  },
  feeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  getQuoteButton: {
    backgroundColor: '#219a2f', 
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginTop: 12,
    alignSelf: 'center',
    minWidth: 160,
  },
  getQuoteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});