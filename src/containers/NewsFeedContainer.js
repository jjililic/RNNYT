/**
 * 'NewsFeedContainer' 컨테이너
 * NewsFeed를 위한 컨테이너
 */

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadNews } from '../actions/newsActions';
import NewsFeed from '../components/NewsFeed';

import { reshapeNewsData } from '../util/dataTransformations';

/**
 * Map 'State to Props'
 * @param {*} state 
 */

const mapStateToProps = state => ({
    news: reshapeNewsData(state.news)
});

/**
 * Map 'Dispatch to Props'
 */

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        loadNews
    }, dispatch)
);

/**
 * Connect
 */

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);