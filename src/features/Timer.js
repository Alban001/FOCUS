import React, { useState } from 'react';
import {View, StyleSheet, Text, Vibration} from 'react-native';
import { ProgressBar } from 'react-native-paper';
import {CountDown} from '../components/CountDown.js';
import {RoundedButton} from '../components/RoundedButton';
import {colors} from '../utils/colors'
import {Spacing} from '../utils/sizes';
import {Timing} from './Timing'
import { useKeepAwake } from 'expo-keep-awake';

const ONE_SECOND_IN_MS = 1000;

  const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
  ];

export const Timer =({focusSubject, clearSubject, onTimerEnd})=> {
      useKeepAwake();
      const [isStarted, setIsStarted] =useState(false)
      const [progress, setProgress] =useState(1)
      const [minutes, setMinutes] = useState(0.1)

  const onEnd =(reset)=>{
        Vibration.vibrate(PATTERN)
        setIsStarted(false)
        setProgress(1)
        reset()
        onTimerEnd(focusSubject)
}
      return(
        <View style={styles.container}>
         <View style={styles.countDown}>
            <CountDown 
            minutes={minutes}
            isPaused={!isStarted}
            onProgress={(progress)=>{setProgress(progress)}}
            onEnd={onEnd}/>
         </View>
         <View style={{paddingTop: Spacing.xxl, alignItems:'center' }}>
              <Text style={styles.title}>Focus on: </Text>
              <Text style={styles.task}>{focusSubject}</Text>
         </View> 
        
        <View style={styles.progressbar}>
              <ProgressBar progress={progress} style={{height:8}}/>
        </View>
        <View style={styles.buttonWrapper}>
              <Timing onChangeTime={setMinutes}/>
         </View>
        <View style={styles.buttonWrapper}>

        {!isStarted && ( <RoundedButton title='start' onPress={()=> setIsStarted(true)} />)}
        {isStarted && ( <RoundedButton title='pause' onPress={()=> setIsStarted(false)} />)}
           
         </View>
         <View style={styles.buttonWrapper}>
              <RoundedButton size={50} title='-' onPress={clearSubject} />
         </View>
      </View>
      )
}
      



const styles= StyleSheet.create({
  container:{
    flex:1,
  },
  countDown:{
    fex:0.4,
    justifyContent:'center',
    alignItems:'center',
    marginTop:100,
  },
  buttonWrapper:{
    flex:0.4,
    flexDirection:'row',
    paddingTop:60,
    padding:30,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:colors.darkPurple,
   
  },
  title:{
    color: colors.white,
    fontWeight: 'bold',
    fontSize: Spacing.lg
  },
  task:{
    color: colors.white,
    fontWeight:'normal',
     fontSize: Spacing.lg,
  },
  progressbar:{
    backgroundColor:'yellow',
    marginTop:50,
  }
})