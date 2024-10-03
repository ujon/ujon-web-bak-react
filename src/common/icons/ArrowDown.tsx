import {Icon} from "ujon-common";

export function ArrowDown({size = '24', className}: Icon) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            className={className}
        >
            <path
                d="M18.3848 12.7854L12 18.771L5.61533 12.7854L6.38477 11.9646L11.4375 16.7016V6H12.5625V16.7016L17.6153 11.9646L18.3848 12.7854Z"
            />
        </svg>

    )
}