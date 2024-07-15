import React from 'react';
import './Quarter.scss';

type QuarterColor = 'blue' | 'red' | 'yellow' | 'green';
export enum QuarterPosition {
	PosOne = '0deg',
	PosTwo = '90deg',
	PosThree = '180deg',
	PosFour = '270deg',
}

interface QuarterProps {
	color: QuarterColor;
	position: QuarterPosition
}

function Quarter({color, position} : QuarterProps) {
	const rotation = {
		transform: `rotate(${position})`
	}

	return (
		<svg viewBox="0 0 100 100" className={`quarter quarter--${color}`} style={rotation}>
			<path d="M 50,50 L 50,0 A 50,50 0 0,1 100,50 Z"/>
		</svg>
	)
}

export default Quarter;