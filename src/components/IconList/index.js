import React from 'react'
import Icon from '../Icon'
import './style.css'


function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return Object.entries(images)
}

export default function IconList() {
    const imagesArray = importAll(require.context('../../assets/icons', false, /\.(png|webp|jpe?g|svg)$/));

    return (
        <div id='icon_list_container'>
            {imagesArray.map(( image, n ) => <Icon key={n} icon={image} />)}
            {/* {list.map(( repo, n ) => <Icon key={n} repo={repo} />)} */}
        </div>
    )
}
