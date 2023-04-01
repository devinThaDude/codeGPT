import React from 'react';

const SectionLinks = () => {
  return (
    <div class="p-sectionLinks">
    <div class="p-sectionLinks-inner hScroller" data-xf-init="h-scroller">
    <div class="hScroller-scroll is-calculated">
    <ul class="p-sectionLinks-list">
    <li>
    <div class="p-navEl ">
    <a href="whats-new/posts/" class="p-navEl-link " rel="nofollow" data-xf-key="alt+1" data-nav-id="newPosts">New posts</a>
    </div>
    </li>
    <li>
    <div class="p-navEl ">
    <a href="search/?type=post" class="p-navEl-link " data-xf-key="alt+2" data-nav-id="searchForums">Search forums</a>
    </div>
    </li>
    </ul>
    </div><i class="hScroller-action hScroller-action--end" aria-hidden="true"></i><i class="hScroller-action hScroller-action--start" aria-hidden="true"></i>
    </div>
    </div>
  );
};

export default SectionLinks;
