import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import styles from './RegisterSliderStyle';

function RegisterSlider({navigation}) {
  const [showRealApp, setshowRealApp] = useState(false);

  const onDone = () => {
    setshowRealApp(true);
  };

  // const onSkip = () => {
  //   setshowRealApp(true);
  // };

  const renderItem = ({item}) => {
    return (
      <View style={[styles.slide]}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
        {item.key == 6 && (
          <View style={styles.paginationContainer}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('UserRegisterScreen')}>
                <Text style={styles.buttonText}>Kullanıcıyım</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('DieticianRegisterScreen')}>
                <Text style={styles.buttonText}>Diyetisyenim</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    );
  };

  return showRealApp ? (
    <RegisterSlider />
  ) : (
    <AppIntroSlider
      activeDotStyle={styles.activeDot}
      dotStyle={styles.dot}
      renderItem={renderItem}
      data={slides}
      onDone={onDone}
    />
  );
}
export default RegisterSlider;

const slides = [
  {
    key: 1,
    title: 'Fast and Healthy’e Hoşgeldin!',
    text: 'Artık yeni hayatına bir adım daha yakınsın. Vakit kaybetmeden başlayalım?',
    image: require('../../../assets/images/sliderImages/first.png'),
    bg: 'white',
  },
  {
    key: 2,
    title: 'Artırılmış Gerçeklikle Spor',
    text: 'Fast and Healthy artırılmış gerçeklikle yep yeni bir spor deneyimi sunuyor. Spor yapmak hiç bu kadar eğlenceli olmamıştı... Devam etmek için kullanıcı türünü seçelim:',
    image: require('../../../assets/images/sliderImages/second.png'),
    bg: 'white',
  },
  {
    key: 3,
    title: 'Sizi Profesyonellerle Buluşturuyoruz',
    text: 'Fast and Healthy’de dilediğin zaman profesyonel destek alabilirsin. Hemde tek tık ile! Kayıt olmaya devam etmek için e-posta adresini ve kullanıcı adını belirleyelim:',
    image: require('../../../assets/images/sliderImages/third.png'),
    bg: 'white',
  },
  {
    key: 4,
    title: 'Liderlik Tablosunda Yerin Hazır',
    text: 'Fast and Healthy seni bölgesel olarak diğer kullanıcılarla yarışıp ödüller kazanacağın puanlama sistemine sahiptir. Son olarak şifreni belirleyelim ve oturduğun yeri seçelim. Artık hazırsın!',
    image: require('../../../assets/images/sliderImages/fourth.png'),
    bg: 'white',
  },
  {
    key: 5,
    title: 'Sizi Her Şehirden Kullanıcılarla Buluşturuyoruz!',
    text: 'Fast and Healthy ile farklı şehirlerdeki kullanıcılarla buluşabilirsiniz. Ayrıca çalıştığınız bölgede de öne çıkıp kendinizi ücretsiz bir şekilde tanıtabilirsiniz.',
    image: require('../../../assets/images/sliderImages/fifth.png'),
    bg: 'white',
  },
  {
    key: 6,
    title: 'Danışmanlarınıza Kolayca Görev Gönderin!',
    text: 'Fast and Healthy ile size danışan kullanıcılara kolayca görev gönderebilirsiniz. Gönderdiğiniz görevleri tamamladığında hem danışanınız hem siz puan kazanırsınız. Bu keşfedilme şansınızı arttırır. ',
    image: require('../../../assets/images/sliderImages/sixth.png'),
    bg: 'white',
  },
];

// type Item = (typeof slides)[0];

// export default class RegisterSlider extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showRealApp: false,
//     };
//   }

//   _renderItem = ({item, navigation}) => {
//     console.log('item', item);

//     function navigateToPage() {
//       item.navigation.navigate('DieticianRegisterScreen');
//     }

//     return (
// <View
// style={[
//   styles.slide,
//   {
//     backgroundColor: item.bg,
//   },
// ]}>
//   <Image source={item.image} style={styles.image} />
//   <Text style={styles.title}>{item.title}</Text>
//   <Text style={styles.text}>{item.text}</Text>
//   {item.key == 6 && (
//     <View style={styles.paginationContainer}>
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity style={styles.button}>
//           <Text
//             style={styles.buttonText}
//             onPress={() =>
//               navigation.navigate('DieticianRegisterScreen')
//             }>
//             Kullanıcıyım
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.button} onPress={navigateToPage}>
//           <Text style={styles.buttonText}>Diyetisyenim</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   )}
// </View>
//     );
//   };
//   _keyExtractor = (item: Item) => item.title;
//   _onDone = () => {
//     // User finished the introduction. Show real app through
//     // navigation or simply by controlling state
//     this.setState({showRealApp: true});
//   };
//   _onSkip = () => {
//     // User finished the introduction. Show real app through
//     // navigation or simply by controlling state
//     this.setState({showRealApp: true});
//   };
// render() {
// if (this.state.showRealApp) {
//   return <RegisterSlider />;
// } else {
//   return (
//     <AppIntroSlider
//       activeDotStyle={styles.activeDot}
//       dotStyle={styles.dot}
//       renderItem={this._renderItem}
//       data={data}
//       onDone={this._onDone}
//     />
//   );
//   }
// }
// }
