import {Platform} from 'react-native';
export default [
  {
    title: 'พบแพทย์',
    image: '../assets/images/feature-appointment.jpg',
    source: require("../assets/images/feature-appointment.jpg"),
    navigate: 'Tele2'
    //navigate: Platform.OS === 'android' ? 'AppointUploadAndroid' : 'AppointUpload' 
  },
  {
      title: 'รับยาเดิม',
      source: require("../assets/images/feature-service.jpg"),
      price: 40,
      navigate: 'Tele2'
  },
  {
      title: 'คลินิกทั่วไป',
      source: require("../assets/images/feature-service.jpg"),
      price: 40,
      navigate: 'AppointCalendar'
  },
  {
      title: 'คลินิกพิเศษเฉพาะทางนอกเวลาราชการ (SMC)',
      source: require("../assets/images/feature-service.jpg"),
      price: 40,
      navigate: 'AppointCalendar'
  }

];
