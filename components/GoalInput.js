import { useState } from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';

export default function GoalInput({ onNewGoal }) {
    const [newGoal, setNewGoal] = useState("");

    function textChangeHandler(enteredText) {
        setNewGoal(enteredText);
    }

    function onPressHandler() {
        if (newGoal) {
            onNewGoal(newGoal)
        }
        setNewGoal("");
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                onChangeText={textChangeHandler}
                style={styles.textInput}
                value={newGoal}
                placeholder='El Goals'
            />
            <Button
                title='Add Goal'
                onPress={onPressHandler}
            />
        </View>
    )
}

const styles = new StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#CCCCCC",
        alignItems: 'center'
    }
})