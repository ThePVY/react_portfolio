import styles from './PagesList.module.css'
import React from 'react';
import Preloader from '../../../common/Preloader'


const PagesList = props => {
    const { pagesCount, selectedPage, isFetching } = props
    const { onPageClick } = props

    let pagesArr = [selectedPage - 1 > 0 ? selectedPage - 1 : null, selectedPage, selectedPage + 1 <= pagesCount ? selectedPage + 1 : null]
    pagesArr = pagesArr.filter(page => page ? true : false)

    return (
        <div className={styles.pagesList}>
            {
                selectedPage >= 3 ?
                    <span><span onClick={() => onPageClick(1)} >1</span> <span>...</span></span> : ''
            }
            {
                pagesArr.map((p) => {
                    return <span key={p} onClick={() => onPageClick(p)} className={selectedPage === p ? styles.selectedPage : null}>{p}</span>
                })
            }
            {
                selectedPage <= pagesCount - 2 ?
                    <span><span>...</span> <span onClick={() => onPageClick(pagesCount)} >{pagesCount}</span></span> : ''
            }
            <span className={styles.preloader}>
                <Preloader isFetching={isFetching} />
            </span>
        </div>
    )
}


export default PagesList