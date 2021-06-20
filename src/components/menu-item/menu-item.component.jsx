import React from 'react';
import './menu-item.styles.scss';
import { withRouter} from 'react-router';

const MenuItem = ({title, imageUrl, size, history, match, linkUrl}) => (
    <div style= {{
            backgroundImage: `url(${imageUrl})`
        }} 
        className = {`${size} menu-item`} onClick={() => history.push(
            `${match.url}${linkUrl}`
        )}>
    <div className='content'>
        <h1 className='title'>{title}</h1>
        <span className='subtitle'>Shop now</span>
    </div>
    </div>
);

export default withRouter(MenuItem);