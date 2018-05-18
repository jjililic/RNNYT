import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    ListView, StyleSheet, View, Modal, TouchableOpacity
} from 'react-native';

import * as globalStyles from '../styles/global';

import NewsItem from './NewsItem';
import SmallText from './SmallText';

export default class NewsFeed extends Component {

    constructor(props) {
        
        super(props);
        
        this.ds = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1.title !== row2.title
        });

        this.state = {
            dataSource: this.ds.cloneWithRows(props.news),
            modalVisible: false
        }

        this.renderRow = this.renderRow.bind(this);

        // Modal Open : this 컨텍스트를 이벤트 리스너에 바인딩
        this.onModalOpen = this.onModalOpen.bind(this);
        this.onModalClose = this.onModalClose.bind(this);
    }

    renderModal() {
        return (
            <Modal
                visible={this.state.modalVisible}
                onRequestClose={this.onModalClose}
            >
                <View style={styles.modalContent}>
                    <TouchableOpacity
                        onPress={this.onModalClose}
                        style={styles.closeButton}
                    >
                        <SmallText>Close</SmallText>
                    </TouchableOpacity>
                </View>
            </Modal>
        );
    }

    onModalOpen() {
        this.setState({
            modalVisible: true
        });
    }

    onModalClose() {
        this.setState({
            modalVisible: false
        });
    }

    renderRow(rowData, ...rest) {
        const index = parseInt(rest[1], 10);
        return (
            <NewsItem
                /* 터치시 뉴스 내용 Modal로 표시 */
                onPress={() => this.onModalOpen()}
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
                {this.renderModal()}
            </View>
        );
    }
}

NewsFeed.propTypes = {
    news: PropTypes.arrayOf(PropTypes.object),
    listStyles: View.propTypes.style
};

/**
 * styles
 */

const styles = StyleSheet.create({
    newsItem: {
        marginBottom: 20
    },
    modalContent: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 20,
        backgroundColor: globalStyles.BG_COLOR
    },
    closeButton: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        flexDirection: 'row'
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