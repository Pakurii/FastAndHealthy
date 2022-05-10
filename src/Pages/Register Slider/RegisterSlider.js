import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import styles from './RegisterSliderStyle';

const data = [
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
type Item = (typeof data)[0];

export default class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     showRealApp: false,
  //   };
  // }
  slider: AppIntroSlider | undefined;
  _renderItem = ({item}: {item: Item}) => {
    return (
      <View
        style={[
          styles.slide,
          {
            backgroundColor: item.bg,
          },
        ]}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };
  _keyExtractor = (item: Item) => item.title;

  // _renderNextButton = () => {
  //   return (
  //     <View style={styles.buttonCircle}>
  //       <Text>Geç</Text>
  //     </View>
  //   );
  // };
  // _renderDoneButton = () => {
  //   return (
  //     <View style={styles.buttonCircle}>
  //       <Text>Bitti</Text>
  //     </View>
  //   );
  // };

  // _onDone = () => {
  //   // User finished the introduction. Show real app through
  //   // navigation or simply by controlling state
  //   this.setState({showRealApp: true});
  // };
  _renderPagination = (activeIndex: number) => {
    return (
      <View style={styles.paginationContainer}>
        <SafeAreaView>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Kullanıcıyım</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Danışılan Kişiyim</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.paginationDots}>
            {data.length > 1 &&
              data.map((_, i) => (
                <TouchableOpacity
                  key={i}
                  style={[
                    styles.dot,
                    i === activeIndex
                      ? {backgroundColor: '#116ED8'}
                      : {backgroundColor: 'rgba(0, 0, 0, .2)'},
                  ]}
                  onPress={() => this.slider?.goToSlide(i, true)}
                />
              ))}
          </View>
        </SafeAreaView>
      </View>
    );
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar translucent backgroundColor="transparent" />
        <AppIntroSlider
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          renderPagination={this._renderPagination}
          data={data}
        />
      </View>
    );
    // render() {
    //   if (this.state.showRealApp) {
    //     return <App />;
    //   } else {
    //     return (
    //       <AppIntroSlider
    //         renderItem={this._renderItem}
    //         data={slides}
    //         onDone={this._onDone}
    //       />
    //     );
    //   }
  }
}
