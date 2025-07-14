const SocialLinks = () => {

    return (
        <>
            <div className="hidden fixed right-10 bottom-0 md:flex flex-col w-6 h-[17rem] items-center justify-between">
                <div className="flex flex-col space-y-6">
                    {socialLinks.map((social) => (
                        <a
                            key={social.id}
                            title={social.title}
                            href={social.link}
                            className="scale-110 rounded link-outline"
                        >
                            {social.svg}
                        </a>
                    ))}
                </div>
                <div className="w-40 h-1 bg-bgdark dark:bg-bglight rotate-90"></div>
            </div>
        </>
    );
};

const socialLinks = [
    {
        id: 1,
        title: "Shreya's Github Profile",
        link: "https://github.com/shreyapatil2142",
        svg: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="white"
                className="fill-white hover:fill-blue-500 transition-colors duration-300"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                />
            </svg>
        ),
    },
    {
        id: 2,
        title: "Shreya's LinkedIn Profile",
        link: "https://www.linkedin.com/in/shreya-patil-9530shreya/",
        svg: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="white"
                className="hover:fill-blue-500 transition-colors duration-300"
            >
                <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path>
            </svg>
        ),
    },
    {
        id: 3,
        title: "Check Shreya on leetcode ",
        link: "https://leetcode.com/u/shreyapatil9530/",
        svg: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="white"
                viewBox="0 0 256 256"
                className="fill-white hover:fill-blue-500 transition-colors duration-300"
            >
                <path d="M129.4 32.3c-6.6 7.3-17.6 18.5-28.7 29.7-21.2 21.2-47.7 47.6-47.7 66.2 0 17.2 18.2 33.8 34.1 45.6 16.1 11.9 32.6 17.6 43.4 17.6 8.9 0 14.7-3.3 17.3-6.6 2.6-3.3 2.7-6.4 2.7-6.4s-4.3 1.1-12.7 1.1c-9.9 0-24.9-3.3-40.7-14.8-17.3-12.8-26.2-24.3-26.2-36.5 0-13.7 12.7-30.4 43.8-61.6 10.6-10.6 21.2-21.4 28.3-28.7 9.4-9.5 8.9-14.2 8.2-16.4-1.4-4.3-6.6-5.2-6.6-5.2s-4.9 2.2-14.1 12.3zM173.5 45.7c-1.7 1.5-3.2 3.1-4.9 4.7l-68.2 68.2c-3.8 3.8-5.5 7.6-5.5 11.5 0 4 2 8 5.5 11.5 3.5 3.5 7.5 5.5 11.5 5.5 3.9 0 7.7-1.7 11.5-5.5l68.2-68.2c1.7-1.7 3.1-3.2 4.7-4.9 8.9-8.9 17.4-14.5 22.4-14.5 2.7 0 4.5.6 6.3 1.7 2.4 1.4 3.9 3.8 4.5 7.5.4 2.6.6 6.3-2.5 11.6-3.1 5.2-10.2 13.5-18.4 21.6-13.2 13.2-28.7 28.9-43.5 43.5-8.8 8.7-11.5 15.2-10.7 21.1.8 5.5 4.9 9.2 10.7 9.2 5.6 0 12.1-3.4 20.9-12.3 11.9-11.9 26.2-26.2 36.6-36.6 12.8-12.8 18.5-23.9 20.3-34.3 1.6-9.5.5-19.7-6.3-27.8-6.6-8-15.7-12.1-25.2-12.1-10.1 0-21.1 5.8-32.9 17.5z" />
            </svg>
        ),
    },
    {
        id: 4,
        title: "Sat Naing's Profile on Facebook",
        link: "https://www.instagram.com/shreyapatil9530",
        svg: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="white"
                className="fill-white hover:fill-blue-500 transition-colors duration-300"
                viewBox="0 0 24 24"
            >
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.25-.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z" />
            </svg>
        ),
    },
];

export default SocialLinks;
