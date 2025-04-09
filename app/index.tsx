import { View } from "react-native";
import { Button } from "react-native-elements";
import { Image } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
export const unstable_settings = {
  initialRouteName: "index",
};

export const screenOptions = {
  headerShown: false,
};


const dotComponent = ({ selected }) => {
  return (
    <>
      {[Array(3)].map((_, index) => (
        <View
          key={index}
          style={{
            width: selected ? 40 : 8,
            height: 8,
            borderRadius: selected ? 20 : "50%",
            marginHorizontal: 3,
            backgroundColor: selected ? "#737373" : "#a3a3a3",
            opacity: selected ? 1 : 0.3,
          }}
        />
      ))}
    </>
  );
};

const nextButton = ({ ...props }) => (
  <Button
    title=<MaterialIcons name="navigate-next" size={24} color="white" />
    buttonStyle={{
      backgroundColor: "#ec4899",
      borderRadius: "50%",
      marginRight: 20,
      padding: 10,
      width: 50,
      height: 50,
    }}
    {...props}
  />
);

const skipButton = ({ ...props }) => (
  <Button
    title={"Skip"}
    buttonStyle={{ backgroundColor: "none", marginLeft: 15 }}
    titleStyle={{ color: "#ec4899", fontWeight: 500, fontSize:18 }}
    {...props}
  />
);
export default function Index() {
  return (
    // <View style={styles.container}>
    //   <Text style={styles.text}>Home screen</Text>
    // </View>
    <Onboarding
      DotComponent={dotComponent}
      NextButtonComponent={nextButton}
      SkipButtonComponent={skipButton}
      bottomBarColor={"white"}
      bottomBarHighlight={false}
      containerStyles={{padding:20}}
      titleStyles={{fontWeight: 600, fontSize: 40, marginBottom: 20}}
      subTitleStyles={{fontWeight:300, fontSize:20}}
      pages={[
        {
          backgroundColor: "#fff",
          image: <Image source={require("../assets/images/logo.png")} />,
          title: "",
          subtitle: "",
        },
        {
          backgroundColor: "#fff",
          image: <Image source={require("../assets/images/onboarding1.png")} />,
          title: "Ôn tập thông minh",
          subtitle:
            "Áp dụng kỹ thuật spaced repeatation giúp việc ôn tập hiệu quả, đưa những từ vựng đi sâu vào bộ nhớ dài hạn của bạn. ",
        },
        {
          backgroundColor: "#fff",
          image: <Image source={require("../assets/images/onboarding2.png")} />,
          title: "Tạo thẻ tự động",
          subtitle: "Tự động tạo thẻ từ vựng giúp tiết kiệm thời gian và công sức, không bỏ lỡ các từ vựng thú vị mà bạn bắt gặp",
        },
        {
          backgroundColor: "#fff",
          image: <Image source={require("../assets/images/onboarding3.png")} />,
          title: "Thông báo ôn tập",
          subtitle: "Nhắc nhở học tập mọi lúc, mọi nơi để bạn không bỏ lỡ những bài học thú vị. ",
        },
      ]}
    />
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#25292e',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     color: '#fff',
//   },
// });
