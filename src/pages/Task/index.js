import React from 'react';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {
  TaskContainer,
  TaskTitleContainer,
  TaskTitle,
  TaskContent,
  TaskDescription,
  TaskBackContent,
  TaskBack,
  TaskBackTitle,
  TaskTime,
  TaskTimeDescribe,
  TaskFinish,
  TaskFinishTitle,
} from './styles';

const Task = ({navigation}) => {
  const finished = true;

  return (
    <TaskContainer>
      <ParallaxScrollView
        showsVerticalScrollIndicator={false}
        backgroundColor="#3c4556"
        contentBackgroundColor="#fff"
        parallaxHeaderHeight={200}
        renderBackground={() => (
          <TaskTitleContainer>
            <AntDesign name="flag" size={36} color="#fff" />
            <TaskTitle>Jogar bola com o pietro</TaskTitle>
          </TaskTitleContainer>
        )}>
        <TaskContent>
          <TaskBackContent>
            <TaskBack
              underlayColor="#333"
              onPress={() => {
                navigation.goBack();
              }}>
              <>
                <MaterialIcons name="arrow-back" size={32} color="#fff" />
                <TaskBackTitle>VOLTAR</TaskBackTitle>
              </>
            </TaskBack>
          </TaskBackContent>
          <TaskTime>
            <Entypo name="clock" size={32} color="#666" />
            <TaskTimeDescribe>3 dias atrás</TaskTimeDescribe>
          </TaskTime>
          <TaskDescription>
            Aqui vem a descrição. Aqui vem a descrição. Aqui vem a descrição.
            Aqui vem a descrição. Aqui vem a descrição. Aqui vem a descrição.
            Aqui vem a descrição. Aqui vem a descrição. Aqui vem a descrição.
            Aqui vem a descrição. Aqui vem a descrição. Aqui vem a descrição.
          </TaskDescription>

          <TaskFinish activeOpacity={0.5} onPress={() => {}}>
            <>
              <MaterialIcons
                name={finished ? 'check-circle' : 'radio-button-unchecked'}
                size={36}
                color="#f5f5f5"
              />
              <TaskFinishTitle>FINALIZAR</TaskFinishTitle>
            </>
          </TaskFinish>
        </TaskContent>
      </ParallaxScrollView>
    </TaskContainer>
  );
};

Task.navigationOptions = {
  header: null,
};

export default Task;
