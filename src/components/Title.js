import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text } from 'react-native';

import AppText from './AppText';
import * as globalStyles from '../styles/global';

const Title = ({ style, children }) => (
    <AppText style={[styles.title, style]}>
        {children}
    </AppText>
);

Title.propTypes = {
    style: Text.propTypes.style,
    children: PropTypes.node
};

const styles = StyleSheet.create({
    title: {
        /* TODO fix fontFamily error */
        /* fontFamily: 'Helvetica Neue-CondensedBold', */
        fontSize: 18,
        color: globalStyles.HEADER_TEXT_COLOR,
        backgroundColor: `${globalStyles.BG_COLOR}99`
    }
});

export default Title;