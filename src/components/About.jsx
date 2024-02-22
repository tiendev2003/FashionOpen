import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const About = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
      }}
    >
      <Image style={styles.logo} source={require("../../assets/open.png")} />
      <Text style={styles.description}>
        Making a luxurious lifestyle accessible for a generous group of women is
        our daily drive
      </Text>
      <Image
        style={{ alignSelf: "center", marginTop: 10, marginBottom: 35 }}
        source={require("../../assets/3.png")}
      />
      <View style={styles.aboutContainer}>
        <View>
          <Image
            style={styles.miroodles}
            source={require("../../assets/miroodles/miroodles-1.png")}
          />
          <Text style={styles.aboutText}>
            Fast Shipping. Free on orders over $25
          </Text>
        </View>
        <View>
          <Image
            style={styles.miroodles}
            source={require("../../assets/miroodles/miroodles-2.png")}
          />
          <Text style={styles.aboutText}>
            Sustainable process from start to finish.
          </Text>
        </View>
        <View>
          <Image
            style={styles.miroodles}
            source={require("../../assets/miroodles/miroodles-3.png")}
          />
          <Text style={styles.aboutText}>
            Unique designs and high-quality materials.
          </Text>
        </View>
        <View>
          <Image
            style={styles.miroodles}
            source={require("../../assets/miroodles/miroodles-4.png")}
          />
          <Text style={styles.aboutText}>
            Fast shipping. Free on orders over $25.
          </Text>
        </View>
      </View>
      <Image
        style={styles.miroodles2}
        source={require("../../assets/miroodles/miroodles-5.png")}
      />
      <View>
        <Text style={styles.follow}>FOLLOW US</Text>
        <Image
          style={styles.instagram1}
          source={require("../../assets/socials/Instagram.png")}
        />
      </View>
      <View style={styles.teamwrap}>
        <TouchableOpacity>
          <Image
            style={styles.team}
            source={require("../../assets/team/team1.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.team}
            source={require("../../assets/team/team2.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.teamwrap}>
        <TouchableOpacity>
          <Image
            style={styles.team}
            source={require("../../assets/team/team3.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.team}
            source={require("../../assets/team/team4.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default About;


const styles = StyleSheet.create({
    logo: {
      width: 132,
      height: 53,
      alignSelf: "center",
      marginBottom: 20,
      marginTop: 40,
    },
    description: {
      fontFamily: "TenorSans",
      color: "#555555",
      width: 300,
      alignSelf: "center",
      textAlign: "center",
    },
    aboutContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      width: 300,
      marginBottom: 10,
    },
    miroodles: {
      width: 40,
      height: 40,
      alignSelf: "center",
      marginBottom: 12,
    },
    aboutText: {
      width: 150,
      textAlign: "center",
      marginBottom: 25,
      fontFamily: "TenorSans",
      fontSize: 13,
    },
    miroodles2: {
      width: 70,
      height: 40,
      alignSelf: "center",
      marginBottom: 12,
    },
    follow: {
      marginTop: 30,
      fontSize: 18,
      fontFamily: "TenorSans",
      letterSpacing: 5,
    },
    instagram1: {
      width: 30,
      height: 30,
      alignSelf: "center",
      marginTop: 10,
      marginBottom: 5,
    },
    teamwrap: {
      flexDirection: "row",
      width: 310,
    },
    team: {
      width: 150,
      height: 150,
      marginTop: 15,
      marginRight: 15,
    },
  });
  