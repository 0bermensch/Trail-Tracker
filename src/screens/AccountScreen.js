import React, {useContext} from "react";
import { StyleSheet, Text, View } from "react-native";
import {Button} from 'react-native-elements';
import {SafeAreaView} from 'react-navigation'
import Spacer from '../components/Spacer';
import {Context as AuthContext } from '../context/AuthContext';

const AccountScreen = () => {
  const {signout} = useContext(AuthContext) 

  return (
    <SafeAreaView forceInset={{top: 'always'}}>
      <Text style={{ fontSize: 48 }}>Title</Text>
      <Spacer>
        <Button title="Sign Out" onPress={signout}/>
        </Spacer>
      
    </SafeAreaView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({});
