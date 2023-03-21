import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAppSelector } from "../../types/redux";

interface Props {}

const DrawerHeader = ({}: Props) => {
  const userData = useAppSelector((state) => state.account);

  console.log(userData);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: userData.profilePicture, width: 55, height: 55 }}
        style={styles.image}
      />
      <Pressable>
        <View>
          <Text style={styles.name}>{userData.name}</Text>
          <Text style={styles.username}>@{userData.username}</Text>
        </View>

        <View style={styles.followersContainer}>
          <View style={styles.followerContainer}>
            <Text style={styles.followCounters}>0</Text>
            <Text style={styles.followText}>Following</Text>
          </View>
          <View style={styles.followerContainer}>
            <Text style={styles.followCounters}>0</Text>
            <Text style={styles.followText}>Followers</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default DrawerHeader;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderBottomWidth: 0.3,
    borderColor: "#9e9e9e",
    paddingLeft: 25,
    paddingRight: 20,
  },
  image: {
    marginTop: 13,
    borderRadius: 100,
  },
  username: {
    color: "#606060",
    fontFamily: "Chirp-Regular",
    marginTop: 2,
    fontSize: 15,
  },
  name: {
    fontFamily: "Chirp-Bold",
    color: "black",
    fontSize: 17.5,
    marginTop: 8.5,
  },
  followerContainer: {
    flexDirection: "row",
  },
  followersContainer: {
    flexDirection: "row",
    width: "60%",
    justifyContent: "space-between",
    marginTop: 16,
    marginBottom: 20,
  },
  followText: {
    fontFamily: "Chirp-Regular",
    color: "#606060",
  },
  followCounters: {
    fontFamily: "Chirp-Bold",
    color: "black",
    marginRight: 5,
    fontSize: 14,
  },
});
