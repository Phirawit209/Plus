import {Platform} from 'react-native';
export default [
  {
    title: 'จองคิววันนี้',
    image: '../assets/images/feature-appointment.jpg',
    source: require("../assets/images/feature-appointment.jpg"),
        navigate: Platform.OS === 'android' ? 'AppointUploadAndroid' : 'AppointUpload' 
  },
  {
      title: 'นัดล่วงหน้า',
      source: require("../assets/images/feature-service.jpg"),
      price: 40,
      navigate: 'Appoint2'
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
