import React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native'

export default function Loading() {

    return (
        <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size='large' color='#001F3D' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        justifyContent: 'center',
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: "space-around",
        padding: 10
    }
})