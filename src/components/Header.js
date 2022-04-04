import * as React from "react"
import { Link } from "gatsby"

import logo from "../images/logo.png"

const navigation = {
  links: [
    { name: "Men's", link: "#" },
    { name: "Women's", link: "#" },
    { name: "Accessorie's", link: "#" },
    { name: "Sale!", link: "#" },
  ],

  icons: [
    {
      icon: () => (
        <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.7556 18.578L14.0682 12.8906C15.1699 11.5298 15.8332 9.80062 15.8332 7.91732C15.8332 3.55236 12.2815 0.000717163 7.91656 0.000717163C3.55161 0.000717163 0 3.55232 0 7.91728C0 12.2822 3.55165 15.8339 7.9166 15.8339C9.7999 15.8339 11.5291 15.1706 12.8899 14.0689L18.5773 19.7563C18.7398 19.9188 18.9531 20.0005 19.1665 20.0005C19.3798 20.0005 19.5932 19.9188 19.7557 19.7563C20.0815 19.4305 20.0815 18.9039 19.7556 18.578ZM7.9166 14.1672C4.46996 14.1672 1.66666 11.3639 1.66666 7.91728C1.66666 4.47064 4.46996 1.66734 7.9166 1.66734C11.3632 1.66734 14.1665 4.47064 14.1665 7.91728C14.1665 11.3639 11.3632 14.1672 7.9166 14.1672Z" fill="white"/>
        </svg>
      ),
    },
    {
      icon: () => (
        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.5954 19.556C3.63677 16.9059 4.46239 14.4962 5.9303 12.7515C7.38968 11.0174 9.3675 10.0625 11.5 10.0625C13.6326 10.0625 15.6104 11.0174 17.0698 12.7515C18.5363 14.4943 19.3614 16.9006 19.4045 19.5475C18.5752 19.9629 15.1436 21.5625 11.5 21.5625C7.56002 21.5625 4.36442 19.9723 3.5954 19.556Z" fill="white"/>
          <path d="M11.5 9.34375C9.31675 9.34375 7.54688 7.57388 7.54688 5.39062C7.54688 3.20737 9.31675 1.4375 11.5 1.4375C13.6833 1.4375 15.4531 3.20737 15.4531 5.39062C15.4531 7.57388 13.6833 9.34375 11.5 9.34375Z" fill="white"/>
        </svg>

      ),
    },
    {
      icon: () => (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_11_116)">
          <path d="M6.48438 12.9298H17.0705C17.3326 12.9298 17.5626 12.7565 17.6335 12.5047L19.9774 4.30145C20.0278 4.1246 19.9933 3.93463 19.8824 3.78769C19.7713 3.64121 19.5985 3.55469 19.4142 3.55469H5.13168L4.71283 1.66992C4.65332 1.40152 4.41528 1.21094 4.14062 1.21094H0.585938C0.262146 1.21094 0 1.47308 0 1.79688C0 2.12082 0.262146 2.38281 0.585938 2.38281H3.67035L5.78629 11.9043C5.16373 12.175 4.72656 12.7946 4.72656 13.5158C4.72656 14.485 5.51514 15.2736 6.48438 15.2736H17.0705C17.3944 15.2736 17.6564 15.0116 17.6564 14.6877C17.6564 14.3639 17.3944 14.1017 17.0705 14.1017H6.48438C6.16165 14.1017 5.89844 13.8391 5.89844 13.5158C5.89844 13.1924 6.16165 12.9298 6.48438 12.9298Z" fill="white"/>
          <path d="M5.89844 17.0314C5.89844 18.0008 6.68701 18.7892 7.6564 18.7892C8.62564 18.7892 9.41422 18.0008 9.41422 17.0314C9.41422 16.0622 8.62564 15.2736 7.6564 15.2736C6.68701 15.2736 5.89844 16.0622 5.89844 17.0314Z" fill="white"/>
          <path d="M14.1407 17.0314C14.1407 18.0008 14.9293 18.7892 15.8986 18.7892C16.868 18.7892 17.6564 18.0008 17.6564 17.0314C17.6564 16.0622 16.868 15.2736 15.8986 15.2736C14.9293 15.2736 14.1407 16.0622 14.1407 17.0314Z" fill="white"/>
          </g>
          <defs>
          <clipPath id="clip0_11_116">
          <rect width="20" height="20" fill="white"/>
          </clipPath>
          </defs>
        </svg>
      ),
    }
  ]
}

const Header = () => (
  <header>
    <div className="container">
      <div className="flex header-wrapper">
        <div>
          <div className="flex">
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
            <Link>
              <img src={logo} alt="logo" className="logo"/>
            </Link>
          </div>
        </div>
        <div className="header-links_contain">
          <ul className="header-links">
            {navigation.links.map((item) => (
              <li className="header-link">
                  <Link to={item.link}>
                    {item.name}
                  </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          {navigation.icons.map((item) => (
            <button className="header-icon">
                <item.icon aria-hidden="true" />
            </button>
          ))}
        </div>
      </div>
    </div>
  </header>
)

export default Header
