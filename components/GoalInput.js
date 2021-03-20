import React, {useState} from 'react'
import { View, Button, Modal, Alert, TextInput, StyleSheet } from 'react-native'
import GoadCard from './GoadCard'


const GoalInput = () => {
    const [modalVisible, setModalVisible] = useState(false)
    const [goalText, setGoalText] = useState('')
    const [goals, setGoals] = useState([])

    const handleGoal = () => {
        setGoals([...goals, goalText])
        setModalVisible(false)
    }

    return (
        <View>
            <View style={{ marginBottom: 10 }}>
                <Button title="ADD NEW GOAL" onPress={() => setModalVisible(true)} />            
            </View>

            { goals && goals.map((goal, i) => <GoadCard goalText={goal} key={i} />)}            
            
            <Modal animationType="slide" visible={modalVisible}>
                <View style={styles.modalContainer}>
                    <TextInput placeholder="Enter new goal" onChangeText={(enteredText) => setGoalText(enteredText)} style={styles.inputGoal} />
                    <View style={styles.modalBtns}>
                        <Button color="black" title="Back" onPress={() => setModalVisible(false)} />
                        <Button title="Save" onPress={handleGoal} />
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#ddd',
        margin: 10,
    },
    inputGoal: {
        borderWidth: 1,
        borderColor: 'black',
        width: 200,
        padding: 10,
        marginVertical: 10,
        borderRadius: 5
    },
    modalBtns: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 200
    }
})

export default GoalInput
