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

type SixWeekCoursesNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SixWeekCourses'>;

interface SixWeekCoursesProps {
  navigation: SixWeekCoursesNavigationProp;
}

const courses = [
  { 
    title: "Child Minding", 
    duration: "6 Weeks", 
    price: "R750", 
    purpose: "To provide basic child and baby care", 
    content: [
      "Birth to six-month old baby needs",
      "Seven-month to one year old needs",
      "Toddler needs",
      "Educational toys"
    ],
    image: require('../img/child-minding.png'), 
  },
  { 
    title: "Cooking", 
    duration: "6 Weeks", 
    price: "R750", 
    purpose: "To prepare and cook nutritious family meals", 
    content: [
      "Nutritional requirements for a healthy body",
      "Types of protein, carbohydrates and vegetables",
      "Planning meals",
      "Tasty and nutritious recipes",
      "Preparation and cooking of meals"
    ],
    image: require('../img/cooking.webp'),
  },
  { 
    title: "Garden Maintenance", 
    duration: "6 Weeks", 
    price: "R750", 
    purpose: "To provide basic knowledge of watering, pruning and planting in a domestic garden.", 
    content: [
      "Water restrictions and the watering requirements of indigenous and exotic plants",
      "Pruning and propagation of plants",
      "Planting techniques for different plant types"
    ],
    image: require('../img/garden-maintenance.png'),
  },
];
export default function SixWeekCourses({ navigation }: SixWeekCoursesProps) {
  const [dropdownVisible, setDropdownVisible] = React.useState(false);

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
            style={styles.logo}
            source={require('../img/bird-logo-png.png')}
            resizeMode="contain"/>
        <Text style={styles.title}>Six Week Courses</Text>
        <View style={styles.dropdownContainer}>
          <TouchableOpacity
            style={styles.dropdownToggle}
            onPress={() => setDropdownVisible(!dropdownVisible)}
          >
            <Text style={styles.dropdownToggleText}>Menu ▼</Text>
          </TouchableOpacity>

          {/* Dropdown Menu */}
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
      <Text style={styles.heading}>6 Week Courses</Text>

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
  imagePlaceholder: {
    marginTop: 10,
    width: '100%',
    height: 80,
    backgroundColor: '#e2f6e7', 
    borderColor: '#219a2f',
    borderWidth: 2,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
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