import React from 'react'
import {StyleSheet, Text, View, Button} from 'react-native'
import GetSkill from './GetSkill'

export default function GenerateSkill() {
    return (
        <View>
            <Text>How it Works</Text>
            <Text>Simply click the button below to get a coping skill, click until you find one that works for you.</Text>
            <GetSkill />
        </View>
    )
}