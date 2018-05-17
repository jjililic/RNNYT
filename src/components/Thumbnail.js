import React from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet, Image
} from 'react-native';

const Thumbnail = ({ url }) => {
    return (
        <Image
            style={[styles.image]}
            source={{ url: url }}
        />
    );
};

Thumbnail.propTypes = {
    url: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
    image: {
        height: 100,
        justifyContent: 'flex-end'
    }
});

export default Thumbnail;