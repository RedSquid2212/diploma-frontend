import { FC, memo } from "react";
import './CircleButton.scss';
import { Button } from "@mui/material";

type Position = {
    readonly top?: string;
    readonly right?: string;
    readonly bottom?: string;
    readonly left?: string;
};

type Props = {
    readonly text: string;
    readonly width: number;
    readonly height: number;
    readonly backgroundColor: string;
    readonly position: Position;
    readonly animated: boolean;
};

const CircleButtonComponent: FC<Props> = ({
    text,
    width,
    height,
    backgroundColor,
    position,
    animated,
}) => {
    const buttonStyle = {
        '--button-bg': backgroundColor,
        width,
        height,
        backgroundColor,
        ...position,
    };
    const className = `MuiButtonBase-root circle-button ${animated ? 'animated' : ''}`;

    return (
        <Button
            className={className}
            type='button'
            style={buttonStyle}
        >
            { text }
        </Button>
    );
};

export const CircleButton = memo(CircleButtonComponent);
