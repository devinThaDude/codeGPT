import React from 'react';

const OffCanvasMenu = () => {
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
    <div class="offCanvasMenu offCanvasMenu--nav js-headerOffCanvasMenu" data-menu="menu" aria-hidden="true" data-ocm-builder="navigation">
    <div class="offCanvasMenu-backdrop" data-menu-close="true"></div>
    <div class="offCanvasMenu-content">
    <div class="offCanvasMenu-header">
    
    <a class="offCanvasMenu-closer" data-menu-close="true" role="button" tabindex="0" aria-label="Close">Menu</a>
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
    <div class="offCanvasMenu-installBanner js-installPromptContainer" style="display: none;" data-xf-init="install-prompt">
    <div class="offCanvasMenu-installBanner-header">Install the app</div>
    <button type="button" class="js-installPromptButton button"><span class="button-text">Install</span></button>
    </div>
    </div>
</div>
</html>
  );
};

export default OffCanvasMenu;
