import React, { useState, useEffect, useRef } from "react";
import { Text, View, StyleSheet, TouchableOpacity, AppState } from "react-native";
import { Camera, useCameraDevice, useCameraPermission ,useCameraFormat,useFrameProcessor} from "react-native-vision-camera";
import {detectObjects} from "react-native-worklets-core";
import { useIsFocused } from "@react-navigation/native";
function CaptionGenerator() {
  const { hasPermission, requestPermission } = useCameraPermission();
  const [isActive, setIsActive] = useState(true);
  const isFocused = useIsFocused();
  const device = useCameraDevice('back');
  // format
  const format = useCameraFormat(device, [
    {videoResolution: {width: 3840,height: 2160}},
    {fps: 60},
  ])
  const camera = useRef(null);
  // taking photo
  const HandleCamera = async () => {
    if (camera.current){
      try{
        const photo = await camera.current.takePhoto({
          flash: 'off',
          qualityPrioritization : 'speed',
        });
      }
      catch{}

    }
  }
  // thay doi trang thai hoac mat focus
  useEffect(() => {
    const handleAppStateChange = (nextAppState) => {
      if (!isFocused || nextAppState !== 'active') {
        setIsActive(false);
      } else {
        setIsActive(true);
      }
    };
    const subscription = AppState.addEventListener('change', handleAppStateChange);
    return () => {
      subscription.remove();
    };
  }, [isFocused,AppState.currentState]);
  const checkPermission = async() => {
    const newCameraPermission = await Camera.requestCameraPermission();
  }
  useEffect(() => {
    checkPermission();
  }, []);
  // frame processor
  const frameProcessor = useFrameProcessor((frame) => {
    'worklet'
    const objects = detectObjects(frame)
    console.log(`Detected ${objects.length} objects.`)
  }, [])
  return (
    <View style={styles.container}>
      <Camera 
      // frameProcessor={frameProcessor}
      photo = {true}
      ref = {camera}
      style={styles.camera} 
      device={device} 
      isActive={true}
      format={format}
      />
      <TouchableOpacity onPress = {() => HandleCamera}style={styles.captureButton}>
        <Text style={styles.captureButtonText}>Capture</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  camera: {
    height: '85%',
    width: '100%',
  },
  captureButton: {
    height: '15%',
    width: '100%',
    backgroundColor: 'red',
    // borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  captureButtonText: {
    fontSize : 40,
    color: 'white',
    fontWeight: 'bold',    
  },
});
export default CaptionGenerator;