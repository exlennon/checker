import React, {useState, useRef, useEffect} from 'react';
import {Animated, Easing, Keyboard} from 'react-native';
import PropTypes from 'prop-types';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {
  TasksPlusPosition,
  TasksPlusContainer,
  TasksPlusContainerAnimation,
  TasksPlusRotateAnimation,
  TasksPlusFormAnimation,
  TasksPlusForm,
  TasksPlusFormContent,
  TasksPlusFormTitle,
  TasksPlusFormDesc,
  TasksPlusFormInputContainer,
  TasksPlusFormInput,
  TasksPlusFormSubmit,
  TasksPlusFormSubmitText,
} from './styles';

const TasksPlus = ({onPress}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [formVisible, setFormVisible] = useState(0);
  const [formFocused, setFormFocused] = useState(0);
  const [animation, setAnimation] = useState(new Animated.Value(0));

  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    Animated.timing(animation, {
      toValue: formVisible ? 1 : 0,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, [formVisible]);

  return (
    <TasksPlusPosition
      formFocused={formFocused}
      style={{
        transform: [
          {
            translateY: formFocused
              ? 0
              : animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -240],
                  extrapolate: 'clamp',
                }),
          },
        ],
      }}>
      <TasksPlusContainerAnimation>
        <TasksPlusContainer
          onPress={() => {
            setFormVisible(!formVisible);
            if (formFocused) {
              setFormFocused(false);
              Keyboard.dismiss();
            }
          }}
          underlayColor="#444">
          <TasksPlusRotateAnimation
            style={{
              transform: [
                {
                  rotate: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '225deg'],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}>
            <FontAwesome5 name="plus" size={32} color="#fff" />
          </TasksPlusRotateAnimation>
        </TasksPlusContainer>
      </TasksPlusContainerAnimation>

      <TasksPlusFormAnimation
        style={{
          transform: [
            {
              translateY: animation.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -50],
                extrapolate: 'clamp',
              }),
            },
          ],
        }}>
        <TasksPlusForm>
          <TasksPlusFormContent>
            <TasksPlusFormTitle>ADICIONAR TAREFA</TasksPlusFormTitle>
            <TasksPlusFormDesc>
              Informe o título e descrição de sua tarefa abaixo.
            </TasksPlusFormDesc>
            <TasksPlusFormInputContainer>
              <TasksPlusFormInput
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
                onFocus={() => setFormFocused(true)}
              />
            </TasksPlusFormInputContainer>
            <TasksPlusFormInputContainer>
              <TasksPlusFormInput
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
                onFocus={() => setFormFocused(true)}
              />
            </TasksPlusFormInputContainer>
            <TasksPlusFormSubmit underlayColor="#333" onPress={() => {}}>
              <TasksPlusFormSubmitText>ADICIONAR</TasksPlusFormSubmitText>
            </TasksPlusFormSubmit>
          </TasksPlusFormContent>
        </TasksPlusForm>
      </TasksPlusFormAnimation>
    </TasksPlusPosition>
  );
};

TasksPlus.propTypes = {
  onPress: PropTypes.func.isRequired,
};

TasksPlus.defaultProps = {
  onPress: () => {},
};

export default TasksPlus;
