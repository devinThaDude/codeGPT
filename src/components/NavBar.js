import React from 'react';
import './assets/styles.css';
import './assets/style2.css';


const NavBar = () => {
  return (
  <html
      id="XF"
      dir="LTR"
      data-app="public"
      data-template="forum_list"
      data-container-key=""
      data-content-key=""
      data-logged-in="false"
      data-cookie-prefix="xf_"
      data-csrf="1680309846,e50896b459e8773a4cc3c92068b11d43"
      className="has-js template-forum_list has-no-touchevents has-passiveeventlisteners has-hiddenscroll has-os-linux has-browser-mozilla has-pointer-nav"
      data-run-jobs=""
      lang="en-US"
    >
    <div className="p-navSticky p-navSticky--primary" data-xf-init="sticky-header">
      <div class="p-navSticky p-navSticky--primary" data-xf-init="sticky-header">
<nav class="p-nav">
<div class="p-nav-inner">
<button type="button" class="button--plain p-nav-menuTrigger button" data-xf-click="off-canvas" data-menu=".js-headerOffCanvasMenu" tabindex="0" aria-label="Menu"><span class="button-text">
<i aria-hidden="true"></i>
</span></button>
<div class="p-nav-smallLogo">
<a href="/">
<img src="assets/images/AE.png" srcset="" alt="Coding Forums" width="" height=""/>
</a>
</div>
<div class="p-nav-scroller hScroller" data-xf-init="h-scroller" data-auto-scroll=".p-navEl.is-selected">
<div class="hScroller-scroll is-calculated">
<ul class="p-nav-list js-offCanvasNavSource">
<li>
<div class="p-navEl is-selected" data-has-children="true">
<a href="/" class="p-navEl-link p-navEl-link--splitMenu " data-nav-id="forums">Forums</a>
<a data-xf-key="1" data-xf-click="menu" data-menu-pos-ref="< .p-navEl" class="p-navEl-splitTrigger" role="button" tabindex="0" aria-label="Toggle expanded" aria-expanded="false" aria-haspopup="true"></a>
<div class="menu menu--structural" data-menu="menu" aria-hidden="true">
<div class="menu-content">
<a href="/whats-new/posts/allPosts.php" class="menu-linkRow u-indentDepth0 js-offCanvasCopy " rel="nofollow" data-nav-id="newPosts">New posts</a>
<a href="search/?type=post" class="menu-linkRow u-indentDepth0 js-offCanvasCopy " data-nav-id="searchForums">Search forums</a>
</div>
</div>
</div>
</li>
<li>
<div class="p-navEl " data-has-children="true">
<a href="members/" class="p-navEl-link p-navEl-link--splitMenu " data-nav-id="members">Members</a>
<a data-xf-key="2" data-xf-click="menu" data-menu-pos-ref="< .p-navEl" class="p-navEl-splitTrigger" role="button" tabindex="0" aria-label="Toggle expanded" aria-expanded="false" aria-haspopup="true"></a>
<div class="menu menu--structural" data-menu="menu" aria-hidden="true">
<div class="menu-content">
<a href="online/" class="menu-linkRow u-indentDepth0 js-offCanvasCopy " data-nav-id="currentVisitors">Current visitors</a>
</div>
</div>
</div>
</li>
</ul>
</div><i class="hScroller-action hScroller-action--end" aria-hidden="true"></i><i class="hScroller-action hScroller-action--start" aria-hidden="true"></i>
</div>
<div class="p-nav-opposite">
<div class="p-navgroup p-account p-navgroup--guest">
<a href="login/" class="p-navgroup-link p-navgroup-link--textual p-navgroup-link--logIn" data-xf-click="overlay" data-follow-redirects="on">
<span class="p-navgroup-linkText">Log in</span>
</a>
<a href="register/" class="p-navgroup-link p-navgroup-link--textual p-navgroup-link--register">
<span class="p-navgroup-linkText">Register</span>
</a>
</div>
<div class="p-navgroup p-discovery">
<a href="whats-new/posts/" rel="nofollow" class="p-navgroup-link p-navgroup-link--iconic p-navgroup-link--whatsnew" aria-label="What's new" title="What's new">
<i aria-hidden="true"></i>
<span class="p-navgroup-linkText">What's new</span>
</a>
<a href="search/" class="p-navgroup-link p-navgroup-link--iconic p-navgroup-link--search" data-xf-click="menu" data-xf-key="/" aria-label="Search" aria-expanded="false" aria-haspopup="true" title="Search">
<i aria-hidden="true"></i>
<span class="p-navgroup-linkText">Search</span>
</a>
<div class="menu menu--structural menu--wide" data-menu="menu" aria-hidden="true">
<form action="search/search" method="post" class="menu-content" data-xf-init="quick-search">
<h3 class="menu-header">Search</h3>
<div class="menu-row">
<input type="text" class="input" name="keywords" placeholder="Search…" aria-label="Search" data-menu-autofocus="true"/>
</div>
<div class="menu-row">
<label class="iconic"><input type="checkbox" name="c[title_only]" value="1"/><i aria-hidden="true"></i><span class="iconic-label">Search titles only</span></label>
</div>
<div class="menu-row">
<div class="inputGroup">
<span class="inputGroup-text" id="ctrl_search_menu_by_member">By:</span>
<input type="text" class="input" name="c[users]" data-xf-init="auto-complete" placeholder="Member" aria-labelledby="ctrl_search_menu_by_member" autocomplete="off"/>
</div>
</div>
<div class="menu-footer">
<span class="menu-footer-controls">
<button type="submit" class="button--primary button button--icon button--icon--search"><span class="button-text">Search</span></button>
<a href="search/" class="button"><span class="button-text">Advanced search…</span></a>
</span>
</div>
<input type="hidden" name="_xfToken" value="1680309846,e50896b459e8773a4cc3c92068b11d43"/>
</form>
</div>
</div>
</div>
</div>
</nav>
</div><div class="offCanvasMenu offCanvasMenu--nav js-headerOffCanvasMenu" data-menu="menu" aria-hidden="true" data-ocm-builder="navigation">
<div class="offCanvasMenu-backdrop" data-menu-close="true"></div>
<div class="offCanvasMenu-content">
<div class="offCanvasMenu-header">
Menu
<a class="offCanvasMenu-closer" data-menu-close="true" role="button" tabindex="0" aria-label="Close"></a>
</div>
<div class="p-offCanvasRegisterLink">
<div class="offCanvasMenu-linkHolder">
<a href="login/" class="offCanvasMenu-link" data-xf-click="overlay" data-menu-close="true">
Log in
</a>
</div>
<hr class="offCanvasMenu-separator"/>
<div class="offCanvasMenu-linkHolder">
<a href="register/" class="offCanvasMenu-link" data-xf-click="overlay" data-menu-close="true">
Register
</a>
</div>
<hr class="offCanvasMenu-separator"/>
</div>
<div class="js-offCanvasNavTarget"></div>
<div class="offCanvasMenu-installBanner js-installPromptContainer" styles="display: none;" data-xf-init="install-prompt">
<div class="offCanvasMenu-installBanner-header">Install the app</div>
<button type="button" class="js-installPromptButton button"><span class="button-text">Install</span></button>
</div>
</div>
</div>
    </div>
    </html>
  );
};

export default NavBar;

