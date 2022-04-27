import {
    Linking,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
  } from "react-native";
  import React from "react";
  
  const About = () => {
    return (
      <View style={styles.aboutContainer}>
        <Text style={styles.mainHeader}>IYC</Text>
        <Text style={styles.paraStyle}> This is a learning app </Text>
  
        <View>
          <Image
            style={styles.imgStyle}
            source={{
              uri: "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/776984/cold-dive-into-react-native-a-beginners-tutorial-922a625efe84a4c2d782343b333b0bdb.png",
            }}
          />
        </View>
  
        <View style={styles.aboutLayout}>
          <Text style={styles.aboutSubHeader}> About me </Text>
          <Text style={[styles.paraStyle, styles.aboutPara]}>
          All forms of incompleteness are experienced
          due to incomplete knowledge
           of the Complete Whole.
          </Text>
        </View>
  
        <Text style={styles.mainHeader}> Follow me on Social Network </Text>
  
        <View style={styles.menuContainer}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() =>
              Linking.openURL("https://www.instagram.com/rsabhah_17/")
            }>
            <Image
              style={styles.iconStyle}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
              }}
            />
          </TouchableOpacity>
  
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() =>
              Linking.openURL(
                "https://twitter.com/27_rsabhah"
              )
            }>
            <Image
              style={styles.iconStyle}
              source={{
                 uri: "https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png",
              }}
            />
          </TouchableOpacity>
  
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => Linking.openURL("https://www.facebook.com/profile.php?id=100077142439544")}>
            <Image
              style={styles.iconStyle}
              source={{
                uri: "https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() =>
              Linking.openURL("https://www.linkedin.com/in/rishav-das-570378210")
            }>
            <Image
              style={styles.iconStyle}
              source={{
                uri: "https://www.seekpng.com/png/full/8-84419_linkedin-logo-png-icon-linkedin-logo-png.png",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() =>
              Linking.openURL("https://github.com/d19rsabhah")
            }>
            <Image
              style={styles.iconStyle}
              source={{
                uri: "https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png",
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    aboutContainer: {
      display: "flex",
      alignItems: "center",
    },
  
    imgStyle: {
      width: 150,
      height: 150,
      borderRadius: 100,
    },
    mainHeader: {
      fontSize: 18,
      color: "#344055",
      textTransform: "uppercase",
      fontWeight: "500",
      // marginTop: 50,
      marginTop: 40,
      marginBottom: 10,

    },
    paraStyle: {
      fontSize: 18,
      color: "#7d7d7d",
      paddingBottom: 30,

    },
    aboutLayout: {
      backgroundColor: "#4c5dab",
      paddingHorizontal: 30,
      // marginVertical: 30,
      marginTop: 20,
    },
    aboutSubHeader: {
      fontSize: 18,
      color: "#fff",
      textTransform: "uppercase",
      fontWeight: "500",
      marginVertical: 15,
      alignSelf: "center",
    },
    aboutPara: {
      color: "#fff",
      fontSize: 18,
      lineHeight: 26,
    },
    menuContainer: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-evenly",
    },
  
    iconStyle: {
      width: "100%",
      height: 45,
      aspectRatio: 1,
    },
  });
  
  export default About;