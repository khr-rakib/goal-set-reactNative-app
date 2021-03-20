import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function GoadCard({goalText}) {
    return (
        <View style={styles.container}>
            <Text>{goalText}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 332,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginVertical: 4,
        position: 'relative',
        backgroundColor: '#ccc'
    }
})
