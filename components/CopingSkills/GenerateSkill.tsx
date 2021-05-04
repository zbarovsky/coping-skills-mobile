import React from 'react'
import {StyleSheet, Text, View, Button} from 'react-native'
import GetSkill from './GetSkill'

export default function GenerateSkill() {
    return (
        <View>
            <Text style={[styles.headingTwo, styles.text]}>How it Works</Text>
            <Text style={[styles.headingThree, styles.text]}>Simply click the button below to get a coping skill, click until you find one that works for you.</Text>
            <GetSkill />
        </View>
    )
}

const styles = StyleSheet.create({
    headingTwo: {
        fontSize: 25,
    },
    headingThree: {
        fontSize: 16,
    },
    text: {
        textAlign: 'center',
        color: '#001F3D',
        marginTop: 10
    }
})