import { createSelector } from 'reselect';
import { reshapeNewsData, filterNewsBySearchTerm } from '../util/dataTransformations';

const newsSelector = state => state.news;

const reshapeNewsSelector = createSelector(
    [newsSelector],
    reshapeNewsData
);

export const allNewsSelector = createSelector(
    [reshapeNewsSelector],
    newsItems => newsItems
);

/**
 * 뉴스 검색을 위한 셀렉터들
 */

 // 입력 셀렉터, 리덕스 상태 트리로부터 현재의 searchTerm의 값을 가져와 리턴하는 역할
 const searchTermSelector = state => state.searchTerm;

 // searchTermSelect를 일벽으로 받고, 대소문자 구분 없는 검색을 위해 searchTerm을 소문자 문자열로 변경한다.
 const caseInsensitiveSearchTermSelector = createSelector(
    searchTermSelector,
    searchTerm => searchTerm.toLowerCase()
 );

 /*
  * <p>
  * reshapeNewsSelector와 caseInsensitiveSearchTermSelector를 받아, 
    이는 다시 filterNewsBySearchTerm에 인자로 전달되고
    filterNewsBySearchTerm의 리턴 값은 최종적으로 SearchContainer에 노출되는 데이터가 된다.
    </p>
  */
   
 export const searchNewsSelector = createSelector(
    [reshapeNewsSelector, caseInsensitiveSearchTermSelector],
    filterNewsBySearchTerm
 );