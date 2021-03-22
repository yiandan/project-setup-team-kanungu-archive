import React, { useState } from 'react'
import './FeedPost.css'

const FeedPost=({ collapsed, children })=> {
    const [isCollapsed, setIsCollapsed] = useState(true);

    return (
        // https://www.30secondsofcode.org/react/s/collapse
      <div className='box'>
        <div
          className={`collapse-content ${isCollapsed ? 'collapsed' : 'expanded'}`}
          aria-expanded={isCollapsed}
        >
          {children}
        </div>

        <button
          className="collapse-button"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? 'Show' : 'Hide'} content
        </button>
      </div>
    );
}

export default FeedPost