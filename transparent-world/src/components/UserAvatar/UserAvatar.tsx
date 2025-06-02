import { createAvatar } from '@dicebear/core';
import { bottts } from '@dicebear/collection';
import { FC, memo } from 'react';
import { Avatar } from '@mui/material';

import styles from './UserAvatar.module.scss';

type Props = {
  readonly username: string;
}

const UserAvatarComponent: FC<Props> = ({ username }) => {
    const avatarSrc = createAvatar(bottts, {
      size: 56,
      seed: username,
    }).toDataUri();

    return (
      <div className={styles.avatarContainer}>
        <Avatar alt={username} src={avatarSrc} sx={{ width: 56, height: 56 }} />
        <span>{ username }</span>
      </div>
    );
};

export const UserAvatar = memo(UserAvatarComponent);
