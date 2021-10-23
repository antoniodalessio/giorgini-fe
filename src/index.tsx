import * as React from 'react';
import { render } from 'react-dom';
import { Admin, Resource } from 'react-admin';

import dataProvider from './provider/dataProvider';
import authProvider from './provider/authProvider';

import { 
    ProjectList,
    ProjectEdit,
    ProjectCreate,
    ProjectIcon 
} from './resources/Project/index';

import { 
    PageList,
    PageEdit,
    PageIcon,
    PageCreate
} from './resources/page/index';

import { 
    UserList,
    UserEdit,
    UserIcon,
    UserCreate
} from './resources/user/index';


import { 
    PublishShow,
    PubIcon
} from './resources/publish/index';

render(
    <Admin 
        dataProvider={dataProvider}
        authProvider={authProvider}
    >
        <Resource 
            name="page"
            options={{ label: 'Pagine' }}
            list={PageList}
            edit={PageEdit}
            create={PageCreate}
            icon={PageIcon}
        />
        <Resource 
            name="project"
            options={{ label: 'Progetti' }}
            list={ProjectList}
            edit={ProjectEdit}
            create={ProjectCreate}
            icon={ProjectIcon}
        />
        <Resource 
            name="user"
            options={{ label: 'Utenti' }}
            list={UserList}
            edit={UserEdit}
            create={UserCreate}
            icon={UserIcon}
        />
        <Resource
            name="publish"
            options={{ label: 'Pubblica' }}
            list={PublishShow}
            icon={PubIcon}
        />
    </Admin>,
    document.getElementById('root')
);