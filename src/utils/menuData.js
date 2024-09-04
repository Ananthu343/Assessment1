const menu = [
    {
        name: "Dashboard",
        icon: "M1.375 0.25C0.75368 0.25 0.25 0.75368 0.25 1.375V6.625C0.25 7.24632 0.75368 7.75 1.375 7.75H5.125C5.74632 7.75 6.25 7.24632 6.25 6.625V1.375C6.25 0.75368 5.74632 0.25 5.125 0.25H1.375ZM8.875 0.25C8.25368 0.25 7.75 0.75368 7.75 1.375V3.625C7.75 4.24632 8.25368 4.75 8.875 4.75H12.625C13.2463 4.75 13.75 4.24632 13.75 3.625V1.375C13.75 0.753679 13.2463 0.25 12.625 0.25H8.875ZM0.25 10.375C0.25 9.75368 0.753679 9.25 1.375 9.25H5.125C5.74632 9.25 6.25 9.75368 6.25 10.375V12.625C6.25 13.2463 5.74632 13.75 5.125 13.75H1.375C0.753679 13.75 0.25 13.2463 0.25 12.625V10.375ZM8.875 6.25C8.25368 6.25 7.75 6.75368 7.75 7.375V12.625C7.75 13.2463 8.25368 13.75 8.875 13.75H12.625C13.2463 13.75 13.75 13.2463 13.75 12.625V7.375C13.75 6.75368 13.2463 6.25 12.625 6.25H8.875Z"
    },
    {
        name: "All classes",
        icon: "M11.3333 14V12.6667C11.3333 11.9594 11.0523 11.2811 10.5522 10.781C10.0521 10.281 9.37387 10 8.66663 10H3.33329C2.62605 10 1.94777 10.281 1.44767 10.781C0.947578 11.281 0.666626 11.9594 0.666626 12.6667V14C0.666626 14.3726 0.947578 14.751 1.44767 15.251C1.94777 15.751 2.62605 16 3.33329 16H8.66663C9.37387 16 10.0521 15.751 10.5522 15.251C11.0523 14.751 11.3333 14.3726 11.3333 14Z M6.00001 7.33333C7.47277 7.33333 8.66668 6.13943 8.66668 4.66667C8.66668 3.19391 7.47277 2 6.00001 2C4.52725 2 3.33334 3.19391 3.33334 4.66667C3.33334 6.13943 4.52725 7.33333 6.00001 7.33333Z M15.3333 14V12.6667C15.3329 12.0758 15.1362 11.5019 14.7742 11.0349C14.4122 10.5679 13.9054 10.2344 13.3333 10.0867C13.7613 10.238 14.1893 10.3894 14.6173 10.5408C15.0453 10.6922 15.4733 10.8436 15.9013 11.005C16.3293 11.1664 16 11.3278 15.9999 11.4993V14Z M10.6666 2.08667C11.2402 2.23354 11.7487 2.56714 12.1117 3.03488C12.4748 3.50262 12.6719 4.07789 12.6719 4.67C12.6719 5.26212 12.4748 5.83739 12.1117 6.30513C11.7487 6.77287 11.2402 7.10647 10.6666 7.25334Z"
    },
    {
        name: "Assignments",
        icon: "M10.5 1.5H4.5C4.10218 1.5 3.72064 1.65804 3.43934 1.93934C3.15804 2.22064 3 2.60218 3 3V15C3 15.3978 3.15804 15.7794 3.43934 16.0607C3.72064 16.342 4.10218 16.5 4.5 16.5H13.5C13.8978 16.5 14.2794 16.342 14.5607 16.0607C14.842 15.7794 15 15.3978 15 15V6L10.5 1.5Z M10.5 1.5V6H15 M12 9.75H6 M12 12.75H6 M7.5 6.75H6.75H6"
    },
    {
        name: "Performance",
        icon: "M13.5 15V7.5 M9 15V3 M4.5 15V10.5"
    },
    {
        name: "Fee details",
        icon: "M10.411 4.75C9.935 3.747 8.915 3.05 7.725 3.05H3.9V1.35H14.1V3.05H11.329C11.737 3.543 12.043 4.121 12.222 4.75H14.1V6.45H12.383C12.171 8.83 10.165 10.7 7.725 10.7H7.105L12.825 16.65H10.471L4.75 10.7V8.99997H7.725C9.221 8.99997 10.462 7.89497 10.666 6.45H3.9V4.75H10.411Z"
    },
    {
        name: "Settings",
        icon: "M14.4645 11.9704C14.4204 11.7271 14.4502 11.4762 14.55 11.25C14.6451 11.0282 14.8029 10.839 15.0042 10.7057C15.2054 10.5725 15.4412 10.501 15.6825 10.5H15.75C16.1478 10.5 16.5294 10.342 16.8107 10.0607C17.092 9.77936 17.25 9.39782 17.25 9C17.25 8.60217 17.092 8.22064 16.8107 7.93934C16.5294 7.65803 16.1478 7.5 15.75 7.5H15.6225C15.3812 7.49904 15.1454 7.42753 14.9441 7.29427C14.7429 7.16101 14.5851 6.97183 14.49 6.75V6.69C14.3902 6.46379 14.3604 6.21285 14.4045 5.96956C14.4486 5.72626 14.5646 5.50176 14.7375 5.325L14.7825 5.28C14.922 5.14069 15.0326 4.97526 15.1081 4.79316C15.1836 4.61106 15.2224 4.41587 15.2224 4.21875C15.2224 4.02163 15.1836 3.82644 15.1081 3.64434C15.0326 3.46224 14.922 3.29681 14.7825 3.1575C14.6432 3.01804 14.4778 2.9074 14.2957 2.83191C14.1136 2.75642 13.9184 2.71757 13.7212 2.71757C13.5241 2.71757 13.3289 2.75642 13.1468 2.83191C12.9647 2.9074 12.7993 3.01804 12.66 3.1575L12.615 3.2025C12.4382 3.3754 12.2137 3.49139 11.9704 3.5355C11.7271 3.57962 11.4762 3.54984 11.25 3.45C11.0282 3.35493 10.839 3.19707 10.7057 2.99585C10.5725 2.79463 10.501 2.55884 10.5 2.3175V2.25C10.5 1.85218 10.342 1.47064 10.0607 1.18934C9.77936 0.908035 9.39782 0.75 9 0.75C8.60217 0.75 8.22064 0.908035 7.93934 1.18934C7.65803 1.47064 7.5 1.85218 7.5 2.25V2.3775C7.49904 2.61884 7.42753 2.85463 7.29427 3.05585C7.16101 3.25707 6.97183 3.41493 6.75 3.51H6.69C6.46379 3.60984 6.21285 3.63962 5.96956 3.5955C5.72626 3.55139 5.50176 3.4354 5.325 3.2625L5.28 3.2175C5.14069 3.07804 4.97526 2.9674 4.79316 2.89191C4.61106 2.81642 4.41587 2.77757 4.21875 2.77757C4.02163 2.77757 3.82644 2.81642 3.64434 2.89191C3.46224 2.9674 3.29681 3.07804 3.1575 3.2175C3.01804 3.35681 2.9074 3.52224 2.83191 3.70434C2.75642 3.88644 2.71757 4.08163 2.71757 4.27875C2.71757 4.47587 2.75642 4.67106 2.83191 4.85316C2.9074 5.03526 3.01804 5.20069 3.1575 5.34L3.2025 5.385C3.3754 5.56176 3.49139 5.78626 3.5355 6.02956C3.57962 6.27285 3.54984 6.52379 3.45 6.75C3.36429 6.98305 3.21044 7.18493 3.00847 7.32938C2.8065 7.47384 2.56575 7.55419 2.3175 7.56H2.25C1.85218 7.56 1.47064 7.71803 1.18934 7.99934C0.908035 8.28064 0.75 8.66217 0.75 9.06C0.75 9.45782 0.908035 9.83935 1.18934 10.1207C1.47064 10.402 1.85218 10.56 2.25 10.56H2.3775C2.61884 10.561 2.85463 10.6325 3.05585 10.7657C3.25707 10.899 3.41493 11.0882 3.51 11.31C3.60984 11.5362 3.63962 11.7871 3.5955 12.0304C3.55139 12.2737 3.4354 12.4982 3.2625 12.675L3.2175 12.72C3.07804 12.8593 2.9674 13.0247 2.89191 13.2068C2.81642 13.3889 2.77757 13.5841 2.77757 13.7812C2.77757 13.9784 2.81642 14.1736 2.89191 14.3557C2.9674 14.5378 3.07804 14.7032 3.2175 14.8425C3.35681 14.982 3.52224 15.0926 3.70434 15.1681C3.88644 15.2436 4.08163 15.2824 4.27875 15.2824C4.47587 15.2824 4.67106 15.2436 4.85316 15.1681C5.03526 15.0926 5.20069 14.982 5.34 14.8425L5.385 14.7975C5.56176 14.6246 5.78626 14.5086 6.02956 14.4645C6.27285 14.4204 6.52379 14.4502 6.75 14.55C6.98305 14.6357 7.18493 14.7896 7.32938 14.9915C7.47384 15.1935 7.55419 15.4343 7.56 15.6825V15.75C7.56 16.1478 7.71803 16.5294 7.99934 16.8107C8.28064 17.092 8.66217 17.25 9.06 17.25C9.45782 17.25 9.83935 17.092 10.1207 16.8107C10.402 16.5294 10.56 16.1478 10.56 15.75V15.6225C10.561 15.3812 10.6325 15.1454 10.7657 14.9441C10.899 14.7429 11.0882 14.5851 11.31 14.49C11.5362 14.3902 11.7871 14.3604 12.0304 14.4045C12.2737 14.4486 12.4982 14.5646 12.675 14.7375L12.72 14.7825C12.8593 14.922 13.0247 15.0326 13.2068 15.1081C13.3889 15.1836 13.5841 15.2224 13.7812 15.2224C13.9784 15.2224 14.1736 15.1836 14.3557 15.1081C14.538 15.0325 14.7037 14.9202 14.8425 14.7812C14.9809 14.6426 15.0927 14.4775 15.1681 14.2957C15.2436 14.1136 15.2824 13.9184 15.2824 13.7212C15.2824 13.5241 15.2436 13.3289 15.1681 13.1468C15.0926 12.9647 14.982 12.7993 14.8425 12.66L14.7975 12.615C14.6246 12.4382 14.5086 12.2137 14.4645 11.9704Z"
    },
]

export default menu





