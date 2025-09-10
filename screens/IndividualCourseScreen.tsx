import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Define the RootStackParamList to match App.tsx
type RootStackParamList = {
  Home: undefined;
  ContactScreen: undefined;
  FeesCalcScreen: undefined;
  IndividualCourse: { course: string };
};




export default function IndividualCourseScreen() {
 
  return (
    <View style={styles.container}>
      {/* Title */}
      <View style={styles.titleBox}>
        <Text style={styles.title}>First Aid</Text> 
      </View>

      {/* Image Block */}
      <View style={styles.imageBox}>
        <Image source={require('../img/firstAidImage.jpg')} style={styles.image} />
      </View>

      {/* Course Info Block */}
      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>First Aid</Text>
        <Text style={styles.infoText}>
          Purpose: To provide first aid awareness and basic life support.{"\n"}
          The content in this course provides learners with the ability to treat wounds and bleeding, care for burns and fractures, perform Cardio-Pulmonary Resuscitation (CPR), and manage emergency scenes. Everything you'll need to know to handle common first aid situations safely and effectively.
        </Text>
        <View style={styles.detailsRow}>
          <View style={styles.detailBox}><Text style={styles.detailText}>Duration: 6 Months</Text></View>
          <View style={styles.detailBox}><Text style={styles.detailText}>Price: R1500</Text></View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fcfa',
    alignItems: 'center',
    paddingTop: 20,
  },
  titleBox: {
    backgroundColor: '#e2f6e7',
    borderColor: '#219a2f',
    borderWidth: 2,
    borderRadius: 16,
    width: '90%',
    alignItems: 'center',
    marginBottom: 18,
    padding: 18,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 38,
    color: '#219a2f',
    textAlign: 'center',
  },
  imageBox: {
    backgroundColor: '#e2f6e7',
    borderColor: '#219a2f',
    borderWidth: 2,
    borderRadius: 16,
    width: '90%',
    alignItems: 'center',
    marginBottom: 18,
    padding: 18,
  },
  infoCard: {
    backgroundColor: '#e2f6e7',
    borderColor: '#219a2f',
    borderWidth: 2,
    borderRadius: 16,
    padding: 18,
    width: '90%',
    minHeight: 180,
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 18,
  },
  infoTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#219a2f',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 15,
    color: '#219a2f',
    marginBottom: 16,
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 12,
  },
  detailBox: {
    borderColor: '#219a2f',
    borderWidth: 2,
    borderRadius: 12,
    padding: 10,
    marginRight: 12,
    backgroundColor: '#fff',
  },
  detailText: {
    color: '#219a2f',
    fontWeight: 'bold',
    fontSize: 16,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#219a2f',
    resizeMode: 'cover',
  },
});