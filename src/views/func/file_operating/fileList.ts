export default [
    {
        filename: '3D 盒子',
        htmlStr: `<html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <link rel="stylesheet" href="style.css" />
            <title>3D 盒子</title>
            <style>
                html,
                body {
                    margin: 0;
                }
    
                * {
                    box-sizing: border-box;
                }
    
                body {
                    background-color: #2f3542;
                }
    
                main {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                }
    
                .cube {
                    width: 250px;
                    height: 250px;
                    transform-style: preserve-3d;
                    transform-origin: 125px 125px 0;
                    animation: rotate-cube 10s ease-in-out infinite;
                }
    
                .cube>div {
                    width: 250px;
                    height: 250px;
                    background-size: cover;
                    background-position: center center;
                    opacity: 0.8;
                    position: absolute;
                    box-shadow: inset 0 0 4px 2px rgba(106, 106, 106, 0.4);
                }
    
                /* 前 */
                .cube .img1 {
                    background-image: url("https://images.pexels.com/photos/274131/pexels-photo-274131.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
                    transform: rotateY(0deg) translateZ(125px);
                }
    
                /* 右 */
                .cube .img2 {
                    background-image: url("https://images.pexels.com/photos/1480690/pexels-photo-1480690.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
                    transform: rotateY(90deg) translateZ(125px);
                }
    
                /* 左 */
                .cube .img3 {
                    background-image: url("https://images.pexels.com/photos/36487/above-adventure-aerial-air.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
                    transform: rotateY(-90deg) translateZ(125px);
                }
    
                /* 下 */
                .cube .img4 {
                    background-image: url("https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
                    transform: rotateX(90deg) translateZ(125px);
                }
    
                /* 上 */
                .cube .img5 {
                    background-image: url("https://images.pexels.com/photos/325044/pexels-photo-325044.jpeg?cs=srgb&dl=close-up-of-fish-over-black-background-325044.jpg&fm=jpg");
                    transform: rotateX(-90deg) translateZ(125px);
                }
    
                /* 后 */
                .cube .img6 {
                    background-image: url("https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
                    transform: rotateY(180deg) translateZ(125px);
                }
    
                @keyframes rotate-cube {
                    0% {
                        transform: rotateX(0deg) rotateY(0deg);
                    }
    
                    20% {
                        /* 右边图片 */
                        transform: rotateY(-90deg);
                    }
    
                    40% {
                        /* 上 */
                        transform: rotateX(-90deg);
                    }
    
                    60% {
                        /* 左 */
                        transform: rotateY(90deg);
                    }
    
                    80% {
                        /* 下 */
                        transform: rotateX(90deg);
                    }
    
                    100% {
                        transform: rotateX(0deg) rotateY(0deg);
                    }
                }
            </style>
        </head>
        <body>
            <main>
                <div class="cube">
                    <div class="img1"></div>
                    <div class="img2"></div>
                    <div class="img3"></div>
                    <div class="img4"></div>
                    <div class="img5"></div>
                    <div class="img6"></div>
                </div>
            </main>
        </body>
    </html>`,
    },
    {
        filename: '按钮hover发光特效',
        htmlStr: `
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                <link href="https://cdn.bootcss.com/font-awesome/5.11.2/css/all.css" rel="stylesheet" />
                <link rel="stylesheet" href="style.css" />
                <title>按钮hover发光特效</title>
                <style>
                    html,
                    body {
                        margin: 0;
                    }
        
                    * {
                        box-sizing: border-box;
                    }
        
                    ul,
                    li {
                        margin: 0;
                        padding: 0;
                    }
        
                    li {
                        list-style: none;
                    }
        
                    main {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 100vw;
                        height: 100vh;
                        position: relative;
                        background: #2c3a47;
                        z-index: 25;
                    }
        
                    ul {
                        display: flex;
                    }
        
                    ul li {
                        margin: 0 18px;
                    }
        
                    li a {
                        position: relative;
                        display: block;
                        color: white;
                        width: 64px;
                        height: 64px;
                        font-size: 36px;
                        text-align: center;
                        line-height: 66px;
                        border-radius: 50%;
                        background: #2c3a47;
                        transition: 0.6s;
                    }
        
                    li a:hover {
                        text-shadow: 0 0 4px #25ccf7;
                    }
        
                    li a::before {
                        content: "";
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        top: 0;
                        left: 0;
                        border-radius: 50%;
                        background: #25ccf7;
                        transition: 0.6s;
                        transform: scale(0.8);
                        z-index: -1;
                    }
        
                    li a:hover::before {
                        box-shadow: 0 0 14px 2px #25ccf7;
                        transform: scale(1.05);
                    }
        
                    /* bilibili */
                    .svg-icon {
                        transition: 0.6s;
                        filter: invert(1);
                    }
        
                    li a:hover .svg-icon {
                        filter: invert(1) drop-shadow(0 0 2px rgb(37, 204, 247));
                    }
        
                    @media screen and (max-width: 512px) {
                        ul {
                            flex-direction: column;
                        }
        
                        ul li {
                            margin: 18px 0;
                        }
                    }
                </style>
            </head>
            <body>
                <main>
                    <ul>
                        <li>
                            <a href=""><i class="fab fa-weixin"></i></a>
                        </li>
                        <li>
                            <a href=""><i class="fab fa-weibo"></i></a>
                        </li>
                        <li>
                            <a href=""><i class="fab fa-github"></i></a>
                        </li>
                        <li>
                            <a href=""><i class="fab fa-linkedin"></i></a>
                        </li>
                    </ul>
                </main>
            </body>
        </html>`
    },
    {
        filename: '登录表单',
        htmlStr: `<html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            http-equiv="X-UA-Compatible"
            content="ie=edge"
          />
          <title>登录表单</title>
          <style>
              html,
              body {
                margin: 0;
                font-family: "PingFang SC", "Microsoft Yahei", sans-serif;
              }
              
              .container {
                width: 100vw;
                height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
                background: linear-gradient(to top right,blue,red) fixed no-repeat;
                background-size: cover;
              }
              
              .login-form {
                width: 240px;
                height: 220px;
                display: flex;
                flex-direction: column;
                padding: 40px;
                text-align: center;
                position: relative;
                z-index: 100;
                background: inherit;
                border-radius: 18px;
                overflow: hidden; /* 隐藏多余的模糊效果 */
              }
              
              .login-form::before {
                content: "";
                width: calc(100% + 20px);
                height: calc(100% + 20px);
                position: absolute;
                top: -10px;
                left: -10px;
                overflow: hidden;
                background: inherit;
                box-shadow: inset 0 0 0 200px rgba(255, 255, 255, 0.25);
                filter: blur(6px);
                z-index: -1;
              }
              
              .login-form h2 {
                font-size: 18px;
                font-weight: 400;
               color: #fff;
              }
              
              .login-form input,
              .login-form button {
                margin: 6px 0;
                height: 36px;
                border: none;
                background-color: rgba(255, 255, 255, 0.3);
                border-radius: 4px;
                padding: 0 14px;
               color: #fff;
              }
              
              .login-form input::placeholder {
                color: #fff;
              }
              
              /* 补充，取消选中高亮蓝框 */
              .login-form button:focus,
              .login-form input:focus {
                outline: 0;
              }
              
              .login-form button {
                margin-top: 24px;
                background-color: rgba(57, 88, 69, 0.4);
                color: white;
                position: relative;
                overflow: hidden;
                cursor: pointer;
                transition: 0.4s;
              }
              
              .login-form button:hover {
                background-color: rgba(12, 80, 38, 0.67);
              }
              
              .login-form button:focus {
                outline: 0;
              }
              
              .login-form button::before,
              .login-form button::after {
                content: "";
                display: block;
                width: 80px;
                height: 100%;
                background: rgba(179, 255, 210, 0.5);
                opacity: 0.5;
                position: absolute;
                top: 0;
                left: 0;
                transform: skewX(-15deg);
                filter: blur(30px);
                overflow: hidden;
                transform: translateX(-100px);
              }
              
              .login-form button::after {
                width: 40px;
                background: rgba(179, 255, 210, 0.3);
                left: 60px;
                opacity: 0;
                filter: blur(5px);
              }
              
              .login-form button:hover::before {
                transition: 1s;
                transform: translateX(320px);
                opacity: 0.7;
              }
              
              .login-form button:hover::after {
                transition: 1s;
                transform: translateX(320px);
                opacity: 1;
              }
              
          </style>
        </head>
        <body>
          <div class="container">
              <form action="#" class="login-form">
                <h2>登 录</h2>
                <input
                  type="text"
                  name="username"
                  placeholder="用户名"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="密码"
                />
                <button type="submit">登录</button>
              </form>
            </div>
          </div>
        </body>
      </html>`
    },
    {
        filename: '模拟工厂',
        htmlStr: `<html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <link rel="stylesheet" href="style.css" />
          <title>模拟工厂</title>
          <style>
              * {
                padding: 0;
                margin: 0;
                box-sizing: border-box;
              }
              
              main {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
              }
              
              #boards {
                transform-box: fill-box;
                transform-origin: center;
                animation: 2s linear swing alternate infinite;
              }
              
              #string {
                transform-box: fill-box;
                transform-origin: 0 10px;
                animation: 2s linear swing2 alternate infinite;
              }
              
              #truck {
                transform-box: fill-box;
                transform-origin: center;
                animation: 1s linear bounce alternate infinite;
              }
              
              .smoke {
                transform-box: fill-box;
                transform-origin: 40% bottom;
                animation: 10s linear smoke infinite;
              }
              
              .smoke2 {
                animation: 12s linear 2s smoke infinite;
              }
              
              #building-smoke {
                animation: 2s linear 1s building-smoke alternate infinite;
              }
              
              #cloud {
                animation: 60s linear cloud infinite;
              }
              
              @keyframes swing {
                from {
                  transform: rotate(-10deg) translateX(9px);
                }
                to {
                  transform: rotate(10deg) translateX(-9px);
                }
              }
              
              @keyframes swing2 {
                from {
                  transform: rotate(-10deg);
                }
                to {
                  transform: rotate(10deg);
                }
              }
              
              @keyframes bounce {
                from {
                  transform: translateY(-2px);
                }
                to {
                  transform: translateY(0px);
                }
              }
              
              @keyframes smoke {
                from {
                  transform: scale(0);
                  opacity: 1;
                }
              
                30% {
                  transform: scale(0.7) translateY(-10px);
                }
              
                60% {
                  opacity: 1;
                }
              
                to {
                  transform: scale(2) translateY(-100px);
                  opacity: 0;
                }
              }
              
              @keyframes building-smoke {
                from {
                  opacity: 1;
                }
                to {
                  opacity: 0.5;
                }
              }
              
              @keyframes cloud {
                from {
                  transform: translateX(-400px);
                }
                to {
                  transform: translateX(800px);
                }
              }
              
          </style>
        </head>
        <body>
          <main>
            <svg
              id="b6c881ec-80a2-4aeb-a87c-bea63cd39014"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              width="888"
              height="460.52563"
              viewBox="0 0 888 460.52563"
            >
              <title>factory</title>
              <path
                d="M369.70122,672.44322l-21.87443-34.71387,21.88457,38.49557.01173,3.95547q2.34084-.02736,4.63442-.17946l-1.78417-50.81218.02346-.39275-.0402-.075-.16988-4.80142,22.87164-38.04637-22.89523,34.4507-.06851,1.017-1.34778-38.39059,19.66232-39.36387-19.816,32.61808-.92176-79.573-.00422-.26483-.00317.2606-.44881,62.73791-18.78843-25.10244,18.80506,30.50606.08719,34.362-17.4329-33.18692,17.44253,38.23878.04824,19.107L344.254,577.08157l25.34285,52.87363Z"
                transform="translate(-156 -219.73719)"
                fill="#e2e2e2"
              />
              <path
                d="M557.41283,672.44322,535.5384,637.72935,557.423,676.22492l.01173,3.95547q2.34084-.02736,4.63442-.17946L560.285,629.18875l.02346-.39275-.0402-.075-.16988-4.80142L582.97,585.87323l-22.89524,34.4507-.0685,1.017-1.34778-38.39059,19.66232-39.36387-19.816,32.61808-.92176-79.573-.00423-.26483-.00317.2606-.4488,62.73791-18.78843-25.10244,18.80506,30.50606.08719,34.362-17.43291-33.18692,17.44254,38.23878.04823,19.107-25.32288-46.20808,25.34285,52.87363Z"
                transform="translate(-156 -219.73719)"
                fill="#e2e2e2"
              />
              <path
                d="M181.81131,674.67584l-15.79541-25.0667,15.80273,27.79745.00847,2.85622q1.6903-.01975,3.34649-.12959l-1.28834-36.6912.01694-.2836-.029-.05415-.12267-3.46707L200.266,612.16411l-16.53253,24.87667-.04946.73435-.97323-27.72164,14.19806-28.42444-14.309,23.55334-.6656-57.45927-.00305-.19123-.00229.18817-.32408,45.30272-13.567-18.12634,13.579,22.02826.063,24.81262-12.58821-23.9641,12.59516,27.612.03484,13.79707L163.436,605.8157l18.29994,38.17977Z"
                transform="translate(-156 -219.73719)"
                fill="#e2e2e2"
              />
              <path
                d="M1013.94505,672.44322l-21.87443-34.71387,21.88456,38.49557.01173,3.95547q2.34084-.02736,4.63443-.17946l-1.78418-50.81218.02346-.39275-.04019-.075-.16989-4.80142,22.87164-38.04637-22.89523,34.4507-.0685,1.017-1.34778-38.39059,19.66231-39.36387-19.816,32.61808-.92176-79.573-.00422-.26483-.00317.2606-.44881,62.73791-18.78843-25.10244,18.80506,30.50606.0872,34.362-17.43291-33.18692,17.44253,38.23878.04824,19.107-25.32289-46.20808,25.34285,52.87363Z"
                transform="translate(-156 -219.73719)"
                fill="#e2e2e2"
              />
              <g id="truck">
                <g id="boards">
                  <rect
                    x="420.71394"
                    y="615.03256"
                    width="118"
                    height="5"
                    transform="translate(803.42788 1015.32794) rotate(-180)"
                    fill="#6c63ff"
                  />
                  <rect
                    x="414.71394"
                    y="610.03256"
                    width="118"
                    height="5"
                    transform="translate(791.42788 1005.32794) rotate(-180)"
                    fill="#6c63ff"
                  />
                  <rect
                    x="421.71394"
                    y="605.03256"
                    width="118"
                    height="5"
                    transform="translate(805.42788 995.32794) rotate(-180)"
                    fill="#6c63ff"
                  />
                  <rect
                    x="433.71394"
                    y="600.03256"
                    width="118"
                    height="5"
                    transform="translate(829.42788 985.32794) rotate(-180)"
                    fill="#6c63ff"
                  />
                </g>
                <rect
                  x="333.31299"
                  y="577.93732"
                  width="4.09697"
                  height="29.08849"
                  transform="translate(514.72295 965.22594) rotate(-180)"
                  fill="#3f3d56"
                />
                <rect
                  x="407.83085"
                  y="466.88793"
                  width="4.09697"
                  height="163.62126"
                  transform="translate(-100.38591 915.10754) rotate(-112.09151)"
                  fill="#3f3d56"
                />
                <rect
                  x="257.51902"
                  y="636.524"
                  width="35.64365"
                  height="13.9297"
                  transform="translate(394.6817 1067.24052) rotate(-180)"
                  fill="#3f3d56"
                />
                <rect
                  x="260.7966"
                  y="648.81492"
                  width="175.76006"
                  height="15.56849"
                  transform="translate(541.35326 1093.46114) rotate(-180)"
                  fill="#3f3d56"
                />
                <polygon
                  points="133.68 436.862 175.879 436.862 175.879 383.806 144.332 383.806 133.68 410.565 133.68 436.862"
                  fill="#e2e2e2"
                />
                <rect
                  x="307.29722"
                  y="606.82096"
                  width="18.02667"
                  height="18.02667"
                  transform="translate(476.62112 1011.93141) rotate(-180)"
                  fill="#fff"
                />
                <polygon
                  points="137.777 405.315 149.249 405.315 149.249 387.289 144.332 387.289 137.777 405.315"
                  fill="#fff"
                />
                <rect
                  x="320.40753"
                  y="635.09006"
                  width="4.09697"
                  height="7.78425"
                  transform="translate(488.91203 1058.22719) rotate(-180)"
                  fill="#3f3d56"
                />
                <path
                  d="M297.66934,618.49733h.20485a3.89212,3.89212,0,0,1,3.89212,3.89212v0a3.89212,3.89212,0,0,1-3.89212,3.89212h-.20485a0,0,0,0,1,0,0v-7.78425A0,0,0,0,1,297.66934,618.49733Z"
                  transform="translate(443.43566 1025.04172) rotate(180)"
                  fill="#3f3d56"
                />
                <path
                  d="M450.07667,648.81492h.20485a3.89212,3.89212,0,0,1,3.89212,3.89212v0a3.89212,3.89212,0,0,1-3.89212,3.89212h-.20485a0,0,0,0,1,0,0v-7.78425A0,0,0,0,1,450.07667,648.81492Z"
                  transform="matrix(-1, 0, 0, -1, 748.25029, 1085.6769)"
                  fill="#3f3d56"
                />
                <path
                  d="M273.29236,648.75613a20.2704,20.2704,0,0,0-15.75558,7.843h-8.00685l7.78425-21.68366,36.25819-7.151-1.02424,28.83466H289.048A20.27042,20.27042,0,0,0,273.29236,648.75613Z"
                  transform="translate(-156 -219.73719)"
                  fill="#e2e2e2"
                />
                <circle cx="116.88267" cy="441.98319" r="17.82182" fill="#3f3d56" />
                <circle cx="116.88267" cy="441.98319" r="9.37991" fill="#e2e2e2" />
                <circle cx="277.89363" cy="444.03168" r="15.56849" fill="#3f3d56" />
                <circle cx="277.89363" cy="444.03168" r="8.19394" fill="#e2e2e2" />
                <rect
                  x="330.64996"
                  y="596.16884"
                  width="8.60364"
                  height="62.06911"
                  transform="translate(513.90356 1034.6696) rotate(-180)"
                  fill="#3f3d56"
                />
                <rect
                  x="330.64996"
                  y="646.97128"
                  width="123.72853"
                  height="3.68727"
                  transform="translate(629.02844 1077.89265) rotate(-180)"
                  fill="#3f3d56"
                />
                <rect
                  x="299.30813"
                  y="625.87188"
                  width="4.09697"
                  height="1.63879"
                  transform="translate(446.71323 1033.64536) rotate(-180)"
                  fill="#3f3d56"
                />
                <g id="string">
                  <path
                    d="M480.39425,620.00189a.40971.40971,0,0,1-.10422-.31848l5.65034-53.43206a.40987.40987,0,0,1,.40569-.36669h.0018a.40985.40985,0,0,1,.4071.36309L492.866,619.569a.40975.40975,0,0,1-.4033.4563l-11.76139.11083h-.0038A.40928.40928,0,0,1,480.39425,620.00189Zm5.97-49.96645-5.211,49.27688L492,619.2103Z"
                    transform="translate(-156 -219.73719)"
                    fill="#3f3d56"
                  />
                </g>
                <path
                  d="M255.88024,635.70461h.20485a3.89212,3.89212,0,0,1,3.89212,3.89212v0a3.89212,3.89212,0,0,1-3.89212,3.89212h-.20485a0,0,0,0,1,0,0v-7.78425A0,0,0,0,1,255.88024,635.70461Z"
                  transform="translate(86.94131 -269.62329) rotate(20.71738)"
                  fill="#3f3d56"
                />
                <rect
                  x="484.49122"
                  y="516.07305"
                  width="4.09697"
                  height="59.81578"
                  transform="translate(817.07942 872.2247) rotate(-180)"
                  fill="#3f3d56"
                />
                <circle cx="179.36148" cy="359.01953" r="5.73576" fill="#3f3d56" />
                <rect
                  x="343.71394"
                  y="642.03256"
                  width="118"
                  height="5"
                  transform="translate(649.42788 1069.32794) rotate(-180)"
                  fill="#6c63ff"
                />
                <rect
                  x="350.71394"
                  y="637.03256"
                  width="118"
                  height="5"
                  transform="translate(663.42788 1059.32794) rotate(-180)"
                  fill="#6c63ff"
                />
                <rect
                  x="345.71394"
                  y="633.03256"
                  width="118"
                  height="5"
                  transform="translate(653.42788 1051.32794) rotate(-180)"
                  fill="#6c63ff"
                />
                <rect
                  x="352.71394"
                  y="628.03256"
                  width="118"
                  height="5"
                  transform="translate(667.42788 1041.32794) rotate(-180)"
                  fill="#6c63ff"
                />
              </g>
              <g id="cloud">
                <path
                  d="M538.33725,341.97939a15.59567,15.59567,0,0,1,10.23657,3.81414,15.60631,15.60631,0,0,1,6.88715-.30262,15.65993,15.65993,0,0,1,28.55484,8.887H523.01887A15.66484,15.66484,0,0,1,538.33725,341.97939Z"
                  transform="translate(-156 -219.73719)"
                  fill="#e2e2e2"
                />
                <path
                  d="M446.57156,391.32748a14.74417,14.74417,0,0,1,9.67768,3.6059,14.75453,14.75453,0,0,1,6.51113-.2861,14.80494,14.80494,0,0,1,26.99582,8.40174H432.08953A14.80958,14.80958,0,0,1,446.57156,391.32748Z"
                  transform="translate(-156 -219.73719)"
                  fill="#e2e2e2"
                />
                <path
                  d="M354.82419,309.93539a15.34075,15.34075,0,0,1,10.06927,3.75181,15.35133,15.35133,0,0,1,6.77459-.29768,15.404,15.404,0,0,1,28.08814,8.7417h-60A15.40882,15.40882,0,0,1,354.82419,309.93539Z"
                  transform="translate(-156 -219.73719)"
                  fill="#e2e2e2"
                />
              </g>
              <g id="building-smoke">
                <path
                  d="M750.99875,464.92273V589.82849H799.573V463.18787l-11.27588.40271V438.03321h-8.17871l-1.34766-56.60376c3.30029-2.15052,5.62305-7.25818,5.62305-13.222a21.66875,21.66875,0,0,0-.59375-5.084,10.4004,10.4004,0,0,0,1.12012-12.66773,10.40734,10.40734,0,1,0,13.4873-15.85144,10.40972,10.40972,0,1,0-14.01367-9.767c0,.15247.00488.30371.01123.45435a10.41549,10.41549,0,0,0-13.33789,8.38257,10.409,10.409,0,1,0-7.48535,19.1272c-.002.07556-.00586.15051-.00586.22656a50.59934,50.59934,0,0,0,3.67627,8.43457,21.02593,21.02593,0,0,0-1.07373,6.74487c0,5.96387,2.32226,11.07153,5.62255,13.222l-1.34765,56.60376h-8.17822V464.5199Zm30.332-119.26843.02686.00061c.15039,0,.29931-.00488.44775-.01123q.14063.46143.32178.90356A10.45284,10.45284,0,0,0,781.33078,345.6543Z"
                  transform="translate(-156 -219.73719)"
                  fill="#e2e2e2"
                />
              </g>
              <rect
                x="724.25381"
                y="508.14821"
                width="147.45827"
                height="170.58898"
                transform="translate(1439.96588 967.14821) rotate(-180)"
                fill="#3f3d56"
              />
              <rect
                x="778.10499"
                y="644.04112"
                width="39.75591"
                height="34.69606"
                transform="translate(1439.96588 1103.04112) rotate(-180)"
                fill="#e2e2e2"
              />
              <g class="smoke">
                <path
                  d="M675.11058,283.692c-.00282.126-.00953.2509-.00953.37748a17.2926,17.2926,0,0,0,5.26,12.43748,17.32924,17.32924,0,0,0,.86719,1.62029,35.02934,35.02934,0,0,0-1.79014,11.24144c0,13.17395,6.796,23.85355,15.17953,23.85355s15.17952-10.6796,15.17952-23.85355a36.10523,36.10523,0,0,0-.98931-8.47345,17.33406,17.33406,0,0,0,1.86674-21.11261,17.34558,17.34558,0,1,0,22.47882-26.41915,17.34962,17.34962,0,1,0-23.35625-16.27825c0,.254.00847.506.01906.75729a17.3592,17.3592,0,0,0-22.23,13.97086,17.34835,17.34835,0,1,0-12.4756,31.87862Zm29.62669-11.91071c.25024,0,.49871-.00838.74648-.01888q.23348.76911.53578,1.506a17.38709,17.38709,0,0,0-1.32708-1.48825Z"
                  transform="translate(-156 -219.73719)"
                  fill="#e2e2e2"
                />
              </g>
      
              <path
                d="M685.94113,451.76722h17.3501l-.61963-26.02v-.01l-2.27051-95.41a11.09469,11.09469,0,0,1-11.56982,0l-2.27,95.41v.01Z"
                transform="translate(-156 -219.73719)"
                fill="#6c63ff"
              />
              <polygon
                points="498.141 250.82 498.141 459 579.092 459 579.092 247.93 560.301 248.6 560.301 206.01 516.931 206.01 516.931 250.15 498.141 250.82"
                fill="#6c63ff"
              />
              <g class="smoke smoke2">
                <path
                  d="M881.84129,283.692c-.00282.126-.00953.2509-.00953.37748a17.2926,17.2926,0,0,0,5.26,12.43748,17.32924,17.32924,0,0,0,.86719,1.62029,35.02934,35.02934,0,0,0-1.79014,11.24144c0,13.17395,6.796,23.85355,15.17952,23.85355s15.17953-10.6796,15.17953-23.85355a36.10576,36.10576,0,0,0-.98931-8.47345,17.33406,17.33406,0,0,0,1.86674-21.11261,17.34558,17.34558,0,1,0,22.47881-26.41915,17.34962,17.34962,0,1,0-23.35624-16.27825c0,.254.00847.506.01906.75729a17.3592,17.3592,0,0,0-22.23,13.97086,17.34835,17.34835,0,1,0-12.4756,31.87862ZM911.468,271.78128c.25024,0,.49871-.00838.74648-.01888q.23347.76911.53577,1.506a17.38528,17.38528,0,0,0-1.32707-1.48825Z"
                  transform="translate(-156 -219.73719)"
                  fill="#e2e2e2"
                />
              </g>
      
              <path
                d="M892.67428,451.76711h17.348L907.131,330.33089a17.10079,17.10079,0,0,1-11.56535,0Z"
                transform="translate(-156 -219.73719)"
                fill="#6c63ff"
              />
              <polygon
                points="704.871 250.82 704.871 459 785.831 459 785.831 247.93 779.181 248.17 767.031 248.6 767.031 206.01 723.661 206.01 723.661 250.15 704.871 250.82"
                fill="#6c63ff"
              />
              <rect
                x="819.98294"
                y="528.73719"
                width="20"
                height="20"
                transform="translate(1503.96588 857.73719) rotate(-180)"
                fill="#fff"
              />
              <rect
                x="787.98294"
                y="528.73719"
                width="20"
                height="20"
                transform="translate(1439.96588 857.73719) rotate(-180)"
                fill="#fff"
              />
              <rect
                x="755.98294"
                y="528.73719"
                width="20"
                height="20"
                transform="translate(1375.96588 857.73719) rotate(-180)"
                fill="#fff"
              />
              <rect
                x="819.98294"
                y="560.73719"
                width="20"
                height="20"
                transform="translate(1503.96588 921.73719) rotate(-180)"
                fill="#fff"
              />
              <rect
                x="787.98294"
                y="560.73719"
                width="20"
                height="20"
                transform="translate(1439.96588 921.73719) rotate(-180)"
                fill="#fff"
              />
              <rect
                x="755.98294"
                y="560.73719"
                width="20"
                height="20"
                transform="translate(1375.96588 921.73719) rotate(-180)"
                fill="#fff"
              />
              <rect
                x="819.98294"
                y="592.73719"
                width="20"
                height="20"
                transform="translate(1503.96588 985.73719) rotate(-180)"
                fill="#fff"
              />
              <rect
                x="787.98294"
                y="592.73719"
                width="20"
                height="20"
                transform="translate(1439.96588 985.73719) rotate(-180)"
                fill="#fff"
              />
              <rect
                x="755.98294"
                y="592.73719"
                width="20"
                height="20"
                transform="translate(1375.96588 985.73719) rotate(-180)"
                fill="#fff"
              />
              <rect
                x="684.61759"
                y="520.73719"
                width="20"
                height="20"
                transform="translate(1233.23517 841.73719) rotate(-180)"
                fill="#fff"
              />
              <rect
                x="684.61759"
                y="552.73719"
                width="20"
                height="20"
                transform="translate(1233.23517 905.73719) rotate(-180)"
                fill="#fff"
              />
              <rect
                x="684.61759"
                y="584.73719"
                width="20"
                height="20"
                transform="translate(1233.23517 969.73719) rotate(-180)"
                fill="#fff"
              />
              <rect
                x="684.61759"
                y="616.73719"
                width="20"
                height="20"
                transform="translate(1233.23517 1033.73719) rotate(-180)"
                fill="#fff"
              />
              <rect
                x="891.18137"
                y="520.73719"
                width="20"
                height="20"
                transform="translate(1646.36273 841.73719) rotate(-180)"
                fill="#fff"
              />
              <rect
                x="891.18137"
                y="552.73719"
                width="20"
                height="20"
                transform="translate(1646.36273 905.73719) rotate(-180)"
                fill="#fff"
              />
              <rect
                x="891.18137"
                y="584.73719"
                width="20"
                height="20"
                transform="translate(1646.36273 969.73719) rotate(-180)"
                fill="#fff"
              />
              <rect
                x="891.18137"
                y="616.73719"
                width="20"
                height="20"
                transform="translate(1646.36273 1033.73719) rotate(-180)"
                fill="#fff"
              />
              <rect y="458.29537" width="888" height="2" fill="#3f3d56" />
            </svg>
          </main>
        </body>
      </html>`
    },
    {
        filename: 'CSS 导航条',
        htmlStr: `<html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <link rel="stylesheet" href="style.css" />
          <title>CSS 导航条</title>
          <style>
              html,
              body {
                margin: 0;
                font-family: "PingFang SC", "Microsoft Yahei", sans-serif;
              }
              
              * {
                box-sizing: border-box;
              }
              
              ul,
              li {
                margin: 0;
                padding: 0;
              }
              
              body {
                background-color: #1e272e;
              }
              
              nav {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
              }
              
              ul {
                position: relative;
                display: flex;
              }
              
              ul li {
                /* 如果设置为inline-block，会有空隙 */
                /* https://stackoverflow.com/questions/19038799/why-is-there-an-unexplainable-gap-between-these-inline-block-div-elements */
                list-style: none;
                width: 120px;
                line-height: 40px;
                text-align: center;
              }
              
              ul li a {
                color: white;
                text-decoration: none;
              }
              
              .slider {
                width: 100px;
                height: 40px;
                background-color: #5352ed;
                border-radius: 4px;
                position: absolute;
                left: 10px;
                bottom: 0;
                z-index: -1;
                transition: all ease 0.4s;
                animation: 2s ease-in-out waves infinite;
              }
              
              li:nth-child(1):hover ~ .slider {
                left: 10px;
              }
              
              li:nth-child(2):hover ~ .slider {
                left: 128px;
              }
              
              li:nth-child(3):hover ~ .slider {
                left: 248px;
              }
              
              li:nth-child(4):hover ~ .slider {
                left: 368px;
              }
              
              li:nth-child(5):hover ~ .slider {
                left: 488px;
              }
              
              @keyframes waves {
                from {
                  clip-path: polygon(
                    0% 17%,
                    9% 10%,
                    18% 4%,
                    30% 0%,
                    43% 1%,
                    49% 4%,
                    57% 7%,
                    66% 10%,
                    78% 11%,
                    89% 11%,
                    96% 9%,
                    100% 7%,
                    100% 100%,
                    0% 100%
                  );
                }
                50% {
                  clip-path: polygon(
                    0% 4%,
                    6% 9%,
                    13% 13%,
                    23% 15%,
                    31% 16%,
                    42% 15%,
                    49% 13%,
                    61% 10%,
                    71% 5%,
                    81% 3%,
                    90% 2%,
                    100% 5%,
                    100% 100%,
                    0% 100%
                  );
                }
                to {
                  clip-path: polygon(
                    0% 17%,
                    9% 10%,
                    18% 4%,
                    30% 0%,
                    43% 1%,
                    49% 4%,
                    57% 7%,
                    66% 10%,
                    78% 11%,
                    89% 11%,
                    96% 9%,
                    100% 7%,
                    100% 100%,
                    0% 100%
                  );
                }
              }
              
          </style>
        </head>
        <body>
          <header>
            <nav>
              <ul>
                <li><a href="#">首页</a></li>
                <li><a href="#">产品介绍</a></li>
                <li><a href="#">服务介绍</a></li>
                <li><a href="#">关于我们</a></li>
                <li><a href="#">联系我们</a></li>
                <div class="slider"></div>
              </ul>
            </nav>
          </header>
        </body>
      </html>`
    },
    {
        filename: 'CSS 拟态',
        htmlStr: `<html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>CSS 拟态</title>
          <style>
              * {
                box-sizing: border-box;
                padding: 0;
                margin: 0;
                font-family: Verdana, "PingFang SC", "Microsoft Yahei", sans-serif;
              }
              
              main {
                display: grid;
                place-items: center;
                width: 100vw;
                height: 100vh;
                max-width: 100%;
                background: #DBEEFF;
              }
              
              p {
                font-weight: 500;
                font-size: 16px;
                color: #384d6c;
              }
              
              .box p:nth-child(2) {
                font-weight: 700;
              }
              
              .box {
                display: grid;
                place-items: center;
                gap: 32px;
              
                padding: 40px 56px;
              
                /* claymporphism */
                background: #deebff;
                box-shadow: 12px 12px 18px rgba(155, 196, 255, 0.42),
                  inset 10px 10px 11px rgba(250, 252, 255, 0.48),
                  inset -10px -10px 15px rgba(46, 129, 255, 0.22);
                border-radius: 52px;
              }
              
              button {
                padding: 8px 32px;
                border: none;
                color: white;
                font-weight: 900;
              
                /* claymporphism */
                background: #cb5eff;
                box-shadow: 2px 3px 13px rgba(197, 78, 253, 0.43),
                  inset -2px -2px 8px rgba(75, 10, 106, 0.43),
                  inset 2px 2px 6px rgba(251, 242, 255, 0.47);
                border-radius: 22px;
              }
              
          </style>
        </head>
        <body>
          <main>
            <div class="box">
              <p>这是 CSS “泥陶态“ 样式</p>
              <p>Claymorphism</p>
              <button>泥陶态按钮</button>
            </div>
          </main>
        </body>
      </html>`
    },
]