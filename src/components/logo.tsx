import { cn } from "@/lib/utils";
import React from "react";

const Logo: React.FC<{ text?: boolean; className?: string }> = ({
  text,
  className,
}) => {
  return (
    <div className={cn("w-fit h-full text-popover-foreground", className)}>
      {!text ? (
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 114 123"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_65_38)">
            <path
              d="M93.4817 105.476L86.27 117.976C86.1843 118.124 86.0272 118.214 85.8574 118.214H47.1217C46.9503 118.214 46.7948 118.124 46.7091 117.976L39.4974 105.476C39.3133 105.158 39.5434 104.76 39.9099 104.76H93.0676C93.4341 104.76 93.6642 105.158 93.4802 105.476H93.4817Z"
              fill="#FDAB36"
            />
            <path
              d="M104.857 83.2724L97.6993 95.6802C97.6105 95.8327 97.4486 95.9264 97.2725 95.9264H35.0307C34.8545 95.9264 34.6911 95.8327 34.6038 95.6802L27.446 83.2724C27.2556 82.9437 27.4936 82.5325 27.8728 82.5325H104.43C104.81 82.5325 105.048 82.9437 104.857 83.2724Z"
              fill="#FDAB36"
            />
            <path
              d="M109.678 71.8698H61.1248L62.3148 69.8055L66.9751 61.7263C67.11 61.496 67.3575 61.3531 67.6257 61.3531H104.718L110.231 70.9107C110.477 71.3362 110.17 71.8698 109.678 71.8698Z"
              fill="#FDAB36"
            />
            <path
              d="M11.5611 77.4274H100.335C101.27 77.4274 101.853 78.4389 101.387 79.2487L99.8589 81.8973L94.5893 91.0309C94.3719 91.4072 93.9721 91.639 93.5373 91.639H29.1883C28.2537 91.639 27.6697 92.6505 28.1362 93.4604L31.497 99.2879C31.7144 99.6643 32.1142 99.8961 32.549 99.8961H98.3023C98.7355 99.8961 99.1369 99.6643 99.3543 99.2879L113.7 74.4215C114.102 73.7276 114.102 72.867 113.7 72.1746L99.3543 47.3082C99.1369 46.9318 98.7371 46.7 98.3023 46.7H60.8391C60.406 46.7 60.0045 46.4682 59.7871 46.0918L53.118 34.532C52.8435 34.0556 52.3294 33.7587 51.7804 33.7587H35.2433C34.6927 33.7587 34.1786 34.0556 33.9041 34.532L25.6355 48.8643C25.361 49.3407 25.361 49.9346 25.6355 50.4109L33.9041 64.7433C34.1786 65.2196 34.6927 65.5166 35.2433 65.5166H51.7804C52.3294 65.5166 52.8435 65.2196 53.118 64.7433L58.4114 55.5652C58.6288 55.1889 59.0287 54.9571 59.4634 54.9571H93.5389C93.9721 54.9571 94.3735 55.1889 94.5909 55.5652L97.5629 60.7164L101.389 67.3474C101.855 68.1572 101.271 69.1687 100.337 69.1687H13.6635C12.7289 69.1687 12.145 68.1572 12.6115 67.3458L32.7378 32.4598C32.9552 32.0834 33.3551 31.8516 33.7898 31.8516H80.2086C80.6418 31.8516 81.0432 32.0834 81.2606 32.4582L85.4607 39.7387C85.6781 40.115 86.078 40.3453 86.5127 40.3453H93.2374C94.172 40.3453 94.7559 39.3322 94.2894 38.5224L86.1224 24.3663C85.8479 23.8899 85.3338 23.593 84.7848 23.593H29.2168C28.6662 23.593 28.1521 23.8899 27.8776 24.3663L1.75812 69.6467L0.296722 72.1778C-0.0999653 72.8685 -0.0999653 73.7292 0.296722 74.4215L27.876 122.227C28.1505 122.703 28.6646 123 29.2152 123H37.8392M47.209 57.2611H39.8147C39.3815 57.2611 38.9801 57.0293 38.7627 56.6529L35.0672 50.2458C34.8498 49.8695 34.8498 49.4074 35.0672 49.031L38.7627 42.6239C38.9801 42.2476 39.3799 42.0157 39.8147 42.0157H47.209C47.6421 42.0157 48.0436 42.2476 48.261 42.6239L51.9565 49.031C52.1739 49.4074 52.1739 49.8695 51.9565 50.2458L48.261 56.6529C48.0436 57.0293 47.6437 57.2611 47.209 57.2611ZM80.2086 114.743H42.5106C41.576 114.743 40.9921 115.754 41.4586 116.564L44.8177 122.392C45.0351 122.768 45.435 123 45.8697 123H84.7816C85.3306 123 85.8447 122.703 86.1192 122.227L94.2862 108.071C94.7527 107.261 94.1688 106.248 93.2342 106.248H86.5096C86.0764 106.248 85.6749 106.48 85.4576 106.854L81.2574 114.135C81.04 114.511 80.6402 114.741 80.2054 114.741L80.2086 114.743Z"
              fill="currentColor"
            />
            <path
              d="M89.4689 0C89.2626 0 89.0421 0.00635158 88.8072 0.0174669C79.1281 0.493836 73.8918 22.0892 73.8918 22.0892C73.8077 22.4243 73.9886 22.6275 74.317 22.6275C74.6106 22.6275 75.0216 22.4656 75.4658 22.0892C76.4052 21.2953 78.3347 16.6904 80.8735 12.8794C83.4123 9.06847 97.7644 0 89.4689 0Z"
              fill="currentColor"
            />
            <path
              d="M24.5312 0C16.2356 0 30.6481 9.16057 33.1266 12.8794C35.6051 16.5983 37.5965 21.2953 38.5342 22.0892C38.9785 22.464 39.3895 22.6275 39.683 22.6275C40.0115 22.6275 40.1924 22.4243 40.1083 22.0892C40.1083 22.0892 34.872 0.493836 25.1928 0.0174669C24.958 0.00635158 24.7374 0 24.5312 0Z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="clip0_65_38">
              <rect width="114" height="123" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ) : (
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 665 123"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M231.168 87.8C231.168 91.32 230.304 94.552 228.576 97.496C226.848 100.376 224.512 102.68 221.568 104.408C218.688 106.136 215.488 107 211.968 107H166.464V97.4H211.968C214.592 97.4 216.832 96.472 218.688 94.616C220.608 92.696 221.568 90.424 221.568 87.8C221.568 85.176 220.608 82.936 218.688 81.08C216.832 79.16 214.592 78.2 211.968 78.2H166.464V68.6H202.368C204.992 68.6 207.232 67.672 209.088 65.816C211.008 63.896 211.968 61.624 211.968 59C211.968 56.376 211.008 54.136 209.088 52.28C207.232 50.36 204.992 49.4 202.368 49.4H161.664V107H152.064V39.8H202.368C205.888 39.8 209.088 40.664 211.968 42.392C214.912 44.12 217.248 46.456 218.976 49.4C220.704 52.28 221.568 55.48 221.568 59C221.568 60.984 221.28 62.904 220.704 64.76C220.128 66.552 219.328 68.216 218.304 69.752C222.08 71.032 225.152 73.336 227.52 76.664C229.952 79.928 231.168 83.64 231.168 87.8Z"
            fill="currentColor"
          />
          <path
            d="M302.727 71C302.727 74.072 301.959 76.888 300.423 79.448C298.951 82.008 296.935 84.056 294.375 85.592C291.879 87.064 289.063 87.8 285.927 87.8H249.159C250.503 90.616 252.487 92.92 255.111 94.712C257.799 96.504 260.807 97.4 264.135 97.4H295.527V107H264.135C260.487 107 257.063 106.328 253.863 104.984C250.727 103.576 247.943 101.656 245.511 99.224C243.143 96.792 241.287 94.008 239.943 90.872C238.599 87.672 237.927 84.248 237.927 80.6C237.927 76.952 238.599 73.56 239.943 70.424C241.287 67.224 243.143 64.408 245.511 61.976C247.943 59.544 250.727 57.656 253.863 56.312C257.063 54.904 260.487 54.2 264.135 54.2H285.927C289.063 54.2 291.879 54.968 294.375 56.504C296.935 57.976 298.951 59.992 300.423 62.552C301.959 65.048 302.727 67.864 302.727 71ZM285.927 78.2C287.911 78.2 289.607 77.496 291.015 76.088C292.423 74.68 293.127 72.984 293.127 71C293.127 69.016 292.423 67.32 291.015 65.912C289.607 64.504 287.911 63.8 285.927 63.8H264.135C261.319 63.8 258.727 64.44 256.359 65.72C254.055 67 252.135 68.728 250.599 70.904C249.063 73.08 248.103 75.512 247.719 78.2H285.927Z"
            fill="currentColor"
          />
          <path
            d="M373.602 71C373.602 74.072 372.834 76.888 371.298 79.448C369.826 82.008 367.81 84.056 365.25 85.592C362.754 87.064 359.938 87.8 356.802 87.8H320.034C321.378 90.616 323.362 92.92 325.986 94.712C328.674 96.504 331.682 97.4 335.01 97.4H366.402V107H335.01C331.362 107 327.938 106.328 324.738 104.984C321.602 103.576 318.818 101.656 316.386 99.224C314.018 96.792 312.162 94.008 310.818 90.872C309.474 87.672 308.802 84.248 308.802 80.6C308.802 76.952 309.474 73.56 310.818 70.424C312.162 67.224 314.018 64.408 316.386 61.976C318.818 59.544 321.602 57.656 324.738 56.312C327.938 54.904 331.362 54.2 335.01 54.2H356.802C359.938 54.2 362.754 54.968 365.25 56.504C367.81 57.976 369.826 59.992 371.298 62.552C372.834 65.048 373.602 67.864 373.602 71ZM356.802 78.2C358.786 78.2 360.482 77.496 361.89 76.088C363.298 74.68 364.002 72.984 364.002 71C364.002 69.016 363.298 67.32 361.89 65.912C360.482 64.504 358.786 63.8 356.802 63.8H335.01C332.194 63.8 329.602 64.44 327.234 65.72C324.93 67 323.01 68.728 321.474 70.904C319.938 73.08 318.978 75.512 318.594 78.2H356.802Z"
            fill="currentColor"
          />
          <path
            d="M454.557 107H411.261C406.589 107 402.365 106.136 398.589 104.408C394.813 102.68 391.549 100.28 388.797 97.208C386.109 94.136 384.029 90.584 382.557 86.552C381.085 82.456 380.349 78.072 380.349 73.4C380.349 68.792 381.085 64.472 382.557 60.44C384.029 56.344 386.109 52.76 388.797 49.688C391.549 46.552 394.813 44.12 398.589 42.392C402.365 40.664 406.589 39.8 411.261 39.8H454.557V49.4H411.261C406.845 49.4 403.037 50.488 399.837 52.664C396.701 54.776 394.269 57.656 392.541 61.304C390.813 64.952 389.949 68.984 389.949 73.4C389.949 77.816 390.813 81.848 392.541 85.496C394.269 89.08 396.701 91.96 399.837 94.136C403.037 96.312 406.845 97.4 411.261 97.4H454.557V107Z"
            fill="#FDAB36"
          />
          <path
            d="M525.071 107H477.071C473.999 107 471.183 106.264 468.623 104.792C466.063 103.256 464.015 101.24 462.479 98.744C461.007 96.184 460.271 93.336 460.271 90.2C460.271 87.064 461.007 84.248 462.479 81.752C464.015 79.192 466.063 77.176 468.623 75.704C471.183 74.168 473.999 73.4 477.071 73.4H510.671V83H477.071C475.087 83 473.391 83.704 471.983 85.112C470.575 86.52 469.871 88.216 469.871 90.2C469.871 92.184 470.575 93.88 471.983 95.288C473.391 96.696 475.087 97.4 477.071 97.4H515.471V71C515.471 69.016 514.767 67.32 513.359 65.912C511.951 64.504 510.255 63.8 508.271 63.8H469.871V54.2H508.271C511.407 54.2 514.223 54.968 516.719 56.504C519.279 57.976 521.295 59.992 522.767 62.552C524.303 65.048 525.071 67.864 525.071 71V107Z"
            fill="#FDAB36"
          />
          <path
            d="M593.579 90.2C593.579 93.336 592.811 96.184 591.275 98.744C589.803 101.24 587.787 103.256 585.227 104.792C582.731 106.264 579.915 107 576.779 107H535.979V97.4H576.779C578.763 97.4 580.459 96.696 581.867 95.288C583.275 93.88 583.979 92.184 583.979 90.2C583.979 88.216 583.275 86.52 581.867 85.112C580.459 83.704 578.763 83 576.779 83H550.379C547.755 83 545.323 82.36 543.083 81.08C540.907 79.8 539.179 78.072 537.899 75.896C536.619 73.656 535.979 71.224 535.979 68.6C535.979 65.912 536.619 63.48 537.899 61.304C539.179 59.128 540.907 57.4 543.083 56.12C545.323 54.84 547.755 54.2 550.379 54.2H588.779V63.8H550.379C549.035 63.8 547.883 64.28 546.923 65.24C546.027 66.136 545.579 67.256 545.579 68.6C545.579 69.944 546.027 71.096 546.923 72.056C547.883 72.952 549.035 73.4 550.379 73.4H576.779C579.915 73.4 582.731 74.168 585.227 75.704C587.787 77.176 589.803 79.192 591.275 81.752C592.811 84.248 593.579 87.064 593.579 90.2Z"
            fill="#FDAB36"
          />
          <path
            d="M664.883 71C664.883 74.072 664.115 76.888 662.579 79.448C661.107 82.008 659.091 84.056 656.531 85.592C654.035 87.064 651.219 87.8 648.083 87.8H611.315C612.659 90.616 614.643 92.92 617.267 94.712C619.955 96.504 622.963 97.4 626.291 97.4H657.683V107H626.291C622.643 107 619.219 106.328 616.019 104.984C612.883 103.576 610.099 101.656 607.667 99.224C605.299 96.792 603.443 94.008 602.099 90.872C600.755 87.672 600.083 84.248 600.083 80.6C600.083 76.952 600.755 73.56 602.099 70.424C603.443 67.224 605.299 64.408 607.667 61.976C610.099 59.544 612.883 57.656 616.019 56.312C619.219 54.904 622.643 54.2 626.291 54.2H648.083C651.219 54.2 654.035 54.968 656.531 56.504C659.091 57.976 661.107 59.992 662.579 62.552C664.115 65.048 664.883 67.864 664.883 71ZM648.083 78.2C650.067 78.2 651.763 77.496 653.171 76.088C654.579 74.68 655.283 72.984 655.283 71C655.283 69.016 654.579 67.32 653.171 65.912C651.763 64.504 650.067 63.8 648.083 63.8H626.291C623.475 63.8 620.883 64.44 618.515 65.72C616.211 67 614.291 68.728 612.755 70.904C611.219 73.08 610.259 75.512 609.875 78.2H648.083Z"
            fill="#FDAB36"
          />
          <g clip-path="url(#clip0_71_49)">
            <path
              d="M93.4817 105.476L86.27 117.976C86.1843 118.124 86.0272 118.214 85.8574 118.214H47.1217C46.9503 118.214 46.7948 118.124 46.7091 117.976L39.4974 105.476C39.3133 105.158 39.5434 104.76 39.9099 104.76H93.0676C93.4341 104.76 93.6642 105.158 93.4802 105.476H93.4817Z"
              fill="#FDAB36"
            />
            <path
              d="M104.857 83.2724L97.6993 95.6802C97.6105 95.8327 97.4486 95.9264 97.2725 95.9264H35.0307C34.8545 95.9264 34.6911 95.8327 34.6038 95.6802L27.446 83.2724C27.2556 82.9437 27.4936 82.5325 27.8728 82.5325H104.43C104.81 82.5325 105.048 82.9437 104.857 83.2724Z"
              fill="#FDAB36"
            />
            <path
              d="M109.678 71.8698H61.1248L62.3148 69.8055L66.9751 61.7263C67.11 61.496 67.3575 61.3531 67.6257 61.3531H104.718L110.231 70.9107C110.477 71.3362 110.17 71.8698 109.678 71.8698Z"
              fill="#FDAB36"
            />
            <path
              d="M11.5611 77.4274H100.335C101.27 77.4274 101.853 78.4389 101.387 79.2487L99.8589 81.8973L94.5893 91.0309C94.3719 91.4072 93.9721 91.639 93.5373 91.639H29.1883C28.2537 91.639 27.6697 92.6505 28.1362 93.4604L31.497 99.2879C31.7144 99.6643 32.1142 99.8961 32.549 99.8961H98.3023C98.7355 99.8961 99.1369 99.6643 99.3543 99.2879L113.7 74.4215C114.102 73.7276 114.102 72.867 113.7 72.1746L99.3543 47.3082C99.1369 46.9318 98.7371 46.7 98.3023 46.7H60.8391C60.406 46.7 60.0045 46.4682 59.7871 46.0918L53.118 34.532C52.8435 34.0556 52.3294 33.7587 51.7804 33.7587H35.2433C34.6927 33.7587 34.1786 34.0556 33.9041 34.532L25.6355 48.8643C25.361 49.3407 25.361 49.9346 25.6355 50.4109L33.9041 64.7433C34.1786 65.2196 34.6927 65.5166 35.2433 65.5166H51.7804C52.3294 65.5166 52.8435 65.2196 53.118 64.7433L58.4114 55.5652C58.6288 55.1889 59.0287 54.9571 59.4634 54.9571H93.5389C93.9721 54.9571 94.3735 55.1889 94.5909 55.5652L97.5629 60.7164L101.389 67.3474C101.855 68.1572 101.271 69.1687 100.337 69.1687H13.6635C12.7289 69.1687 12.145 68.1572 12.6115 67.3458L32.7378 32.4598C32.9552 32.0834 33.3551 31.8516 33.7898 31.8516H80.2086C80.6418 31.8516 81.0432 32.0834 81.2606 32.4582L85.4607 39.7387C85.6781 40.115 86.078 40.3453 86.5127 40.3453H93.2374C94.172 40.3453 94.7559 39.3322 94.2894 38.5224L86.1224 24.3663C85.8479 23.8899 85.3338 23.593 84.7848 23.593H29.2168C28.6662 23.593 28.1521 23.8899 27.8776 24.3663L1.75812 69.6467L0.296722 72.1778C-0.0999653 72.8685 -0.0999653 73.7292 0.296722 74.4215L27.876 122.227C28.1505 122.703 28.6646 123 29.2152 123H37.8392M47.209 57.2611H39.8147C39.3815 57.2611 38.9801 57.0293 38.7627 56.6529L35.0672 50.2458C34.8498 49.8695 34.8498 49.4074 35.0672 49.031L38.7627 42.6239C38.9801 42.2476 39.3799 42.0157 39.8147 42.0157H47.209C47.6421 42.0157 48.0436 42.2476 48.261 42.6239L51.9565 49.031C52.1739 49.4074 52.1739 49.8695 51.9565 50.2458L48.261 56.6529C48.0436 57.0293 47.6437 57.2611 47.209 57.2611ZM80.2086 114.743H42.5106C41.576 114.743 40.9921 115.754 41.4586 116.564L44.8177 122.392C45.0351 122.768 45.435 123 45.8697 123H84.7816C85.3306 123 85.8447 122.703 86.1192 122.227L94.2862 108.071C94.7527 107.261 94.1688 106.248 93.2342 106.248H86.5096C86.0764 106.248 85.6749 106.48 85.4576 106.854L81.2574 114.135C81.04 114.511 80.6402 114.741 80.2054 114.741L80.2086 114.743Z"
              fill="currentColor"
            />
            <path
              d="M89.4689 0C89.2626 0 89.0421 0.00635158 88.8072 0.0174669C79.1281 0.493836 73.8918 22.0892 73.8918 22.0892C73.8077 22.4243 73.9886 22.6275 74.317 22.6275C74.6106 22.6275 75.0216 22.4656 75.4658 22.0892C76.4052 21.2953 78.3347 16.6904 80.8735 12.8794C83.4123 9.06847 97.7644 0 89.4689 0Z"
              fill="currentColor"
            />
            <path
              d="M24.5312 0C16.2356 0 30.6481 9.16057 33.1266 12.8794C35.6051 16.5983 37.5965 21.2953 38.5342 22.0892C38.9785 22.464 39.3895 22.6275 39.683 22.6275C40.0115 22.6275 40.1924 22.4243 40.1083 22.0892C40.1083 22.0892 34.872 0.493836 25.1928 0.0174669C24.958 0.00635158 24.7374 0 24.5312 0Z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="clip0_71_49">
              <rect width="114" height="123" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )}
    </div>
  );
};

export default Logo;
