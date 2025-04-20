import { Button } from "./Button"

import leftSvg from '../assets/left.svg'
import rightSvg from '../assets/right.svg'

type Props = {
    current: number
    total: number
}

export const Pagination = ({ current, total }: Props) => {
    return (
        <div className="flex flex-1 justify-center items-center gap-4">
            <Button variant={"iconSmall"}>
                <img src={leftSvg} alt="" />
            </Button>

            <span className="text-sm text-gray-200">{current}/{total}</span>

            <Button variant={"iconSmall"}>
                <img src={rightSvg} alt="" />
            </Button>
        </div>
    )
}