import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  ContactScreen: undefined;
  FeesCalcScreen: undefined;
  Courses: undefined;
  SixMonthCourses: undefined;
  SixWeekCourses: undefined;
  IndividualCourse: { course: string };
};

type ContactScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ContactScreen'>;

interface ContactScreenProps {
  navigation: ContactScreenNavigationProp;
}

export default function ContactScreen({ navigation }: ContactScreenProps) {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require('../img/bird-logo-png.png')}
          resizeMode="contain"
        />
        <Text style={styles.title}>Contact Us</Text>

        {/* Dropdown menu */}
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
                  navigation.navigate('Courses');
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
      <Text style={styles.heading}>Contact Our Offices</Text>

      {/* Cape Town Section */}
      <View style={styles.contactCard}>
        <Text style={styles.cardTitle}>Cape Town Office</Text>
        <Text style={styles.contactText}>
          <Text style={styles.contactTextHeading}>Phone Number: </Text>+27 21 445 5454
        </Text>
        <Text style={styles.contactText}>
          <Text style={styles.contactTextHeading}>Email: </Text>info@empoweringthenation.com
        </Text>
        <Text style={styles.contactText}>
          <Text style={styles.contactTextHeading}>Address: </Text>142 Kelvin Rd, Rondebosch, Cape Town, 7700
        </Text>
        <Image source={require('../img/map-location-cape-town.png')} style={styles.mapImage} />
      </View>

      {/* Johannesburg Section */}
      <View style={styles.contactCard}>
        <Text style={styles.cardTitle}>Johannesburg Office</Text>
        <Text style={styles.contactText}>
          <Text style={styles.contactTextHeading}>Phone Number: </Text>+27 21 445 5454
        </Text>
        <Text style={styles.contactText}>
          <Text style={styles.contactTextHeading}>Email: </Text>info@empoweringthenation.com
        </Text>
        <Text style={styles.contactText}>
          <Text style={styles.contactTextHeading}>Address: </Text>Tswelopele, Thembisa, Johannesburg, 1666
        </Text>
        <Image source={require('../img/map-location-johannesburg.png')} style={styles.mapImage} />
      </View>

      {/* Durban Section */}
      <View style={styles.contactCard}>
        <Text style={styles.cardTitle}>Durban Office</Text>
        <Text style={styles.contactText}>
          <Text style={styles.contactTextHeading}>Phone Number: </Text>+27 21 445 5454
        </Text>
        <Text style={styles.contactText}>
          <Text style={styles.contactTextHeading}>Email: </Text>info@empoweringthenation.com
        </Text>
        <Text style={styles.contactText}>
          <Text style={styles.contactTextHeading}>Address: </Text>1 Link Rd, Dawncliffe, Westville, 3630
        </Text>
        <Image source={require('../img/map-location-durban.png')} style={styles.mapImage} />
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
  contactCard: {
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
  contactText: {
    fontSize: 16,
    color: '#219a2f', 
    marginBottom: 10,
  },
  contactTextHeading: {
    fontWeight: 'bold',
    color: '#219a2f',
  },
  mapImage: {
    width: '100%',
    height: 150,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#219a2f', 
    resizeMode: 'cover',
    marginTop: 10,
  },
});