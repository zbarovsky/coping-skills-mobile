import React, {FC} from 'react'
import {StyleSheet, Text, View} from 'react-native'

interface CopingSkill {
    skill: string
}

const Skill: FC<CopingSkill> = (props): JSX.Element => {

    return (
        <View>
            <Text style={styles.text}>{props.skill}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 25,
        color: '#001F3D'
    }
})

export default Skill;