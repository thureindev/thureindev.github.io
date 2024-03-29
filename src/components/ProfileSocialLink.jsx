import { Link } from 'react-router-dom';

const ProfileSocialLink = ({ text, href, icon, isTargetBlank, useAnchorTag }) => {

    const class_name = `inline-block rounded text-sm font-semibold uppercase leading-normal transition duration-150 ease-in-out 
    bg-neutral-800 dark:bg-neutral-50 ${text ? 'px-6': 'px-2' } pb-2 pt-2.5 
    text-neutral-50 dark:text-neutral-800 
    shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] dark:shadow-[0_4px_9px_-4px_#cbcbcb] 
    hover:bg-neutral-800 dark:hover:bg-neutral-100 
    hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] dark:hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] 
    focus:bg-neutral-800 dark:focus:bg-neutral-100 
    focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] 
    focus:outline-none focus:ring-0 dark:focus:outline-none dark:focus:ring-0 
    active:bg-neutral-900 dark:active:bg-neutral-200
    active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] 
    `
    return (

            <>
                {
                    useAnchorTag
                    ?
                    <a 
                        href={href} 
                        target={isTargetBlank?"_blank":""}
                        rel="noopener noreferrer"
                        className={`flex flex-row items-center justify-center ${class_name}`} 
                        aria-current={text}
                        >
                        {text}&nbsp;
                        {icon}
                    </a>
                    :
                    <Link 
                        to={href} 
                        target={isTargetBlank?"_blank":""}
                        rel="noopener noreferrer"
                        className={`flex flex-row items-center justify-center ${class_name}`}
                        aria-current={text}
                        >
                        {text}&nbsp;
                        {icon}
                    </Link>
                }
            </>


    )
}

export default ProfileSocialLink;
