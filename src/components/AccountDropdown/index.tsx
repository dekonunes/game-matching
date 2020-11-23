import React from 'react';

import {
	Name,
	SubName,
	Label,
	Menu,
	HomeIcon,
	BellIcon,
	EmailIcon,
	FavoriteIcon,
	ProfileIcon,
	Item
} from './styles';

const AccountDropdown: React.FC = () => (
	<Menu>
		<Label>
			<Name>Someone Famouse</Name>
			<SubName>Web site developer</SubName>
		</Label>
		<ul>
			<Item>
				<HomeIcon />
				<a href="#">Profile</a>
			</Item>
			<Item>
				<BellIcon />
				<a href="#">Settings</a>
			</Item>
			<Item>
				<EmailIcon />
				<a href="#">Inbox</a>
			</Item>
			<Item>
				<ProfileIcon />
				<a href="#">Help</a>
			</Item>
			<Item>
				<FavoriteIcon />
				<a href="#">Donate</a>
			</Item>
		</ul>
	</Menu>
);

export default AccountDropdown;
