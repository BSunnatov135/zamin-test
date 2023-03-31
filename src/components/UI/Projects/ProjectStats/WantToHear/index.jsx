import classNames from "classnames";
import useTranslation from "next-translate/useTranslation";
import { useState } from "react";
import styles from "./style.module.scss";

export default function WantToHear() {
  const { t } = useTranslation("common");
  const { lang } = useTranslation();
  const [active, setActive] = useState(null);
  const [toggle, setToggle] = useState(null);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>{t("realisation")} 2021-2023</h2>
      </div>
      <div className={styles.region}>
        <img src="/images/location.png" alt="" />
        <p>{t("uzbekistan")}</p>
      </div>
      <div className={styles.svgWrapper}>
        <div className={styles.chartWrapper}>
          <svg
            width="501"
            height="502"
            viewBox="0 0 501 502"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-8.57446e-06 251C-4.23452e-06 201.357 14.6916 152.829 42.2169 111.552C69.7422 70.2751 108.865 38.1038 154.638 19.1062C200.411 0.108647 250.778 -4.86199 299.37 4.82292C347.962 14.5078 392.597 38.4132 427.63 73.5162C462.663 108.619 486.521 153.343 496.187 202.032C505.852 250.722 500.892 301.189 481.932 347.054C462.972 392.918 430.865 432.119 389.67 459.699C348.476 487.279 300.044 502 250.5 502L250.5 426.991C285.238 426.991 319.197 416.669 348.081 397.331C376.965 377.993 399.477 350.507 412.771 318.349C426.065 286.191 429.543 250.805 422.766 216.666C415.989 182.527 399.26 151.168 374.697 126.556C350.133 101.943 318.837 85.1812 284.766 78.3905C250.695 71.5999 215.379 75.0851 183.285 88.4054C151.191 101.726 123.76 124.283 104.46 153.225C85.1606 182.166 74.8595 216.192 74.8595 251L-8.57446e-06 251Z"
              fill="#4559A6"
              opacity={active == "2022" ? "1" : "0.3"}
            />
            <path
              d="M250.5 394.5C274.181 394.5 297.496 388.68 318.381 377.556C339.266 366.431 357.075 350.346 370.232 330.724C383.388 311.103 391.485 288.551 393.807 265.065C396.128 241.58 392.601 217.887 383.539 196.085C374.476 174.283 360.158 155.044 341.853 140.073C323.547 125.102 301.819 114.861 278.593 110.257C255.367 105.653 231.36 106.829 208.699 113.679C186.038 120.529 165.422 132.843 148.677 149.53L201.625 202.294C209.662 194.285 219.558 188.374 230.436 185.086C241.313 181.798 252.836 181.234 263.985 183.444C275.133 185.653 285.563 190.569 294.349 197.755C303.136 204.941 310.009 214.176 314.359 224.641C318.708 235.106 320.401 246.479 319.287 257.751C318.173 269.024 314.286 279.849 307.971 289.268C301.656 298.686 293.108 306.407 283.083 311.747C273.058 317.086 261.867 319.88 250.5 319.88L250.5 394.5Z"
              fill="#0EA1E6"
              opacity={!active && "0.3"}
            />
            <g clip-path="url(#clip0_10_232)">
              <path
                d="M215.126 253.768C216.225 254.58 218.108 255.831 220.597 256.972C217.253 258.115 214.841 261.286 214.841 265.012V275.733C214.841 277.41 216.205 278.774 217.882 278.774H229.974C230.573 278.774 231.058 278.289 231.058 277.69C231.058 277.091 230.573 276.606 229.974 276.606H223.432V265.679C223.432 265.08 222.947 264.595 222.348 264.595C221.749 264.595 221.264 265.08 221.264 265.679V276.606H217.882C217.401 276.606 217.009 276.214 217.009 275.733V265.012C217.009 261.523 219.848 258.684 223.338 258.684H227.016C227.212 261.564 229.609 263.805 232.503 263.805C235.386 263.805 237.793 261.559 237.989 258.684H241.669C245.159 258.684 247.998 261.523 247.998 265.012V275.733C247.998 276.214 247.606 276.606 247.125 276.606H243.743V265.679C243.743 265.08 243.257 264.595 242.659 264.595C242.06 264.595 241.575 265.08 241.575 265.679V276.606H235.033C234.434 276.606 233.949 277.091 233.949 277.69C233.949 278.289 234.434 278.774 235.033 278.774H247.125C248.802 278.774 250.166 277.41 250.166 275.733V265.012C250.166 261.286 247.754 258.115 244.41 256.972C246.899 255.831 248.782 254.58 249.881 253.768C250.916 253.004 251.288 251.643 250.784 250.46C249.242 246.836 248.216 243.49 248.216 238.938C248.216 230.274 241.167 223.226 232.503 223.226C223.84 223.226 216.791 230.274 216.791 238.938C216.791 243.49 215.765 246.836 214.223 250.46C213.719 251.643 214.09 253.004 215.126 253.768ZM235.836 258.213C235.836 260.053 234.374 261.613 232.547 261.636C230.686 261.661 229.174 260.155 229.171 258.31C229.171 258.308 229.171 258.307 229.171 258.305C229.171 256.649 229.171 255.912 229.171 255.103C231.257 255.781 233.595 255.831 235.836 255.103V258.213ZM232.503 253.464C227.775 253.464 223.866 249.615 223.866 244.826V238.935H228.181C230.611 238.935 232.788 237.839 234.236 236.872V237.607C234.236 238.72 235.228 239.567 236.322 239.403C238.309 239.107 239.946 237.975 241.141 236.973V244.826C241.141 249.606 237.241 253.464 232.503 253.464ZM216.218 251.308C217.863 247.441 218.959 243.857 218.959 238.938C218.959 231.47 225.035 225.394 232.503 225.394C239.972 225.394 246.048 231.47 246.048 238.938C246.048 243.857 247.143 247.441 248.789 251.308C248.898 251.564 248.817 251.859 248.593 252.024C247.035 253.174 243.783 255.276 239.416 256.516H238.004V254.122C241.177 252.237 243.309 248.776 243.309 244.826V235.649C243.309 234.291 241.691 233.571 240.683 234.486L240.657 234.51C239.653 235.421 238.173 236.765 236.404 237.182V235.701C236.404 234.39 234.891 233.655 233.86 234.468C232.77 235.326 230.582 236.767 228.181 236.767H223.787C222.635 236.767 221.698 237.704 221.698 238.856V244.826C221.698 248.776 223.83 252.237 227.003 254.122V256.516H225.591C221.224 255.276 217.972 253.174 216.414 252.024C216.189 251.859 216.109 251.564 216.218 251.308Z"
                fill="black"
              />
              <path
                d="M286.916 268.035C287.515 268.035 288 267.55 288 266.951V265.013C288 260.327 284.189 256.516 279.503 256.516H275.838V254.122C278.71 252.416 280.729 249.42 281.087 245.938H281.755C283.845 245.938 285.545 244.238 285.545 242.148C285.545 241.404 285.328 240.709 284.956 240.123V237.844C284.956 229.784 278.398 223.226 270.338 223.226C262.278 223.226 255.72 229.784 255.72 237.844V240.123C255.348 240.709 255.131 241.404 255.131 242.148C255.131 244.238 256.832 245.939 258.922 245.939H259.59C259.947 249.421 261.966 252.416 264.838 254.122V256.516H261.173C256.487 256.516 252.676 260.327 252.676 265.013V275.733C252.676 277.41 254.04 278.774 255.717 278.774H284.959C286.636 278.774 288 277.41 288 275.733V272.01C288 271.411 287.515 270.926 286.916 270.926C286.318 270.926 285.833 271.411 285.833 272.01V275.733C285.833 276.214 285.441 276.606 284.959 276.606H281.577V265.679C281.577 265.08 281.092 264.595 280.494 264.595C279.895 264.595 279.41 265.08 279.41 265.679V276.606H261.266V265.679C261.266 265.08 260.781 264.595 260.183 264.595C259.584 264.595 259.099 265.08 259.099 265.679V276.606H255.716C255.235 276.606 254.843 276.214 254.843 275.733V265.013C254.843 261.523 257.683 258.684 261.172 258.684H264.85C265.046 261.56 267.44 263.805 270.338 263.805C273.226 263.805 275.627 261.554 275.824 258.684H279.503C282.993 258.684 285.832 261.523 285.832 265.013V266.951C285.832 267.55 286.317 268.035 286.916 268.035ZM283.377 242.148C283.377 243.043 282.649 243.771 281.754 243.771H281.143V240.526H281.754C281.999 240.526 282.246 240.585 282.456 240.688C282.456 240.688 283.377 241.094 283.377 242.148ZM259.532 243.77H258.921C258.027 243.77 257.299 243.043 257.299 242.148C257.299 241.253 258.038 240.526 258.921 240.526H259.532V243.77ZM259.532 238.119V238.358H258.921C258.601 238.358 258.23 238.404 257.888 238.501V237.844C257.888 230.979 263.473 225.394 270.338 225.394C277.203 225.394 282.788 230.979 282.788 237.844V238.501C282.184 238.33 281.755 238.358 281.144 238.358C281.144 235.791 278.947 234.744 277.229 235.249C274.935 235.924 272.62 236.387 270.249 236.386C267.927 236.385 265.821 235.948 263.447 235.249C261.524 234.684 259.532 236.086 259.532 238.119ZM273.67 258.213C273.67 260.054 272.208 261.613 270.382 261.636C268.519 261.661 267.008 260.153 267.006 258.31C267.006 258.308 267.005 258.307 267.005 258.305C267.005 256.65 267.005 255.913 267.005 255.103C269.197 255.816 271.541 255.796 273.67 255.103V258.213ZM270.338 253.464C265.598 253.464 261.716 249.612 261.701 244.853C261.701 244.844 261.7 244.827 261.7 244.814C261.7 243.125 261.7 239.459 261.7 238.119C261.7 237.543 262.286 237.174 262.826 237.327C262.829 237.328 262.832 237.328 262.835 237.329C267.934 238.83 271.873 239.085 277.841 237.329C278.375 237.171 278.976 237.535 278.976 238.119V244.811C278.975 244.821 278.975 244.832 278.975 244.839C278.975 244.841 278.975 244.843 278.975 244.845C278.965 249.673 275.006 253.464 270.338 253.464Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_10_232">
                <rect
                  width="74"
                  height="74"
                  fill="white"
                  transform="translate(214 214)"
                />
              </clipPath>
            </defs>
          </svg>
          <span className={styles.number1}>2007</span>
          <span className={styles.number2}>4878</span>
          <div className={styles.statsWrapper}>
            <h2>{t("childrenDiagnosed")}</h2>
            <div className={styles.yearsWrapper}>
              <div className={styles.year}>
                <div
                  className={classNames(styles.item, {
                    [styles.itemActive]: active === "2021",
                  })}
                  onClick={(e) => {
                    setActive("2021");
                    // e.preventDefault();
                  }}
                >
                  <p>2021</p>
                  <span className={`${styles.badge} ${styles.blue}`}></span>
                </div>
                <div
                  className={classNames(styles.item, {
                    [styles.itemActive]: active === "2022",
                  })}
                  onClick={(e) => {
                    setActive("2022");
                    // e.preventDefault();
                  }}
                >
                  <p>2022</p>
                  <span className={`${styles.badge} ${styles.darkBlue}`}></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.chartWrapper}>
          <svg
            width="501"
            height="502"
            viewBox="0 0 501 502"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-8.57446e-06 251C-4.23452e-06 201.357 14.6916 152.829 42.2169 111.552C69.7422 70.2751 108.865 38.1038 154.638 19.1062C200.411 0.108647 250.778 -4.86199 299.37 4.82292C347.962 14.5078 392.597 38.4132 427.63 73.5162C462.663 108.619 486.521 153.343 496.187 202.032C505.852 250.722 500.892 301.189 481.932 347.054C462.972 392.918 430.865 432.119 389.67 459.699C348.476 487.279 300.044 502 250.5 502L250.5 426.991C285.238 426.991 319.197 416.669 348.081 397.331C376.965 377.993 399.477 350.507 412.771 318.349C426.065 286.191 429.543 250.805 422.766 216.666C415.989 182.527 399.26 151.168 374.697 126.556C350.133 101.943 318.837 85.1812 284.766 78.3905C250.695 71.5999 215.379 75.0851 183.285 88.4054C151.191 101.726 123.76 124.283 104.46 153.225C85.1606 182.166 74.8595 216.192 74.8595 251L-8.57446e-06 251Z"
              fill="#4559A6"
              opacity={toggle == "2022" ? "1" : "0.3"}
            />
            <path
              d="M250.5 394.5C274.181 394.5 297.496 388.68 318.381 377.556C339.266 366.431 357.075 350.346 370.232 330.724C383.388 311.103 391.485 288.551 393.807 265.065C396.128 241.58 392.601 217.887 383.539 196.085C374.476 174.283 360.158 155.044 341.853 140.073C323.547 125.102 301.819 114.861 278.593 110.257C255.367 105.653 231.36 106.829 208.699 113.679C186.038 120.529 165.422 132.843 148.677 149.53L201.625 202.294C209.662 194.285 219.558 188.374 230.436 185.086C241.313 181.798 252.836 181.234 263.985 183.444C275.133 185.653 285.563 190.569 294.349 197.755C303.136 204.941 310.009 214.176 314.359 224.641C318.708 235.106 320.401 246.479 319.287 257.751C318.173 269.024 314.286 279.849 307.971 289.268C301.656 298.686 293.108 306.407 283.083 311.747C273.058 317.086 261.867 319.88 250.5 319.88L250.5 394.5Z"
              fill="#0EA1E6"
              opacity={!toggle && "0.3"}
            />
            <g clip-path="url(#clip0_10_239)">
              <path
                d="M278.237 226.461C273.894 221.537 268.04 218.237 261.634 217.074C257.934 215.113 253.718 214.001 249.247 214.001C248.367 214.001 228.482 214.001 228.482 214.001C217.923 213.873 212.334 227.767 220.373 234.821C221.191 235.564 222.05 236.298 222.93 237.022C222.776 238.178 222.695 239.356 222.695 240.552V273.19C223.214 291.73 249.47 293.408 252.382 275.129C252.94 270.837 255.251 267.415 258.935 265.372C265.999 272.298 276.606 269.874 281.507 260.52C287.695 249.739 286.578 235.679 278.237 226.461ZM223.293 231.608C218.258 226.947 221.667 218.411 228.482 218.342H234.714C229.738 221.609 225.921 226.501 224.023 232.259C223.777 232.043 223.533 231.826 223.293 231.608ZM248.076 274.569C246.008 287.528 227.399 286.319 227.037 273.19V240.552C227.037 240.458 227.039 240.365 227.04 240.272C227.231 240.419 227.422 240.567 227.612 240.713C232.279 244.313 236.786 247.79 239.572 251.791C234.54 250.988 229.832 255.025 229.876 260.128C229.85 267.371 238.582 271.235 243.905 266.426C245.435 265.256 246.341 264.021 247.141 262.931C248.473 261.114 249.624 259.545 254.027 258.174C261.964 256.023 267.503 248.784 267.503 240.552C267.607 224.511 247.728 216.206 236.418 227.564C234.447 229.661 237.35 232.597 239.469 230.652C248.093 221.995 263.241 228.329 263.161 240.552C263.161 246.838 258.925 252.364 252.86 253.992C252.833 253.999 252.806 254.007 252.78 254.015C249.781 254.944 247.861 256.039 246.487 257.174C244.896 247.609 235.049 241.067 227.674 235.265C230.053 225.563 238.822 218.342 249.247 218.342C273.111 218.583 279.961 250.923 258.297 260.841C252.606 263.384 248.881 268.388 248.076 274.569ZM242.397 260.128C242.397 262.383 240.563 264.217 238.307 264.217C232.889 264.012 232.89 256.242 238.307 256.038C240.563 256.038 242.397 257.872 242.397 260.128ZM277.729 258.381C274.925 263.696 269.054 267.435 263.071 263.226C275.612 255.967 279.695 238.017 271.509 226.1C281.294 233.441 283.999 247.559 277.729 258.381Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_10_239">
                <rect
                  width="74"
                  height="74"
                  fill="white"
                  transform="translate(214 214)"
                />
              </clipPath>
            </defs>
          </svg>
          <span className={styles.number1}>4000</span>
          <span className={styles.number2}>9632</span>
          <div className={`${styles.statsWrapper} ${styles.bottom}`}>
            <h2>{t("hearingDevices")}</h2>
            <div className={styles.yearsWrapper}>
              <div className={styles.year}>
                <div
                  className={classNames(styles.item, {
                    [styles.itemActive]: toggle === "2021",
                  })}
                  onClick={(e) => {
                    setToggle("2021");
                    // e.preventDefault();
                  }}
                >
                  <p>2021</p>
                  <span className={`${styles.badge} ${styles.blue}`}></span>
                </div>
                <div
                  className={classNames(styles.item, {
                    [styles.itemActive]: toggle === "2022",
                  })}
                  onClick={(e) => {
                    setToggle("2022");
                    // e.preventDefault();
                  }}
                >
                  <p>2022</p>
                  <span className={`${styles.badge} ${styles.darkBlue}`}></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}