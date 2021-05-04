import React, {useState} from 'react'
import {StyleSheet, Text, View, Button, Alert} from 'react-native'
import axios from 'axios'

export default function GetSkill() {
    const [copingSkill, setCopingSkill] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)

    function generateCopingSkill(e:any): void {
        e.preventDefault()
        setIsLoading(true)
        let copingSkillId: number = Math.floor(Math.random() * 100)
        
        axios.get('https://copingskillsapi.herokuapp.com/api/copingskill/', {params: {id: copingSkillId}})
        .then(response => {
            setIsLoading(false)
            setCopingSkill(response.data.skill)
        }).catch(error => {
            Alert.alert(error)
        })
    }

    return (
        <View>
            <View>
                <Text>{copingSkill}</Text>
            </View>
            <View>
                <Button
                    title="Generate Skill"
                    color="#001F3D"
                    onPress={generateCopingSkill}
                    accessibilityLabel="Press button to generate a coping skill"
                />
            </View>
        </View>
    )
}