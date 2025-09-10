import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  ContactScreen: undefined;
  FeesCalcScreen: undefined;
  IndividualCourse: undefined;
  Courses: undefined;
  SixWeekCourses: undefined;
  SixMonthCourses: undefined;
};

type SixMonthCoursesNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SixMonthCourses'>;

interface SixMonthCoursesProps {
  navigation: SixMonthCoursesNavigationProp;
}

const courses = [
  { 
    title: 'First Aid', 
    duration: '6 Months', 
    price: 'R1500', 
    purpose: 'To provide first aid awareness and basic life support', 
    content: [
      'Wounds and bleeding',
      'Burns and fractures',
      'Emergency scene management',
      'Cardio-Pulmonary Resuscitation (CPR)',
      'Respiratory distress e.g., Choking, blocked airway',
    ],
    image: require('../img/firstAidImage.jpg'),
  },
  { 
    title: 'Sewing', 
    duration: '6 Months', 
    price: 'R1500', 
    purpose: 'To provide alterations and new garment tailoring services', 
    content: [
      'Types of stitches',
      'Threading a sewing machine',
      'Sewing buttons, zips, hems and seams',
      'Alterations',
      'Designing and sewing new garments',
    ],
    image: require('../img/sewing.png'),
  },
  { 
    title: 'Landscaping', 
    duration: '6 Months', 
    price: 'R1500', 
    purpose: 'To provide landscaping services for new and established gardens', 
    content: [
      'Indigenous and exotic plants and trees',
      'Fixed structures (fountains, statues, benches, tables, built-in braai)',
      'Balancing of plants and trees in a garden',
      'Aesthetics of plant shapes and colours',
      'Garden layout',
    ],
    image: require('../img/landscaping.webp'),
  },
  { 
    title: 'Life Skills', 
    duration: '6 Months', 
    price: 'R1500', 
    purpose: 'To provide skills to navigate basic life necessities', 
    content: [
      'Opening a bank account',
      'Basic labour law (know your rights)',
      'Basic reading and writing literacy',
      'Basic numeric literacy',
    ],
    image: require('../img/life-skill.png'),
  },
];

export default function SixMonthCourses({ navigation }: SixMonthCoursesProps) {
  const [dropdownVisible, setDropdownVisible] = React.useState(false);

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require('../img/bird-logo-png.png')}
          resizeMode="contain"
        />
        <Text style={styles.title}>Six Month Courses</Text>
        <View style={styles.dropdownContainer}>
          <TouchableOpacity
            style={styles.dropdownToggle}
            onPress={() => setDropdownVisible(!dropdownVisible)}
          >
            <Text style={styles.dropdownToggleText}>Menu ▼</Text>
          </TouchableOpacity>

          {/* Dropdown menu */}
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
      <Text style={styles.heading}>6 Month Courses</Text>

      {/* Course Grid */}
      <View style={styles.grid}>
        {courses.map((course, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.cardTitle}>{course.title}</Text>
            <Text style={styles.cardText}>Duration: {course.duration}</Text>
            <Text style={styles.cardText}>Fees: {course.price}</Text>
            <Text style={styles.cardText}>Purpose: {course.purpose}</Text>
            <Text style={styles.cardSubHeader}>Content:</Text>
            {course.content.map((item, i) => (
              <Text key={i} style={styles.cardContentItem}>• {item}</Text>
            ))}
            <Image source={course.image} style={styles.courseImage} />
          </View>
        ))}
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
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  card: {
    width: '48%',
    backgroundColor: '#e2f6e7',
    borderColor: '#219a2f',
    borderWidth: 2,
    borderRadius: 16,
    padding: 18,
    marginBottom: 15,
    alignItems: 'flex-start',
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#219a2f',
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    color: '#219a2f',
    marginBottom: 5,
  },
  cardSubHeader: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#219a2f',
    marginTop: 5,
    marginBottom: 3,
  },
  cardContentItem: {
    fontSize: 13,
    color: '#219a2f',
    marginLeft: 8,
    marginBottom: 2,
  },
  courseImage: {
    marginTop: 10,
    width: '100%',
    height: 80,
    borderColor: '#219a2f',
    borderWidth: 2,
    borderRadius: 16,
    resizeMode: 'cover',
  },
});