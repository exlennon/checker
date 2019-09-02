import React, {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import {Animated, Easing, ActivityIndicator} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {
  TaskCreateContainer,
  TaskCreateContentArea,
  TaskCreateDismissAnimation,
  TaskCreateDismiss,
  TaskCreateDismissButtonAnimation,
  TaskCreateDismissButton,
  TaskCreateBackgroundTop,
  TaskCreateBackgroundBottom,
  TaskCreateContentAreaAnimation,
  TaskCreateContent,
  TaskCreateTitle,
  TaskCreateForm,
  TaskCreateFormContent,
  TaskCreateFormDesc,
  TaskCreateFormInputContainer,
  TaskCreateFormInput,
  TaskCreateFormSubmit,
  TaskCreateFormSubmitText,
} from './styles';

import modalBottom from '~/assets/modal-bottom.png';
import modalTop from '~/assets/modal-top.png';

const TaskCreate = ({onRequestClose, onRequestCreate}) => {
  const [animation, setAnimation] = useState(new Animated.Value(0));
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [inLoad, setInLoad] = useState(0);
  const [inSuccess, setInSuccess] = useState(0);

  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 300,
      delay: 0,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, []);

  function preOnRequestClose() {
    Animated.timing(animation, {
      toValue: 0,
      duration: 300,
      delay: 0,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      onRequestClose();
    });
  }

  function preOnRequestCreate() {
    if (!inLoad && title && description) {
      onRequestCreate(title, description);
      setInLoad(1);
      setTitle('');
      setDescription('');
      setTimeout(() => {
        setInLoad(0);
        setInSuccess(1);
        setTimeout(() => {
          setInSuccess(0);
        }, 1500);
      }, 1000);
    }
  }

  return (
    <TaskCreateContainer
      animationType="none"
      onRequestClose={preOnRequestClose}
      transparent={true}>
      <TaskCreateContent>
        <TaskCreateDismissAnimation
          style={{
            transform: [
              {
                translateY: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [600, 0],
                  extrapolate: 'clamp',
                }),
              },
            ],
          }}>
          <TaskCreateDismiss>
            <TaskCreateDismissButtonAnimation
              style={{
                opacity: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1],
                  extrapolate: 'clamp',
                }),
                transform: [
                  {
                    rotate: animation.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['0deg', '180deg'],
                      extrapolate: 'clamp',
                    }),
                  },
                ],
              }}>
              <TaskCreateDismissButton
                activityOpacity={0.1}
                onPress={preOnRequestClose}>
                <AntDesign name={'close'} size={36} color="#fff" />
              </TaskCreateDismissButton>
            </TaskCreateDismissButtonAnimation>
          </TaskCreateDismiss>
        </TaskCreateDismissAnimation>

        <TaskCreateContentAreaAnimation
          style={{
            opacity: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
              extrapolate: 'clamp',
            }),
            transform: [
              {
                translateY: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [300, 0],
                  extrapolate: 'clamp',
                }),
              },
            ],
          }}>
          <TaskCreateContentArea>
            <TaskCreateBackgroundBottom
              resizeMode="stretch"
              source={modalBottom}>
              <TaskCreateBackgroundTop resizeMode="stretch" source={modalTop}>
                <TaskCreateTitle>ADICIONAR TAREFA</TaskCreateTitle>
              </TaskCreateBackgroundTop>

              <TaskCreateForm>
                <TaskCreateFormContent>
                  <TaskCreateFormDesc>
                    Informe o título e descrição de sua tarefa abaixo.
                  </TaskCreateFormDesc>
                  <TaskCreateFormInputContainer>
                    <TaskCreateFormInput
                      disabled={inLoad}
                      ref={titleRef}
                      autoCapitalize={'none'}
                      value={title}
                      autoCorrect={false}
                      onChangeText={text => setTitle(text)}
                      underlineColorAndroid="rgba(0,0,0,0)"
                      placeholderTextColor="#999"
                      placeholder="Título"
                      returnKeyType={'next'}
                      onSubmitEditing={() => descriptionRef.current.focus()}
                    />
                  </TaskCreateFormInputContainer>
                  <TaskCreateFormInputContainer>
                    <TaskCreateFormInput
                      disabled={inLoad}
                      ref={descriptionRef}
                      autoCapitalize={'none'}
                      value={description}
                      multlines={true}
                      numberOfLines={34}
                      autoCorrect={false}
                      onChangeText={text => setDescription(text)}
                      underlineColorAndroid="rgba(0,0,0,0)"
                      placeholderTextColor="#999"
                      placeholder="Descrição"
                      returnKeyType={'done'}
                      onSubmitEditing={preOnRequestCreate}
                    />
                  </TaskCreateFormInputContainer>
                  <TaskCreateFormSubmit
                    disabled={inLoad}
                    inLoad={inLoad}
                    inSuccess={inSuccess}
                    underlayColor="#2aadd7"
                    onPress={preOnRequestCreate}>
                    {inLoad ? (
                      <ActivityIndicator size={'small'} color="#fff" />
                    ) : inSuccess ? (
                      <FontAwesome5 name={'check'} size={22} color="#fff" />
                    ) : (
                      <TaskCreateFormSubmitText>
                        ADICIONAR
                      </TaskCreateFormSubmitText>
                    )}
                  </TaskCreateFormSubmit>
                </TaskCreateFormContent>
              </TaskCreateForm>
            </TaskCreateBackgroundBottom>
          </TaskCreateContentArea>
        </TaskCreateContentAreaAnimation>
      </TaskCreateContent>
    </TaskCreateContainer>
  );
};

TaskCreate.propTypes = {
  onRequestClose: PropTypes.func.isRequired,
  onRequestCreate: PropTypes.func.isRequired,
};

TaskCreate.defaultProps = {
  onRequestClose: () => {},
  onRequestCreate: () => {},
};

export default TaskCreate;
