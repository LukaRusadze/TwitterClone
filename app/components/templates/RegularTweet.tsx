import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { useAppSelector } from "../../types/redux";
import HeartStroke from "../../assets/icons/Tweet/ic_vector_heart_stroke.svg";
import RetweetStroke from "../../assets/icons/Tweet/ic_vector_retweet_stroke.svg";
import ReplyStroke from "../../assets/icons/Tweet/ic_vector_reply_stroke.svg";
import Share from "../../assets/icons/Tweet/ic_vector_share_android.svg";

interface Props {}

const RegularTweet = ({}: Props) => {
  const accountData = useAppSelector((state) => state.account);

  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.profilePictureContainer}
          source={{
            uri: accountData.profilePicture,
            width: 55,
            height: 55,
          }}
        />
      </View>
      <View style={styles.content}>
        <View style={styles.nameContainer}>
          <Text numberOfLines={1} style={styles.nameAndHandle}>
            <Text style={styles.name}>Name</Text>
            <Text style={styles.handle}> @handle</Text>
          </Text>
          <View>
            <Text style={styles.timestamp}> · 19h</Text>
          </View>
        </View>

        <Text style={styles.tweet}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
          eius praesentium sequi temporibus explicabo est aut labore quo neque.
          Fugit blanditiis perspiciatis, cum beatae commodi ab vitae neque
          molestias cumque.
        </Text>

        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <ReplyStroke fill={"#657786"} width={19} height={19} />
            <Text style={styles.buttonTextStyle}>388</Text>
          </View>

          <View style={styles.buttonContainer}>
            <RetweetStroke fill={"#657786"} width={19} height={19} />
            <Text style={styles.buttonTextStyle}>13.2K</Text>
          </View>

          <View style={styles.buttonContainer}>
            <HeartStroke fill={"#657786"} width={19} height={19} />
            <Text style={styles.buttonTextStyle}>39.7K</Text>
          </View>

          <Share fill={"#657786"} width={19} height={19} />
        </View>
      </View>
    </View>
  );
};

export default RegularTweet;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  content: {
    flex: 1,
  },
  name: {
    fontFamily: "HelveticaNeue-Bold",
    color: "black",
    fontSize: 15,
    marginRight: 5,
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "baseline",
    marginBottom: -2,
    marginTop: -5,
  },
  profilePictureContainer: {
    borderRadius: 100,
    marginLeft: 10,
    marginRight: 10,
    overflow: "hidden",
  },
  handle: {
    color: "#657786",
    fontFamily: "HelveticaNeue-Regular",
  },
  tweet: {
    color: "black",
    fontSize: 14.7,
    marginBottom: 10,
    fontFamily: "Chirp-Regular",
    lineHeight: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
  buttonTextStyle: {
    fontFamily: "HelveticaNeue-Regular",
    fontSize: 13,
    marginLeft: 7,
  },
  timestamp: {
    fontFamily: "HelveticaNeue-Regular",
  },
  nameAndHandle: {
    flexShrink: 1,
  },
});
