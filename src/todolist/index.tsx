/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Text,
} from 'react-native';



function Todolist(): JSX.Element {

    interface List {
        text: string,
        flag: boolean
    }
    const [value, onChangeText] = useState('');
    const [todoList, setTodoList] = useState([]);
    const Add = () => {
        if (!value) {
            return;
        }
        let item = {
            text: value,
            flag: false
        }

        const data = [...todoList] as Array<List>;
        data.push(item)
        setTodoList(data as [])
        onChangeText("")
    }
    const delet = (index: number) => {
        const data = [...todoList]
        data.splice(index, 1);
        setTodoList(data)
    }
    const drawLine = (index: number) => {
        const data: Array<List> = [...todoList]
        data[index].flag = !data[index].flag
        setTodoList(data as [])
    }
    return (
        <SafeAreaView >
            <ScrollView>
                <View>
                    <Text style={styles.hText}>RN todolist</Text>
                </View>
                <View style={styles.heard}>
                    <TextInput
                        placeholder="Add"
                        style={styles.textInput}
                        onChangeText={text => onChangeText(text)}
                        value={value}
                    />
                    <TouchableOpacity
                        style={styles.submit}
                        onPress={Add}>
                        <Text style={styles.labelText}>Add</Text>
                    </TouchableOpacity>
                </View>
                {
                    todoList.map((item: List, index) => {
                        return <View style={styles.todoList} key={index}>
                            <Text
                                style={[styles.todoListText, item.flag && styles.lineThrough]}>
                                {item.text}</Text>
                            <View style={styles.todoListView}>
                                <TouchableOpacity
                                    style={styles.submit}
                                    onPress={() => drawLine(index)}>
                                    <Text style={styles.labelText}>划线</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.submit}
                                    onPress={() => delet(index)}>
                                    <Text style={styles.labelText}>删除</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    })
                }

            </ScrollView>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    hText: {
        color: "#000",
        textAlign: "center",
        fontSize: 20
    },
    heard: {
        flexDirection: 'row',
        padding: 20,
    },
    textInput: {
        width: "70%",
        borderColor: '#ccc',
        borderWidth: 1,
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
        padding: 4,
    },
    submit: {
        width: 60,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'red',
        borderRadius: 4,
        marginLeft: 10,
        padding: 6
    },
    labelText: {
        color: "#fff"
    },
    todoList: {
        display: 'flex',
        width: "80%",
        height: 50,
        lineHeight: 50,
        flexDirection: 'row',
        marginLeft: 20,
        paddingTop: 6,
        paddingBottom: 6,
        borderWidth: 1,
        borderColor: '#8e8e8e',
        borderRadius: 8,
        marginBottom: 10
    },
    todoListText: {
        width: '50%',
        color: "#8b8b8b",
        alignContent: "center",
        height: 40,
        lineHeight: 40,
        marginLeft: 10,

    },
    lineThrough: {
        textDecorationLine: 'line-through',
    },
    todoListView: {
        flex: 1,
        flexDirection: 'row',
    }
});

export default Todolist;
