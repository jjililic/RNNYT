import moment from 'moment';

const getMultimediaUrlByFormat = (multimedia, format) => {

    if(!multimedia) {
        return '';
    }

    const matchingFormat = multimedia.find(media => media.format === format);

    if(!matchingFormat) {
        return '';
    }

    return matchingFormat.url;
};

export const reshapeNewsData = news => (
    news.map(({ abstract, byline, geo_facet, multimedia, published_date, title, url }) => ({
            description: abstract || '',
            author: byline ? byline.replace('By ', '') : '',
            location: geo_facet.length > 0 ? geo_facet[0] : '',
            imageUrl: getMultimediaUrlByFormat(multimedia, 'thumbLarge'),
            date: moment(published_date).format('MMM Do YYYY'),
            title,
            url
        })) 
);

/**
 * Method: filterNewsBySearchTerm
 * 뉴스를 필터링하는 함수
 */

export const filterNewsBySearchTerm = (newsItems, searchTerm) => {

    // 검색어가 입력되지 않은 경우, 빈 목록을 리턴한다.
    if(searchTerm.length === 0) {
        return [];
    }

    // 기사 내용 또는 필자 또는 제목에 검색어가 포함된 기사들을 리턴한다.
    return newsItems.filter(({ description, author, title }) => (
        description.toLowerCase().indexOf(searchTerm) > -1 ||
        author.toLowerCase().indexOf(searchTerm) > -1 ||
        title.toLowerCase().indexOf(searchTerm) > -1
    ));
};