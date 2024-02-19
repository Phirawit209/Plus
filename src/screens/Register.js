import React, { Component, useState,useEffect } from "react";
import { Radio } from 'galio-framework';

import {
    StyleSheet,
    View,
    StatusBar,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    Text,
    Image,
} from "react-native";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import axios from 'axios';
import deviceStorage from '../helpers/deviceStorage'

const Register = (props) => {
    const navigation = props.navigation;
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const [Name, setName] = useState('');
    const [Birthday, setBirthday] = useState('');
    const [Religion, setReligion] = useState('');
    const [Address, setAddress] = useState('');
    const [Status, setStatus]= useState('');

    React.useEffect(() => {
        
    }, []);

    const handleRegister = () => {
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
        
        const data = {
            email:Username,
            password:Password,
            name:Name,
            birthday:Birthday,
            religion:Religion,
            address:Address,
            status:Status,
        }
/*
        axios.post("http://telemed.trangskin.go.th:5001/api/v1/identity/login", data, {
                headers: headers
              })
            .then((response) => {
            //deviceStorage.saveKey("token", response.data.jwt);
            console.log(esponse.data.jwt)
            //this.props.newJWT(response.data.jwt);
        })

        */

    var postData = {
        email: Username,
        password: Password,
        name: Name,
        birthday: Birthday,
        religion: Religion,
        address: Address,
        status:Status,
      };
      
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };
        
        axios.post('https://telemed.trangskin.go.th:5001/api/v1/identity/login', postData, axiosConfig)
        .then((response) => {
            console.log(response.data)
            
            deviceStorage.saveItem("currentUser", response.data);

            //deviceStorage.saveItem("token", response.data.token);
            //deviceStorage.saveItem("refreshToken", response.data.refreshToken);
            //deviceStorage.saveItem("fullName", response.data.fullName);

            navigation.navigate('Home'); 
        })
        .catch((err) => {
            console.log("AXIOS ERROR: ", err);
        })
    }

    return (

<>
           <View style={styles.root}>
            <StatusBar barStyle="light-content" backgroundColor="rgba(0,0,0,0)" />
            <View style={styles.background}>
                <ImageBackground
                    style={styles.rect}
                    imageStyle={styles.rect_imageStyle}
                    source={require("../assets/images/Gradient_pQrQkkD.png")}

>
                    <View style={styles.formStackStack}>
                        <View style={styles.formStack}>
                            <View style={styles.form}>
                                <View style={styles.usernameColumn}>
                                    <View style={styles.username}>
                                        <EvilIconsIcon
                                            name="user"
                                            style={styles.icon2}
                                        ></EvilIconsIcon>


                                        <TextInput
                                            placeholder="Username"
                                            placeholderTextColor="rgba(255,255,255,1)"
                                            secureTextEntry={false}
                                            style={styles.usernameInput}
                                            onChangeText={e => setUsername(e)}
                                            value={Username}
                                        ></TextInput>


                                    </View>
                                    <View style={styles.password}>
                                        <EvilIconsIcon
                                            name="lock"
                                            style={styles.icon2}
                                        ></EvilIconsIcon>
                                        <TextInput
                                            placeholder="Password"
                                            placeholderTextColor="rgba(255,255,255,1)"
                                            secureTextEntry={false}
                                            style={styles.passwordInput}
                                            onChangeText={e => setPassword(e)} 
                                            value={Password}
                                        ></TextInput>


                                </View>
                                    <View style={styles.password}>
                                        <EvilIconsIcon
                                            name="user"
                                            style={styles.icon2}
                                        ></EvilIconsIcon>
                                        <TextInput
                                            placeholder="Name"
                                            placeholderTextColor="rgba(255,255,255,1)"
                                            secureTextEntry={false}
                                            style={styles.nameInput}
                                            onChangeText={e => setName(e)} 
                                            value={Name}
                                        ></TextInput>

                                </View>
                                    <View style={styles.password}>
                                        <EvilIconsIcon
                                            name="user"
                                            style={styles.icon2}
                                        ></EvilIconsIcon>
                                        <TextInput
                                            placeholder="Birthday"
                                            placeholderTextColor="rgba(255,255,255,1)"
                                            secureTextEntry={false}
                                            style={styles.birthdayInput}
                                            onChangeText={e => setBirthday(e)} 
                                            value={Birthday}
                                        ></TextInput>


                                </View>
                                    <View style={styles.password}>
                                        <EvilIconsIcon
                                            name="user"
                                            style={styles.icon2}
                                        ></EvilIconsIcon>
                                        <TextInput
                                            placeholder="Religion"
                                            placeholderTextColor="rgba(255,255,255,1)"
                                            secureTextEntry={false}
                                            style={styles.religionInput}
                                            onChangeText={e => setBirthday(e)} 
                                            value={Religion}
                                        ></TextInput>
                                        

                                 </View>
                                    <View style={styles.password}>
                                        <EvilIconsIcon
                                            name="user"
                                            style={styles.icon2}
                                        ></EvilIconsIcon>
                                        <TextInput
                                            placeholder="Address"
                                            placeholderTextColor="rgba(255,255,255,1)"
                                            secureTextEntry={false}
                                            style={styles.addressInput}
                                            onChangeText={e => setAddress(e)} 
                                            value={Address}
                                        ></TextInput>


                                </View>
                                    <View style={styles.password}>
                                        <EvilIconsIcon
                                            name="user"
                                            style={styles.icon2}
                                        ></EvilIconsIcon>
                                        <TextInput
                                            placeholder="Status"
                                            placeholderTextColor="rgba(255,255,255,1)"
                                            secureTextEntry={false}
                                            style={styles.statusInput}
                                            onChangeText={e => setStatus(e)} 
                                            value={Status}
                                        ></TextInput>
                                    </View>
                                </View>
                                <View style={styles.usernameColumnFiller}></View>
                                <TouchableOpacity
                                    onPress={() => handleRegister()}
                                    style={styles.button}
                                >
                                    <Text style={styles.text2}>ลงทะเบียน</Text>
                                </TouchableOpacity>
                            </View>
                            <Image
                                source={require("../assets/images/logo.png")}
                                resizeMode="contain"
                                style={styles.image}
                            ></Image>
                        </View>
                        <View style={styles.logo}></View>
                    </View>
                    <View style={styles.formStackStackFiller}></View>
                    <View style={styles.footerTexts}>
                        <TouchableOpacity
                            onPress={() => handleLogin()}
                            style={styles.button2}
                        >
                            <View style={styles.createAccountFiller}></View>
                            <Text style={styles.createAccount}>Create Account</Text>
                        </TouchableOpacity>
                        <View style={styles.button2Filler}></View>
                        <Text style={styles.needHelp}>Need Help?</Text>
                    </View>
                </ImageBackground>
            </View>
        </View>

        </>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: "rgb(255,255,255)"
    },
    background: {
        flex: 1
    },
    rect: {
        flex: 1
    },
    rect_imageStyle: {},
    form: {
        top: 267,
        left: 0,
        height: 230,
        position: "absolute",
        right: 0
    },
    username: {
        height: 59,
        backgroundColor: "rgba(251,247,247,0.25)",
        borderRadius: 5,
        flexDirection: "row"
    },
    icon22: {
        color: "rgba(255,255,255,1)",
        fontSize: 30,
        marginLeft: 20,
        alignSelf: "center"
    },
    usernameInput: {
        height: 30,
        color: "rgba(255,255,255,1)",
        flex: 1,
        marginRight: 11,
        marginLeft: 11,
        marginTop: 14
    },
    password: {
        height: 59,
        backgroundColor: "rgba(253,251,251,0.25)",
        borderRadius: 5,
        flexDirection: "row",
        marginTop: 27
    },
    icon2: {
        color: "rgba(255,255,255,1)",
        fontSize: 33,
        marginLeft: 20,
        alignSelf: "center"
    },
    passwordInput: {
        height: 30,
        color: "rgba(255,255,255,1)",
        flex: 1,
        marginRight: 17,
        marginLeft: 8,
        marginTop: 14
    },
    usernameColumn: {},
    usernameColumnFiller: {
        flex: 1
    },
    button: {
        height: 59,
        backgroundColor: "rgba(31,178,204,1)",
        borderRadius: 5,
        justifyContent: "center"
    },
    text2: {
        color: "rgba(255,255,255,1)",
        alignSelf: "center"
    },
    image: {
        top: 0,
        left: 0,
        width: 278,
        height: 278,
        position: "absolute"
    },
    formStack: {
        top: 0,
        left: 0,
        height: 497,
        position: "absolute",
        right: 0
    },
    logo: {
        top: 97,
        width: 102,
        height: 111,
        position: "absolute",
        left: 88
    },
    formStackStack: {
        height: 497,
        marginTop: 33,
        marginLeft: 41,
        marginRight: 41
    },
    formStackStackFiller: {
        flex: 1
    },
    footerTexts: {
        height: 14,
        flexDirection: "row",
        marginBottom: 36,
        marginLeft: 37,
        marginRight: 36
    },
    button2: {
        width: 104,
        height: 14,
        alignSelf: "flex-end"
    },
    createAccountFiller: {
        flex: 1
    },
    createAccount: {
        color: "rgba(255,255,255,0.5)"
    },
    button2Filler: {
        flex: 1,
        flexDirection: "row"
    },
    needHelp: {
        color: "rgba(255,255,255,0.5)",
        alignSelf: "flex-end",
        marginRight: -1
    }
});

export default Register;