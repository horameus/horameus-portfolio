import { BackgroundViewProps } from './_types';

import './styles.css';

export function BackgroundView({ children }: BackgroundViewProps) {
    return <div className="backgroundView paper">{children}</div>;
}
