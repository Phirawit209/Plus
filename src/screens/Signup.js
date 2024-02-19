import React, {useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { View, TouchableOpacity } from "react-native";

// Formik
import { Formik } from "formik";
// Icons
import { Octicons } from '@expo/vector-icons';
// Datetimepicker
import DateTimePicker from '@react-native-community/datetimepicker';
// Keyboard avoiding view
import KeyboardAvoidingWrapper from "./../components/KeyboardAvoidingWrapper";

import {
    StyledContainer,
    InnerContainer,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    StyledInputLabel,
    StyledButton,
    ButtonText,
    Colors,
    PageLogo,
} from "../constants/styles";

import { TextInput } from "react-native-gesture-handler";

// Colors
const { LightGray} = Colors;

const Signup = ({navigation}) => {

    const [show, setShow] = useState(false);
    const [date, setDate] = useState(new Date(2024, 0, 1));
    
    // Actual Date of Birth
    const [dob, setDob] = useState();

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        // console.log(currentDate);
        setShow(false);
        setDate(currentDate);
        setDob(currentDate);
    }

    const showDatePicker = () => {
        setShow(true);
    }

    return (
        <KeyboardAvoidingWrapper>
        <StyledContainer>
          <StatusBar style="dark" />
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('../../assets/images/skinlogo.jpg')} /> 
                <SubTitle> สมัครสมาชิก </SubTitle>
                
        {show && (
            <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode='date'
                is24Hour={true}
                display="default"
                onChange={onChange}
            />
                )}

                <Formik
                    initialValues={{
                                    firstname: '',
                                    lastname: '',
                                    id_card: '',
                                    phone: '',
                                    dateofBirth: '',
                                }}
                    onSubmit={(values) => {
                        console.log(values);
                        navigation.navigate('Welcome');
                    }}>

                    {({ handleChange, handleBlur, handleSubmit, values }) =>(

                    <StyledFormArea>
                        {/* Text input ของ ชื่อ */}
                        <WordTextInput 
                            label="ชื่อ"
                            icon="person"
                            value={values.firstname}
                            onChangeText={handleChange('firstname')}
                        />

                        {/* Text input ของ นามสกุล */}
                        <WordTextInput 
                            label="นามสกุล"
                            icon="person"
                            value={values.lastname}
                            onChangeText={handleChange('lastname')}
                            placeholder="ทดสอบโง่ๆ"
                        />

                        {/* Text input ของ บัตรประชาชน */}
                        <NumberIDTextInput
                            label="บัตรประชาชน"
                            icon="credit-card"
                            value={values.id_card}
                            onChangeText={handleChange('id_card')}
                        />

                        {/* Text input ของ เบอร์โทรศัพท์ */}
                        <NumberTextInput 
                            label="เบอร์โทรศัพท์"
                            icon="megaphone"
                            value={values.phone}
                            onChangeText={handleChange('phone')}
                        />

                        {/* Text input ของ วันเดือนปีเกิด */}
                        <DateTextInput 
                            label="วัน/เดือน/ปี เกิด"
                            icon="calendar"
                            value={dob ? dob.toDateString(): ''}
                            onChangeText={handleChange('dateofBirth')}
                            onBlur={handleBlur('dateofBirth')}
                            showDatePicker={showDatePicker}
                        />

                    <StyledButton onPress={handleSubmit}>
                    <ButtonText>สมัครสมาชิก</ButtonText>
                    </StyledButton>
                    </StyledFormArea>
                    )}
                </Formik>
                </InnerContainer>
        </StyledContainer>
        </KeyboardAvoidingWrapper>
    );
};

// Text input ใช้ Name
const WordTextInput = ({icon, label, value, onChangeText})=>{
    return(
        <View>
            <LeftIcon>
            <Octicons name={icon} size={20} color="black" />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
                <TextInput 
                    value={value}
                    placeholder="กรุณากรอกข้อมูล"
                    onChangeText={onChangeText}
                    style={{
                        paddingRight:40,
                        paddingLeft:40,
                        fontSize:18,
                        height:50,
                        marginVertical:3,
                        marginBottom:15,
                        backgroundColor:LightGray,
                        opacity:0.5,
                    }}
                    keyboardType="email-address"
                />
        </View>
    )
}

// Text input ใช้ Number
const DateTextInput = ({icon, label, value, onChangeText, showDatePicker})=>{
    return(
        <View>
            <LeftIcon>
            <Octicons name={icon} size={20} color="black"/>
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
                <TouchableOpacity onPress={showDatePicker}>
                    <TextInput 
                        value={value}
                        placeholder="วัน เดือน ปี"
                        onChangeText={onChangeText}
                        style={{
                            paddingRight:40,
                            paddingLeft:40,
                            fontSize:18,
                            height:50,
                            marginVertical:3,
                            marginBottom:15,
                            backgroundColor:LightGray,
                            opacity:0.5,
                        }}
                        editable = {false}
                    />
                </TouchableOpacity>
                
        </View>
    )
}

// Text input ใช้ กรอกเบอร์โทรศัพท์
const NumberTextInput = ({icon, label, value, onChangeText, showDatePicker})=>{
    return(
        <View>
            <LeftIcon>
            <Octicons name={icon} size={20} color="black"/>
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
                <TextInput 
                    value={value}
                    placeholder="กรอกเบอร์โทรศัพท์"
                    onChangeText={onChangeText}
                    style={{
                        paddingRight:40,
                        paddingLeft:40,
                        fontSize:18,
                        height:50,
                        marginVertical:3,
                        marginBottom:15,
                        backgroundColor:LightGray,
                        opacity:0.5,
                    }}
                    keyboardType="number-pad"
                    maxLength={10}
                />
        </View>
    )
}

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
    return (<View>
            <LeftIcon>
                <Octicons name={icon} size={24} color="black" />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} />
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={20} color={darkLight} />
                </RightIcon>
            )}
        </View>
    )
}

// Text input ใช้ กรอกเลขบัตรประชาชน
const NumberIDTextInput = ({icon, label, value, onChangeText, showDatePicker})=>{
    return(
        <View>
            <LeftIcon>
            <Octicons name={icon} size={20} color="black"/>
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
                <TextInput 
                    value={value}
                    placeholder="กรอกเลขบัตรประชาชน"
                    onChangeText={onChangeText}
                    style={{
                        paddingRight:40,
                        paddingLeft:40,
                        fontSize:18,
                        height:50,
                        marginVertical:3,
                        marginBottom:15,
                        backgroundColor:LightGray,
                        opacity:0.5,
                    }}
                    keyboardType="number-pad"
                    maxLength={13}
                />
        </View>
    )
}

export default Signup;