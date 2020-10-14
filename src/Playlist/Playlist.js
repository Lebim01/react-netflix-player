import React from 'react'
import { ItemListReproduction } from '../styles'
import PlaylistItem from './PlaylistItem'
import { usePlayer } from '../context'

const Playlist = React.forwardRef(({ reprodutionList, playerLanguage }, ref) => {
    const { t } = usePlayer()
    return (
        <ItemListReproduction>
            <div>
                <div className="title">{t('playlist', { lng: playerLanguage })}</div>
                <div ref={ref} className="list-list-reproduction scroll-clean-player">
                    {reprodutionList.map((item, index) => (
                        <PlaylistItem key={index} item={item} index={index} />
                    ))}
                </div>
            </div>
            <div className="box-connector" />
        </ItemListReproduction>
    )
})

export default Playlist