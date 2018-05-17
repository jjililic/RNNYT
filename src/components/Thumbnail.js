import React from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet, Image
} from 'react-native';

import Title from './Title';

const Thumbnail = ({ url, titleText }) => {
    return (
        <Image
            style={[styles.image]}
            source={{ url: url }}>
            <Title style={styles.title}>{titleText}</Title>
        </Image>
    );
};

Thumbnail.propTypes = {
    url: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
    image: {
        height: 100,
        justifyContent: 'flex-end'
    },
    title: {
        padding: 5
    }
});

export default Thumbnail;