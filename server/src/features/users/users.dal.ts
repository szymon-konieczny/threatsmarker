import { uuid } from 'uuidv4';

const USERS_TABLE_NAME = 'users';

export enum Defaults {
  ORDER_BY = 'id',
  SORT_DIRECTION = 'ASC',
  PAGE = 1,
  LIMIT = 20,
  OFFSET = 0,
}

export enum Statuses {
  INACTIVE = 'inactive',
  ACTIVE = 'active',
  BANNED = 'banned',
  DELETED = 'deleted',
}

export enum Roles {
  ADMIN = 'admin',
  MODERATOR = 'moderator',
  USER = 'user',
}

export const fetchUsers = (requestConfig): string => {
  const { page, limit, sortDirection, orderBy } = requestConfig;
  const offset = limit * (page - 1);

  return ` 
    SELECT * FROM ${USERS_TABLE_NAME}
    ORDER BY = ${orderBy || Defaults.ORDER_BY} ${sortDirection || Defaults.SORT_DIRECTION}
    LIMIT = ${limit || Defaults.LIMIT}
    OFFSET = ${offset || Defaults.OFFSET};
  `;
}

export const fetchUser = (userId: string): string => {
  return `
    SELECT * FROM ${USERS_TABLE_NAME}
    WHERE id = ${userId};
  `;
}

const checkIfEmailExistsInDatabase = (email: string): string => {
  return `
    SELECT EXISTS(
    	SELECT 1 FROM ${USERS_TABLE_NAME}
    	WHERE email = ${email};
    );
  `
}

// user's columns => id, name, user_info, email, profile_picture_url, password, role, status, ban_time, threats_count, label
export const addUser = (userConfig): string => {
  const { name, email, userInfo, profilePictureUrl, password, role, status } = userConfig;
  const hashedPassword = password; // TODO: Make password encrypted ;)

  // TODO: Validation of required fields, f.i. name, email, password, etc...

  const userAlreadyExists = checkIfEmailExistsInDatabase(email);

  if (userAlreadyExists) {
    // TODO: Handle that situation
    return;
  }

  const userId = uuid();

  return `
    INSERT INTO ${USERS_TABLE_NAME}
    (user_id, name, email, user_info, profile_picture_url, password, role, status)
    VALUES (
      ${userId},
      ${name},
      ${email},
      ${userInfo},
      ${profilePictureUrl || ''},
      ${hashedPassword},
      ${role || Roles.USER},
      ${status || Statuses.INACTIVE},
    );
  `;
}

export const updateUser = (userConfig): string => {
  const { name, userInfo, email, profilePictureUrl, password, role, status, banTime, threatsCount, label } = userConfig;
  return `
    UPDATE ${USERS_TABLE_NAME}
    SET name = ${name},
        user_info = ${userInfo || ''},
        email = ${email},
        profile_picture_url = ${profilePictureUrl || ''},
        password = ${password},
        role = ${role},
        status = ${status || ''},
        ban_time = ${banTime || ''},
        threats_count = ${threatsCount || ''},
        label = ${label || ''};
  `;
}

export const deleteUser = (userId: string): string => {
  return `
    DELETE FROM ${USERS_TABLE_NAME}
    WHERE id = ${userId};
  `;
}
