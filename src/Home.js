import React from 'react';
import { Button, Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setName, setAge } from '../redux/action';

const Home = ({ navigation }) => {
    const { name, age } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();
    return (
        <View>
            <Text>{name} {age}</Text>
            <Button
                onPress={() => dispatch(setName('ammar'))}
                title="updateName"
                color="#841584"
            />
        </View>
    )
}

export default Home;