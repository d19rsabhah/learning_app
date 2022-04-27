import {
    FlatList,
    StyleSheet,
    Text,
    View,
    Image,
    Touchable,
    TouchableOpacity,
  } from "react-native";
  import React from "react";
  import Courses from "../api/CourseApi";
  
  const Course = ({ navigation }) => {
  
  
    const courseCard = ({ item }) => {
      return (
        <View style={styles.mainContainer}>
          <View style={styles.courseContainer}>
            <View>
              <Image
                style={styles.cardImage}
                source={item.image}
                resizeMode="contain"
              />
            </View>
  
            <Text style={styles.mainHeader}>{item.title}</Text>
  
            <Text style={styles.description}>{item.description}</Text>
  
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() =>
                  navigation.navigate("CourseDetails", {
                    courseId: item.id,
                  })
                }>
                <Text style={styles.buttonText}> course Details </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    };
  
    return (
      <FlatList
        keyExtractor={(item) => item.id}
        data={Courses}
        renderItem={courseCard}
      />
    );
  };
  
  const styles = StyleSheet.create({
    cardImage: {
      width: "100%",
      height: undefined,
      aspectRatio: 1,
    },
    mainContainer: {
      paddingHorizontal: 20,
    },
    courseContainer: {
      padding: 30,
      backgroundColor: "rgba(255, 255, 255, 0.90)",
      textAlign: "center",
      borderRadius: 5,
      shadowColor: "#c7e895",
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.5,
      shadowRadius: 8,
      elevation: 8,
      marginVertical: 30,
    },
    mainHeader: {
      fontSize: 22,
      color: "#cc1916",
      textTransform: "uppercase",
      // fontWeight: 500,
      paddingBottom: 15,
      textAlign: "center",

    },
    description: {
      textAlign: "left",

      paddingBottom: 15,
      lineHeight: 20,
      fontSize: 16,
      color: "#5aa6bf",
    },
    buttonContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    },
    buttonStyle: {
      backgroundColor: "#091c54",
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 20,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    buttonText: {
      fontSize: 20,
      color: "#81db14",
      textTransform: "capitalize",
    },
  });
  
  export default Course;