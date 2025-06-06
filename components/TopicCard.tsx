import { View, Text, StyleSheet } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useRouter } from "expo-router";
interface Props {
  id: number;
  title: string;
  description: string;
  color: string;
}

export default function TopicCard({ id, title, description, color }: Props) {
  const router = useRouter();
  return (
    <View style={{ ...styles.container, backgroundColor: color }}>
      <View style={styles.contentWrapper}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={{ fontSize: 18 }}>Ôn tập</Text>
      </View>
      <View style={{ width: 100 }}>
        <View style={styles.buttonWrapper}>
          <View
            style={{
              backgroundColor: "rgba(255,255,255,0.4)",
              width: 50,
              height: 100,
              position: "absolute",
              borderTopRightRadius: 20,
              top: 0,
              right: 0,
            }}
          />
          <View
            style={{
              backgroundColor: "rgba(255,255,255,0.4)",
              width: 100,
              height: 60,
              position: "absolute",
              borderTopRightRadius: 20,
              top: 0,
              right: 0,
            }}
          />
          <MaterialCommunityIcons
            onPress={() => router.replace(`/(tabs)/study/${id}`)}
            name="arrow-right-box"
            size={40}
            color="black"
            style={{ position: "absolute", bottom: 15, right: 20 }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
    borderRadius: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 22,
    fontWeight: 400,
  },
  description: {
    fontSize: 18,
    fontWeight: 300,
  },
  contentWrapper: {
    width: 200,
    height: 300,
    display: "flex",
    justifyContent: "space-between",
    padding: 20,
  },
  buttonWrapper: {
    flex: 1,
    position: "relative",
  },
});
