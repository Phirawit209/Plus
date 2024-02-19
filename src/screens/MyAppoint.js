import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Image, ImageBackground, Platform } from 'react-native';
import { Block, Text, theme } from 'galio-framework';
import { LinearGradient } from 'expo-linear-gradient';

import { Icon } from '../components';
import { Images, materialTheme } from '../constants';
import { HeaderHeight } from "../constants/utils";

const { width, height } = Dimensions.get('screen');
const thumbMeasure = (width - 48 - 32) / 3;

export default class MyAppoint extends React.Component {
    render() {
        return (
            <Block flex style={styles.profile}>
               
{/*

 */}
 <Block flex>
                    <ImageBackground
                        source={require("../assets/images/concepto1.jpg")}
                        style={styles.profileContainer}
                        imageStyle={styles.profileImage}>
                        <Block flex style={styles.profileDetails}>
                            <Block row space="left">

                                <LinearGradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']} style={styles.gradient} />
                            </Block>
                        </Block>
                    </ImageBackground>
                </Block>
                <Block flex style={styles.options1}>
                    <Block row space="lelf" style={{ padding: theme.SIZES.BASE, }}>
                        <Image
                            source={require("../assets/images/schedule1.png")}
                            style={styles.image4}
                        ></Image>
                        <Text size={20} > : จองคิวลวงหน้า</Text>

                    </Block>

                </Block>
                <Block flex style={styles.options}>
                    <ScrollView showsVerticalScrollIndicator={false}>

                        <Block row space="lelf" style={{ padding: theme.SIZES.BASE, }}>
                            <Block>
                                <Text color={theme.COLORS.BASE} bold size={18} style={{ marginBottom: 10 }}>
                                    <Icon name="calendar" family="font-awesome" color={theme.COLORS.BASE} size={20} />
                                    {` `} 12 ธ.ค. 2563 เวลา 10.00 น.
                                 </Text>
                                <Block>
                                    <Text size={18} >
                                        เลขที่นัดหมาย : 20201212-0981{"\n"}ชื่อ : นางสมหญิง ศรีสมร{"\n"}
                                   ผู้ป่วยนอก : ลมพิษ
                                    </Text>
                                </Block>
                            </Block>
                        </Block>

                    </ScrollView>
                </Block>

       

            </Block>


        );
    }
}

const styles = StyleSheet.create({
    profile: {
        marginTop: Platform.OS === 'android' ? -HeaderHeight : 0,
        marginBottom: -HeaderHeight * 2,
    },
    profileImage: {
        width: width * 1.0,
        height: 'auto',
    },
    profileContainer: {
        width: width,
        height: height / 2.8,
    },
    profileDetails: {
        paddingTop: theme.SIZES.BASE * 4,
        justifyContent: 'flex-end',
        position: 'relative',
    },
    profileTexts: {
        paddingHorizontal: theme.SIZES.BASE * 2,
        paddingVertical: theme.SIZES.BASE * 2,
        zIndex: 2
    },
    options1: {
        backgroundColor: "rgba(71,201,250,1)",
        padding: theme.SIZES.BASE,
        // marginHorizontal: theme.SIZES.BASE,
        marginTop: -theme.SIZES.BASE * 15,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        shadowOffset: { width: 0, height: 20 },
        //shadowRadius: 8,
    },
    pro: {
        backgroundColor: materialTheme.COLORS.LABEL,
        paddingHorizontal: 6,
        marginRight: theme.SIZES.BASE / 2,
        borderRadius: 4,
        height: 19,
        width: 38,
    },
    seller: {
        marginRight: theme.SIZES.BASE / 2,
    },
    options: {
        position: 'relative',
        padding: theme.SIZES.BASE,
        // marginHorizontal: theme.SIZES.BASE,
        marginTop: -theme.SIZES.BASE * 26,
        //  borderTopLeftRadius: 20,
        //  borderTopRightRadius: 20,
        backgroundColor: theme.COLORS.WHITE,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 20 },
        shadowRadius: 8,
        shadowOpacity: 0.2,
        zIndex: 2,
    },

    thumb: {
        borderRadius: 4,
        marginVertical: 4,
        alignSelf: 'center',
        width: thumbMeasure,
        height: thumbMeasure
    },
    gradient: {
        zIndex: 1,
        left: 0,
        right: 0,
        bottom: 0,
        height: '30%',
        position: 'absolute',
    },
    image4: {
        width: 42,
        height: 35
    },
    image2: {
        width: 289,
        height: 203
    },

    rect: {
        top: 233,
        width: 375,
        height: 554,
        position: "absolute",
        backgroundColor: "rgba(255,255,255,1)",
        left: 148
    },
    loremIpsum: {
        fontFamily: "roboto-regular",
        color: "rgba(0,0,0,1)",
        fontSize: 18,
        marginTop: 7,
        marginLeft: 36
    },
});
