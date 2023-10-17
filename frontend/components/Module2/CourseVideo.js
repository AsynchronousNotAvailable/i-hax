import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Video } from "expo-av";


function CourseVideo() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    // <View style={{ flex: 1 }}>
    //   {/* Upper Part: Video */}
    //   <View >
      

    // </View>
    //   {/* Lower Part: Vertical Progress Bar */}
    //   <View style={{ flex: 0.3, backgroundColor: "lightgray" }}>
    //     <View style={{ flex: 1, justifyContent: "space-between", padding: 10 }}>
    //       {/* Checkpoint 1 */}
    //       <View style={{ flexDirection: "row", alignItems: "center" }}>
    //         <Text style={{ marginRight: 10 }}>00:00</Text>
    //         <View style={{ height: 10, width: 10, backgroundColor: "red" }} />
    //       </View>

    //       {/* Checkpoint 2 */}
    //       <View style={{ flexDirection: "row", alignItems: "center" }}>
    //         <Text style={{ marginRight: 10 }}>02:30</Text>
    //         <View style={{ height: 10, width: 10, backgroundColor: "red" }} />
    //       </View>

    //       {/* Add more checkpoints as needed */}
    //     </View>
    //   </View>
    // </View>

    <Video
  source={require("../../assets/video.mp4")}
  style={{ flex: 1 }}
  resizeMode="contain"
  useNativeControls
  onPlaybackStatusUpdate={(status) => setStatus(() => status)}
/>
  );
}

export default CourseVideo;

const styles = StyleSheet.create({

})