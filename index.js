// Check if the screen width is at least 1200px
if (window.outerWidth >= 1200) {
  
    // Set the innerHTML of the div element to the desired HTML
    document.body.innerHTML = `
    <div id="dsktp">
        <div class="desktop-container">
            <div id="d-topbar">
                <svg width="1115" height="38" viewBox="0 0 1115 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="1090.5" y1="1.5" x2="1113.5" y2="1.5" stroke="white" stroke-width="3" stroke-linecap="round"></line>
                    <line x1="1090.5" y1="10.1665" x2="1113.5" y2="10.1665" stroke="white" stroke-width="3" stroke-linecap="round"></line>
                    <line x1="1090.5" y1="19.5" x2="1113.5" y2="19.5" stroke="white" stroke-width="3" stroke-linecap="round"></line>
                    <path
                        d="M30.1532 29.0787C27.4552 32.5883 22.3015 33.2347 18.6267 30.4098C17.7909 29.7673 17.6638 29.432 17.6463 29.3727C17.6585 29.3291 17.7344 29.1269 18.1807 28.6945C18.557 28.3299 19.0033 27.9749 19.5503 27.5398C19.8354 27.3131 20.1478 27.0646 20.4919 26.7817C21.4318 26.0088 22.487 25.0672 23.3962 23.8845C24.3054 22.7017 24.9441 21.4399 25.4492 20.3329C25.6342 19.9276 25.794 19.5618 25.9398 19.228C26.2196 18.5875 26.4479 18.065 26.7035 17.6075C27.0067 17.065 27.1825 16.9397 27.2214 16.9167C27.2832 16.9184 27.6399 16.955 28.4757 17.5975C32.1506 20.4224 32.8511 25.569 30.1532 29.0787Z"
                        fill="white"
                        stroke="white"
                        stroke-width="3"
                    ></path>
                    <path
                        d="M7.04505 11.4976C4.33814 15.0004 5.02548 20.1487 8.69313 22.9831C9.52727 23.6277 9.88388 23.6652 9.94567 23.6671C9.98466 23.6441 10.1609 23.5192 10.4654 22.9775C10.7222 22.5208 10.9518 21.9988 11.2332 21.359C11.3799 21.0256 11.5406 20.6603 11.7266 20.2554C12.2346 19.1497 12.8765 17.8895 13.7887 16.7091C14.7009 15.5287 15.7585 14.5897 16.7004 13.8193C17.0453 13.5372 17.3583 13.2896 17.6439 13.0636C18.1921 12.6299 18.6392 12.2761 19.0165 11.9124C19.4639 11.4811 19.5403 11.2791 19.5526 11.2356C19.5352 11.1763 19.4091 10.8406 18.5749 10.196C14.9072 7.36167 9.75195 7.99487 7.04505 11.4976Z"
                        fill="white"
                        stroke="white"
                        stroke-width="3"
                    ></path>
                </svg>
            </div>
            <div id="d-maintxt">
                <div id="d-tlte-txt">We help businesses improve their digital presence.</div>
                <div id="d-btns">
                    <button id="d-cons" class="frosted-glass-effect" onclick='location.href="onboarding.html"'>Free Consultation</button>
                    <button id="d-abt">About</button>
                </div>
            </div>
        </div>
        <div id="d-what-we-do">
            <h1>Sovex can...</h1>
            <div class="break"></div>
            <!-- break -->
            <div id="d-wht-we-do-ex">
                <h1 id="dfmslkfm">Design, develop, and deploy a perfect website</h1>
                <img src="web-dev-svg.svg" />
            </div>
            <div id="d-wht-we-do-ex">
                <h1>Improve search engine optimization and Google ranking</h1>
                <img src="web-seo-svg.svg" />
            </div>
            <div id="d-wht-we-do-ex">
                <h1>Create custom AI chat bots and customer support agents</h1>
                <img src="web-ai-svg.svg" />
            </div>
        </div>
        <div id="d-tech-stack">
            <h1>Our technology</h1>
            <div class="break"></div>
            <div id="d-tech-stack-ex">
                <div class="d-tch-stack-ex-img"><img src="l-webflow.png" /></div>
                <div class="d-tch-stack-ex-txt">
                    <h1>Webflow</h1>
                    <p>For website testing &amp; development</p>
                </div>
            </div>

            <div id="d-tech-stack-ex">
                <div class="d-tch-stack-ex-img"><img src="l-openai.png" /></div>
                <div class="d-tch-stack-ex-txt">
                    <h1>OpenAI</h1>
                    <p>For AI customer service integration</p>
                </div>
            </div>
            <div id="d-tech-stack-ex">
                <div class="d-tch-stack-ex-img"><img src="l-figma.png" /></div>
                <div class="d-tch-stack-ex-txt">
                    <h1>Figma</h1>
                    <p>For website design &amp; mockups</p>
                </div>
            </div>
            <div id="d-tech-stack-ex">
                <div class="d-tch-stack-ex-img"><img src="l-make.png" /></div>
                <div class="d-tch-stack-ex-txt">
                    <h1>Make</h1>
                    <p>For automating sign-ups and onboarding</p>
                </div>
            </div>
        </div>
        <div id="d-team">
            <h1>Our Team</h1>
            <div class="break"></div>
            <p>Sovex hosts a dynamic team of professional designers, strategists, and developers. When you join us, a dedicated group collaborates to analyze and enhance your business operations.</p>
            <img src="desktop-emojicons.png" />
            <div class="break"></div>

            <div class="d-team-ex-img"></div>
        </div>
        <div id="d-footer">
            <div class="break"></div>

            <div class="d-svx-lgo">
                <h1>Sovex</h1>
                <svg height="38" viewBox="" fill="none" xmlns="http://www.w3.org/2000/svg" width="38">
                    <path
                        d="M30.1532 29.0787C27.4552 32.5883 22.3015 33.2347 18.6267 30.4098C17.7909 29.7673 17.6638 29.432 17.6463 29.3727C17.6585 29.3291 17.7344 29.1269 18.1807 28.6945C18.557 28.3299 19.0033 27.9749 19.5503 27.5398C19.8354 27.3131 20.1478 27.0646 20.4919 26.7817C21.4318 26.0088 22.487 25.0672 23.3962 23.8845C24.3054 22.7017 24.9441 21.4399 25.4492 20.3329C25.6342 19.9276 25.794 19.5618 25.9398 19.228C26.2196 18.5875 26.4479 18.065 26.7035 17.6075C27.0067 17.065 27.1825 16.9397 27.2214 16.9167C27.2832 16.9184 27.6399 16.955 28.4757 17.5975C32.1506 20.4224 32.8511 25.569 30.1532 29.0787Z"
                        fill="white"
                        stroke="white"
                        stroke-width="3"
                    ></path>
                    <path
                        d="M7.04505 11.4976C4.33814 15.0004 5.02548 20.1487 8.69313 22.9831C9.52727 23.6277 9.88388 23.6652 9.94567 23.6671C9.98466 23.6441 10.1609 23.5192 10.4654 22.9775C10.7222 22.5208 10.9518 21.9988 11.2332 21.359C11.3799 21.0256 11.5406 20.6603 11.7266 20.2554C12.2346 19.1497 12.8765 17.8895 13.7887 16.7091C14.7009 15.5287 15.7585 14.5897 16.7004 13.8193C17.0453 13.5372 17.3583 13.2896 17.6439 13.0636C18.1921 12.6299 18.6392 12.2761 19.0165 11.9124C19.4639 11.4811 19.5403 11.2791 19.5526 11.2356C19.5352 11.1763 19.4091 10.8406 18.5749 10.196C14.9072 7.36167 9.75195 7.99487 7.04505 11.4976Z"
                        fill="white"
                        stroke="white"
                        stroke-width="3"
                    ></path>
                </svg>
            </div>
            <div class="break"></div>
            <p>About</p>
            <p>Get Started</p>
            <div class="break"></div>
            <p>Contact</p>
            <p>Technology</p>
            <p>Toolbox</p>
            <h6>
                This website is not affiliated with Apple and does not have the endorsement of our designs by Apple. While our designs may incorporate design techniques inspired by various sources, including Apple, we emphasize that we
                operate independently and strive to create unique and innovative templates. Our aim is to provide you with visually appealing and functional design solutions that cater to your needs. Any references to Apple or other
                companies are solely for explanatory purposes, and we do not claim any official association with these entities.
            </h6>
        </div>
    </div>
    `;
}
else if (window.outerWidth > 750 && window.outerWidth < 1199) {
    document.body.innerHTML = `
    <div id="tblt">
        <div class="tablet-container">
            <div id="t-topbar">
            <svg width="787" height="35" viewBox="0 0 787 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="762.5" y1="9.5" x2="785.5" y2="9.5" stroke="white" stroke-width="3" stroke-linecap="round"/>
                <line x1="762.5" y1="18.1665" x2="785.5" y2="18.1665" stroke="white" stroke-width="3" stroke-linecap="round"/>
                <line x1="762.5" y1="27.5" x2="785.5" y2="27.5" stroke="white" stroke-width="3" stroke-linecap="round"/>
                <path d="M30.1532 26.0787C27.4552 29.5883 22.3015 30.2347 18.6267 27.4098C17.7909 26.7673 17.6638 26.432 17.6463 26.3727C17.6585 26.3291 17.7344 26.1269 18.1807 25.6945C18.557 25.3299 19.0033 24.9749 19.5503 24.5398C19.8354 24.3131 20.1478 24.0646 20.4919 23.7817C21.4318 23.0088 22.487 22.0672 23.3962 20.8845C24.3054 19.7017 24.9441 18.4399 25.4492 17.3329C25.6342 16.9276 25.794 16.5618 25.9398 16.228C26.2196 15.5875 26.4479 15.065 26.7035 14.6075C27.0067 14.065 27.1825 13.9397 27.2214 13.9167C27.2832 13.9184 27.6399 13.955 28.4757 14.5975C32.1506 17.4224 32.8511 22.569 30.1532 26.0787Z" fill="white" stroke="white" stroke-width="3"/>
                <path d="M7.04505 8.49762C4.33814 12.0004 5.02548 17.1487 8.69313 19.9831C9.52727 20.6277 9.88388 20.6652 9.94567 20.6671C9.98466 20.6441 10.1609 20.5192 10.4654 19.9775C10.7222 19.5208 10.9518 18.9988 11.2332 18.359C11.3799 18.0256 11.5406 17.6603 11.7266 17.2554C12.2346 16.1497 12.8765 14.8895 13.7887 13.7091C14.7009 12.5287 15.7585 11.5897 16.7004 10.8193C17.0453 10.5372 17.3583 10.2896 17.6439 10.0636C18.1921 9.62988 18.6392 9.27607 19.0165 8.91238C19.4639 8.48107 19.5403 8.27909 19.5526 8.23558C19.5352 8.17627 19.4091 7.84064 18.5749 7.19601C14.9072 4.36167 9.75195 4.99487 7.04505 8.49762Z" fill="white" stroke="white" stroke-width="3"/>
            </svg>
            </div>
            <div id="t-maintxt">
                <div id="t-tlte-txt">We help businesses improve their digital presence.</div>
                <div id="t-btns">
                    <button id="t-cons" class="frosted-glass-effect" onclick='location.href="onboarding.html"'>Free Consultation</button>
                    <button id="t-abt">About</button>
                </div>
            </div>
        </div>
        <div id="t-what-we-do">
            <h1>Sovex can...</h1>
            <div class="break"></div>
            <!-- break -->
            <div id="t-wht-we-do-ex">
                <h1 id="dfmslkfm">Design, develop, and deploy a perfect website</h1>
                <img src="web-dev-svg.svg" />
            </div>
            <div id="t-wht-we-do-ex">
                <h1>Improve search engine optimization and Google ranking</h1>
                <img src="web-seo-svg.svg" />
            </div>
            <div id="t-wht-we-do-ex">
                <h1>Create custom AI chat bots and customer support agents</h1>
                <img src="web-ai-svg.svg" />
            </div>
        </div>
        <div id="t-tech-stack">
            <h1>Our technology</h1>
            <div class="break"></div>
            <div id="t-tech-stack-ex">
                <div class="t-tch-stack-ex-img"><img src="l-webflow.png" /></div>
                <div class="t-tch-stack-ex-txt">
                    <h1>Webflow</h1>
                    <p>For website testing &amp; development</p>
                </div>
            </div>

            <div id="t-tech-stack-ex">
                <div class="t-tch-stack-ex-img"><img src="l-openai.png" /></div>
                <div class="t-tch-stack-ex-txt">
                    <h1>OpenAI</h1>
                    <p>For AI customer service integration</p>
                </div>
            </div>
            <div id="t-tech-stack-ex">
                <div class="t-tch-stack-ex-img"><img src="l-figma.png" /></div>
                <div class="t-tch-stack-ex-txt">
                    <h1>Figma</h1>
                    <p>For website design &amp; mockups</p>
                </div>
            </div>
            <div id="t-tech-stack-ex">
                <div class="t-tch-stack-ex-img"><img src="l-make.png" /></div>
                <div class="t-tch-stack-ex-txt">
                    <h1>Make</h1>
                    <p>For automating sign-ups and onboarding</p>
                </div>
            </div>
        </div>
        <div id="t-team">
            <h1>Our Team</h1>
            <div class="break"></div>
            <p>Sovex hosts a dynamic team of professional designers, strategists, and developers. When you join us, a dedicated group collaborates to analyze and enhance your business operations.</p>
            <img src="tablet-emojicons.png" />
            <div class="break"></div>

            <div class="t-team-ex-img"></div>
        </div>
        <div id="t-footer">
            <div class="break"></div>

            <div class="t-svx-lgo">
                <h1>Sovex</h1>
                <svg height="38" viewBox="" fill="none" xmlns="http://www.w3.org/2000/svg" width="38">
                    <path
                        d="M30.1532 29.0787C27.4552 32.5883 22.3015 33.2347 18.6267 30.4098C17.7909 29.7673 17.6638 29.432 17.6463 29.3727C17.6585 29.3291 17.7344 29.1269 18.1807 28.6945C18.557 28.3299 19.0033 27.9749 19.5503 27.5398C19.8354 27.3131 20.1478 27.0646 20.4919 26.7817C21.4318 26.0088 22.487 25.0672 23.3962 23.8845C24.3054 22.7017 24.9441 21.4399 25.4492 20.3329C25.6342 19.9276 25.794 19.5618 25.9398 19.228C26.2196 18.5875 26.4479 18.065 26.7035 17.6075C27.0067 17.065 27.1825 16.9397 27.2214 16.9167C27.2832 16.9184 27.6399 16.955 28.4757 17.5975C32.1506 20.4224 32.8511 25.569 30.1532 29.0787Z"
                        fill="white"
                        stroke="white"
                        stroke-width="3"
                    ></path>
                    <path
                        d="M7.04505 11.4976C4.33814 15.0004 5.02548 20.1487 8.69313 22.9831C9.52727 23.6277 9.88388 23.6652 9.94567 23.6671C9.98466 23.6441 10.1609 23.5192 10.4654 22.9775C10.7222 22.5208 10.9518 21.9988 11.2332 21.359C11.3799 21.0256 11.5406 20.6603 11.7266 20.2554C12.2346 19.1497 12.8765 17.8895 13.7887 16.7091C14.7009 15.5287 15.7585 14.5897 16.7004 13.8193C17.0453 13.5372 17.3583 13.2896 17.6439 13.0636C18.1921 12.6299 18.6392 12.2761 19.0165 11.9124C19.4639 11.4811 19.5403 11.2791 19.5526 11.2356C19.5352 11.1763 19.4091 10.8406 18.5749 10.196C14.9072 7.36167 9.75195 7.99487 7.04505 11.4976Z"
                        fill="white"
                        stroke="white"
                        stroke-width="3"
                    ></path>
                </svg>
            </div>
            <div class="break"></div>
            <p>About</p>
            <p>Get Started</p>
            <div class="break"></div>
            <p>Contact</p>
            <p>Technology</p>
            <p>Toolbox</p>
            <h6>
                This website is not affiliated with Apple and does not have the endorsement of our designs by Apple. While our designs may incorporate design techniques inspired by various sources, including Apple, we emphasize that we
                operate independently and strive to create unique and innovative templates. Our aim is to provide you with visually appealing and functional design solutions that cater to your needs. Any references to Apple or other
                companies are solely for explanatory purposes, and we do not claim any official association with these entities.
            </h6>
        </div>
    </div>
    `;
}
else if (window.outerWidth > 0 && window.outerWidth < 749) {
    document.body.innerHTML = `
    <div id="mble">
        <div class="mobile-container">
            <div id="m-topbar">
                <svg width="707" height="70" viewBox="0 0 707 70" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="655.19" y1="8.61902" x2="704.809" y2="8.61902" stroke="white" stroke-width="3" stroke-linecap="round"></line>
<line x1="655.19" y1="26.1584" x2="704.809" y2="26.1584" stroke="white" stroke-width="3" stroke-linecap="round"></line>
<line x1="655.19" y1="45.0476" x2="704.809" y2="45.0476" stroke="white" stroke-width="3" stroke-linecap="round"></line>
<path d="M62.2417 53.7142C56.2423 61.5186 44.8411 62.9011 36.7608 56.6896C34.661 55.0755 34.2046 54.0393 34.1744 53.444C34.1446 52.8564 34.4956 52.0897 35.7255 50.8979C36.5405 50.1082 37.5362 49.3158 38.6864 48.4005C39.2532 47.9494 39.8575 47.4685 40.4962 46.9434C42.3665 45.4056 44.3973 43.5866 46.1318 41.3302C47.8664 39.0738 49.102 36.6436 50.1072 34.4408C50.4505 33.6886 50.7598 32.9809 51.05 32.3172C51.6388 30.9703 52.1485 29.8044 52.7021 28.8137C53.5376 27.3187 54.1883 26.7823 54.7638 26.6601C55.3468 26.5362 56.4656 26.7109 58.5653 28.325C66.6456 34.5365 68.241 45.9099 62.2417 53.7142Z" fill="white" stroke="white" stroke-width="3"></path>
<path d="M13.0426 16.2584C7.02333 24.0474 8.58967 35.4249 16.654 41.6569C18.7496 43.2764 19.8678 43.4539 20.4512 43.3315C21.027 43.2107 21.6791 42.676 22.5184 41.1831C23.0745 40.1939 23.5872 39.0292 24.1795 37.6838C24.4713 37.0209 24.7825 36.314 25.1277 35.5626C26.1385 33.3625 27.3803 30.9354 29.1206 28.6834C30.8609 26.4315 32.8964 24.6177 34.7705 23.0847C35.4106 22.5612 36.0161 22.0818 36.584 21.6322C37.7366 20.7198 38.7343 19.93 39.5513 19.1424C40.7843 17.9537 41.1373 17.1879 41.109 16.6002C41.0803 16.0048 40.6265 14.9675 38.5309 13.348C30.4666 7.116 19.0619 8.46946 13.0426 16.2584Z" fill="white" stroke="white" stroke-width="3"></path>
</svg>


            </div>
            <div id="m-maintxt">
                <div id="m-tlte-txt">We help businesses improve their digital presence.</div>
                <div id="m-btns">
                    <button id="m-cons" class="frosted-glass-effect" onclick='location.href="onboarding.html"'>Free Consultation</button>
                    <button id="m-abt">About</button>
                </div>
            </div>
        </div>
        <div id="m-what-we-do">
            <h1>What we do</h1>
            <div class="break"></div>
            <!-- break -->
            <div id="m-wht-we-do-ex">
                <h1 id="dfmslkfm">Design, develop, and deploy a perfect website</h1>
                <img src="web-dev-svg.svg">
            </div>
            <div id="m-wht-we-do-ex">
                <h1>Improve search engine optimization and Google ranking</h1>
                <img src="web-seo-svg.svg">
            </div>
            <div id="m-wht-we-do-ex">
                <h1>Create custom AI chat bots and customer support agents</h1>
                <img src="web-ai-svg.svg">
            </div>
        </div>
        <div id="m-tech-stack">
            <h1>Our technology</h1>
            <div class="break"></div>
            <div id="m-tech-stack-ex">
                <div class="m-tch-stack-ex-img"><img src="webflow.png"></div>
                <div class="m-tch-stack-ex-txt">
                    <h1>Webflow</h1>
                    <p>For website testing &amp; development</p>
                </div>
            </div>

            <div id="m-tech-stack-ex">
                <div class="m-tch-stack-ex-txt">
                    <h1>OpenAI</h1>
                    <p>For AI customer service integration</p>
                </div><div class="m-tch-stack-ex-img"><img src="openai.png"></div>
                
            </div>
            <div id="m-tech-stack-ex">
                <div class="m-tch-stack-ex-img"><img src="figma.png"></div>
                <div class="m-tch-stack-ex-txt">
                    <h1>Figma</h1>
                    <p>For website design &amp; mockups</p>
                </div>
            </div>
            <div id="m-tech-stack-ex">
                <div class="m-tch-stack-ex-txt">
                    <h1>Make</h1>
                    <p>For automating sign-ups and onboarding</p>
                </div><div class="m-tch-stack-ex-img"><img src="make.png"></div>
                
            </div>
        </div>
        <div id="m-team">
            <h1>Our Team</h1>
            <div class="break"></div>
            <img src="mobile-emojicons.png"><p>Sovex hosts a dynamic team of professional designers, strategists, and developers. When you join us, a dedicated group collaborates to analyze and enhance your business operations.</p>
            
            <div class="break"></div>

            <div class="m-team-ex-img"></div>
        </div>
        <div id="m-footer">
            <div class="break"></div>

            <div class="m-svx-lgo">
                <h1>Sovex</h1>
                <svg height="38" viewBox="" fill="none" xmlns="http://www.w3.org/2000/svg" width="38">
                    <path d="M30.1532 29.0787C27.4552 32.5883 22.3015 33.2347 18.6267 30.4098C17.7909 29.7673 17.6638 29.432 17.6463 29.3727C17.6585 29.3291 17.7344 29.1269 18.1807 28.6945C18.557 28.3299 19.0033 27.9749 19.5503 27.5398C19.8354 27.3131 20.1478 27.0646 20.4919 26.7817C21.4318 26.0088 22.487 25.0672 23.3962 23.8845C24.3054 22.7017 24.9441 21.4399 25.4492 20.3329C25.6342 19.9276 25.794 19.5618 25.9398 19.228C26.2196 18.5875 26.4479 18.065 26.7035 17.6075C27.0067 17.065 27.1825 16.9397 27.2214 16.9167C27.2832 16.9184 27.6399 16.955 28.4757 17.5975C32.1506 20.4224 32.8511 25.569 30.1532 29.0787Z" fill="white" stroke="white" stroke-width="3"></path>
                    <path d="M7.04505 11.4976C4.33814 15.0004 5.02548 20.1487 8.69313 22.9831C9.52727 23.6277 9.88388 23.6652 9.94567 23.6671C9.98466 23.6441 10.1609 23.5192 10.4654 22.9775C10.7222 22.5208 10.9518 21.9988 11.2332 21.359C11.3799 21.0256 11.5406 20.6603 11.7266 20.2554C12.2346 19.1497 12.8765 17.8895 13.7887 16.7091C14.7009 15.5287 15.7585 14.5897 16.7004 13.8193C17.0453 13.5372 17.3583 13.2896 17.6439 13.0636C18.1921 12.6299 18.6392 12.2761 19.0165 11.9124C19.4639 11.4811 19.5403 11.2791 19.5526 11.2356C19.5352 11.1763 19.4091 10.8406 18.5749 10.196C14.9072 7.36167 9.75195 7.99487 7.04505 11.4976Z" fill="white" stroke="white" stroke-width="3"></path>
                </svg>
            </div>
            <div class="break"></div>
            <p>About</p>
            <p>Get Started</p>
            <div class="break"></div>
            <p>Contact</p>
            <p>Technology</p>
            <p>Toolbox</p>
            <h6>
                This website is not affiliated with Apple and does not have the endorsement of our designs by Apple. While our designs may incorporate design techniques inspired by various sources, including Apple, we emphasize that we
                operate independently and strive to create unique and innovative templates. Our aim is to provide you with visually appealing and functional design solutions that cater to your needs. Any references to Apple or other
                companies are solely for explanatory purposes, and we do not claim any official association with these entities.
            </h6>
        </div>
    </div>
    `;
}