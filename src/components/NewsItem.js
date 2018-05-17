import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

import Byline from './Byline';
import AppText from './AppText';
import Thumbnail from './Thumbnail';
import * as globalStyles from '../styles/global';

export default class NewsItem extends React.Component {

    render() {

        const { style, imageUrl, title, author, date, location, description } = this.props;

        const accentColor = globalStyles.ACCENT_COLORS[
            this.props.index % globalStyles.ACCENT_COLORS.length
        ];

        return (
            <TouchableOpacity style={style}>
                <View>
                    <Thumbnail url={imageUrl}
                                titleText={title}
                                accentColor={accentColor}
                                style={styles.thumbnail}/>
                    <View style={styles.content}>
                        <Byline author={author}
                                date={date}
                                location={location}/>
                        <AppText>
                            {description}
                        </AppText>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

NewsItem.propTypes = {
    style: View.propTypes.style,
    imageUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    location: PropTypes.string,
    description: PropTypes.string 
};

const styles = StyleSheet.create({
    thumbnail: {
        marginBottom: 5
    },
    content: {
        paddingHorizontal: 5
    }
});