import styled, { css } from 'styled-components';
import { iconCSS } from '../../styles/mixings';

import {
	Home,
	Notifications,
	Email,
	FavoriteBorder,
	Person
} from '../../styles/icons';

const icons = css`
	max-width: 2rem;
	margin-right: 1rem;
	color: #555;
`;

export const HomeIcon = styled(Home)`
	${iconCSS}
	${icons}
`;

export const BellIcon = styled(Notifications)`
	${iconCSS}
	${icons}
`;

export const EmailIcon = styled(Email)`
	${iconCSS}
	${icons}
`;

export const FavoriteIcon = styled(FavoriteBorder)`
	${iconCSS}
	${icons}
`;

export const ProfileIcon = styled(Person)`
	${iconCSS}
	${icons}
`;

export const Menu = styled.div`
	padding: 1rem 1rem;
	background: #fff;
	width: 18rem;
	box-sizing: 0 5px 25px rgba(0, 0, 0, 0.1);
	border-radius: 15px;
`;

export const Label = styled.div`
	padding: 2rem 0;
	width: 100%;
	text-align: center;
`;

export const Name = styled.h3`
	font-size: 1.8rem;
	font-weight: 500;
	color: #555;
`;

export const SubName = styled.span`
	font-size: 1.4rem;
	font-weight: 400;
	color: #cecece;
`;

export const Item = styled.li`
	padding: 1rem;
	border-top: 1px solid rgba(0, 0, 0, 0.05);
	display: flex;
	align-items: center;

	&:hover {
		transition: 0.5s;
		background: rgba(0, 0, 0, 0.1);
	}

	a {
		display: inline-block;
		color: #555;
		font-weight: 500;
		font-size: 16px;
	}
`;
