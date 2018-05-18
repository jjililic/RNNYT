import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    ListView, StyleSheet, View
} from 'react-native';

import * as globalStyles from '../styles/global';

import NewsItem from './NewsItem';

export default class NewsFeed extends Component {

    constructor(props) {
        
        super(props);
        
        this.ds = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1.title !== row2.title
        });

        this.state = {
            dataSource: this.ds.cloneWithRows(props.news)
        }
    }

    renderRow(rowData, ...rest) {
        const index = parseInt(rest[1], 10);
        return (
            <NewsItem
                style={styles.newsItem}
                        index={index}
                        {...rowData}
            />
        );
    }

    render() {
        return (
            <View style={globalStyles.COMMON_STYLES.pageContainer}>
                <ListView
                    enableEmptySections /* 비어 있는 목록 렌더링 */
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    style={this.props.listStyles}
                />
            </View>
        );
    }
}

NewsFeed.propTypes = {
    news: PropTypes.arrayOf(PropTypes.object),
    listStyles: View.propTypes.style
};

const styles = StyleSheet.create({
    newsItem: {
        marginBottom: 20
    }
});

NewsFeed.defaultProps = {
    news: [
        {
            title: 'React Native 1',
            imageUrl: 'http://ichef.bbci.co.uk/news/976/cpsprodpb/120D1/production/_98073937_fifa.jpg',
            description: 'Description 1',
            date: new Date(),
            author: 'Facebook',
            location: 'Menlo Park, Califonia',
            url: 'https://facebook.github.io/react-native'

        },
        {
            title: 'React Native 2',
            imageUrl: 'http://ichef.bbci.co.uk/news/976/cpsprodpb/120D1/production/_98073937_fifa.jpg',
            description: 'Description 1',
            date: new Date(),
            author: 'Facebook',
            location: 'Menlo Park, Califonia',
            url: 'https://facebook.github.io/react-native'

        }
    ]
};