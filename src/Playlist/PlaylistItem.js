import React, { useState } from 'react'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
import { usePlayer } from '../context'

const PlaylistItem = ({ item, index }) => {
    const [isExpanded, setIsExpanded] = useState(item.playing)
    const { stopVideo, onClickItemListReproduction } = usePlayer()

    const toggleExpand = () => {
        setIsExpanded(!isExpanded)
    }

    return (
        <div className={`item-list-reproduction ${item.playing && 'selected'} ${isExpanded && 'expanded'}`}>
            <span 
                style={{ marginRight: 15 }} 
                onClick={() => {
                    setIsExpanded(!isExpanded)
                }}
            >
                Capitulo {index + 1}
            </span>
            {isExpanded
                ? <MdKeyboardArrowUp className="chapter-expand arrow" onClick={toggleExpand} />
                : <MdKeyboardArrowDown className="chapter-expand arrow" onClick={toggleExpand} />
            }
            {isExpanded &&
                <div className="bold playlist-grid">
                <img 
                    alt="imagen"
                    src={item.cover} 
                    onClick={() => {
                        stopVideo()
                        onClickItemListReproduction && onClickItemListReproduction(item.id, isExpanded)
                    }}
                />
                <div style={{display: 'flex', flexDirection:'column', padding: '0px 10px'}}>
                    <span className="chap-title">{item.title}</span>
                    <p className="chap-description">{item.description}</p>
                </div>
                </div>
            }
            {item.percent && <div className="percent" />}
        </div>
    )
}

export default PlaylistItem